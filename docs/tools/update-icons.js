/* eslint-disable @typescript-eslint/no-var-requires */
const fs = require('fs');
const path = require('path');

function titleCase(text) {
  return String(text)
    .replace(/(-|_)/g, ' ')
    .split(' ')
    .map((x) => x.charAt(0).toUpperCase() + x.substring(1).toLowerCase())
    .join('');
}

function missingIcons(files, content) {
  return files.filter((file) => {
    const iconName = file.replace('.svg', '');
    return !content.includes(iconName);
  });
}

function addIcon(files, content) {
  const lines = content.split('\n');

  let importLine = lines.findIndex((line) => line.includes('Import end')) - 1;
  let iconsOutlineLine =
    lines.findIndex((line) => line.includes(`Outline end`)) - 2;
  let iconsSolidLine =
    lines.findIndex((line) => line.includes(`Solid end`)) - 2;

  for (const file of files) {
    importLine += 1;
    iconsOutlineLine += 1;
    iconsSolidLine += 1;

    const iconName = file.replace('.svg', '');

    lines.splice(
      importLine,
      0,
      `import ${titleCase(iconName)} from '@hubert/styles/lib/icons/${file}';`
    );
    if (iconName.includes('outline')) {
      lines.splice(
        iconsOutlineLine,
        0,
        `  '${iconName}': ${titleCase(iconName)},`
      );
    } else {
      lines.splice(
        iconsSolidLine,
        0,
        `  '${iconName}': ${titleCase(iconName)},`
      );
    }
  }

  return lines.join('\n');
}

function main() {
  const iconsDir = path.resolve('../node_modules/@hubert/styles/lib/icons');
  const iconsFile = path.resolve(
    './src/2-design-system/atoms/hub-icon/icons.ts'
  );

  const file = fs.readFileSync(iconsFile);
  const content = file.toString();

  const files = fs.readdirSync(iconsDir);

  const missing = missingIcons(files, content);

  if (!missing.length) {
    console.log('icons already updated!');
    process.exit(0);
  }

  const newContent = addIcon(missing, content);

  fs.writeFileSync(iconsFile, newContent, 'utf-8');

  console.log('update icons done!');
}

main();
