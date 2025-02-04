/* eslint-disable @typescript-eslint/no-var-requires */
const path = require('path');
const fs = require('fs');
const os = require('os');
const typedoc = require('typedoc');

const LIB_SHARED = {
  package: 'shared',
  dirs: ['hooks', 'utils', 'types']
};

const LIB_STYLES = {
  package: 'styles',
  dirs: [
    'animations',
    'hooks',
    'providers/layout',
    'providers/theme',
    'utils',
    'variables'
  ]
};

const LIB_HTTP = {
  package: 'http',
  dirs: ['hooks', 'providers', 'utils']
};

const LIB_I18N = {
  package: 'i18n',
  dirs: ['hooks', 'providers', 'types']
};

const LIB_DATAEXPORT = {
  package: 'data-export',
  dirs: ['csv', 'image', 'pdf', 'qrcode']
};

const LIB_AUTH = {
  package: 'auth',
  dirs: ['providers']
};

const LIB_PERMISSIONS = {
  package: 'permissions',
  dirs: ['providers']
};

const LIB_OBSERVABILITY = {
  package: 'observability',
  dirs: ['providers']
};

async function main() {
  const pkgs = [
    LIB_SHARED,
    LIB_STYLES,
    LIB_HTTP,
    LIB_I18N,
    LIB_DATAEXPORT,
    LIB_AUTH,
    LIB_PERMISSIONS,
    LIB_OBSERVABILITY
  ];

  for (const pkg of pkgs) {
    const inputDirs = pkg.dirs.map(
      (x) => path.resolve(`../packages/${pkg.package}/src`, x) + '/*'
    );
    const outputDir = path.resolve(`./src/3-libs/${pkg.package}/auto-gen`);

    await createMdx(inputDirs, outputDir, pkg.package);

    await replaceFiles(outputDir, pkg.package);

    // break;
  }

  console.log('jsdoc to mdx done!');
}

async function createMdx(inputDirs, outputDir, name) {
  const title = name.charAt(0).toUpperCase() + name.substring(1);

  const app = await typedoc.Application.bootstrapWithPlugins({
    entryPoints: inputDirs,
    name: `${title} Library`,
    readme: path.resolve(`./src/3-libs/${name}/index.mdx`),
    tsconfig: path.resolve(`../packages/${name}/tsconfig.json`),
    plugin: [
      'typedoc-plugin-markdown',
      'typedoc-plugin-merge-modules',
      'typedoc-plugin-inline-sources',
      'typedoc-plugin-mdn-links'
    ],
    entryFileName: 'index',
    fileExtension: '.mdx',
    publicPath: `/?path=/docs/libs-${name}`,

    // outputFileStrategy: 'modules',
    useCodeBlocks: true,
    expandObjects: true,
    expandParameters: true,
    mergeReadme: true,
    includeVersion: false,

    indexFormat: 'htmlTable',
    parametersFormat: 'htmlTable',
    interfacePropertiesFormat: 'htmlTable',
    classPropertiesFormat: 'htmlTable',
    enumMembersFormat: 'htmlTable',
    typeDeclarationFormat: 'htmlTable',
    propertyMembersFormat: 'htmlTable'
  });

  const project = await app.convert();

  await app.generateDocs(project, outputDir);
}

async function replaceFiles(outputDir, name) {
  const files = [];
  const title = name.charAt(0).toUpperCase() + name.substring(1);

  recursiveReadDirSync(outputDir, files);

  for (const file of files) {
    const storyname = file
      .replace(outputDir, '')
      .replace('.mdx', '')
      .replaceAll('\\', '/')
      .substring(1);

    let contents = [];

    //add imports
    contents.push("import { Meta } from '@storybook/addon-docs';");

    //add storybook meta
    if (storyname === 'index') {
      contents.push(`<Meta title="Libs/${title}/Overview" />`);
    } else {
      contents.push(`<Meta title="Libs/${title}/${storyname}" />` + '\n\n');
    }

    //read contents jsdoc
    let mdx = fs.readFileSync(file).toString();
    //fix home route
    mdx = fixIndexRoute(name, mdx);
    //fix others route
    mdx = fixRoutes(name, mdx);
    //convert md table to html table
    mdx = convertMdTableToHtml(mdx);

    //add mdx content
    contents.push(mdx);

    //add footer
    contents.push('***', 'Keep calm and code on 🤘.');

    fs.writeFileSync(file, contents.join('\n\n'), 'utf-8');
  }
}

function recursiveReadDirSync(dir, output = []) {
  const outputFiles = fs.readdirSync(dir);

  for (const item of outputFiles) {
    const file = path.resolve(dir, item);
    const stat = fs.statSync(file);
    if (stat.isDirectory()) {
      recursiveReadDirSync(file, output);
    } else {
      output.push(file);
    }
  }
}

function fixRoutes(name, content) {
  const regex = new RegExp(`${name}\\/(.*)\\.mdx`);

  let occurrency;
  do {
    occurrency = regex.exec(content);
    if (occurrency?.[0]) {
      const replaceTo = occurrency[0]
        .replaceAll('%5C', '-')
        .replaceAll('/', '-')
        .replaceAll('.mdx', '')
        .toLowerCase();
      content = content.replaceAll(occurrency[0], replaceTo);
    }
  } while (occurrency);

  return content;
}

function fixIndexRoute(name, content) {
  return content.replaceAll(`${name}/index.mdx`, `${name}-overview--page`);
}

function convertMdTableToHtml(content) {
  const regex = /^\|(.*)\|$/gm;

  const rows = [];

  let occurrency;
  do {
    occurrency = regex.exec(content);
    if (occurrency?.[0]) rows.push(occurrency?.[0]);
  } while (occurrency);

  for (let i = 0; i < rows.length; i++) {
    let newRow = '';

    if (rows[i].includes('------')) {
      newRow = '<tr></tr>';
    } else if (i === 0) {
      newRow = rows[i]
        .replaceAll(/ \| /g, '</th><th>')
        .replaceAll(/^\| /g, `<table>${os.EOL}<tr><th>`)
        .replaceAll(/ \|$/g, '</th></tr>');
    } else if (i === rows.length - 1) {
      newRow = rows[i]
        .replaceAll(/ \| /g, '</td><td>')
        .replaceAll(/^\| /g, '<tr><td>')
        .replaceAll(/ \|$/g, `</td></tr>${os.EOL}</table>`);
    } else {
      newRow = rows[i]
        .replaceAll(/ \| /g, '</td><td>')
        .replaceAll(/^\| /g, '<tr><td>')
        .replaceAll(/ \|$/g, '</td></tr>');
    }

    newRow = newRow.replaceAll('\\|', '|');

    content = content.replaceAll(rows[i], newRow);
  }

  return content;
}

main();
