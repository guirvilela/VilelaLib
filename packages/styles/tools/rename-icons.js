// eslint-disable-next-line @typescript-eslint/no-var-requires
const fs = require('fs');

function normalizeFilename(filename) {
  let result = String(filename);
  // fix style outline
  result = result.replace(/Style=O/gi, 'icon-o');
  // fix style solid
  result = result.replace(/Style=S/gi, 'icon-s');
  // fix name
  result = result.replace(/, Name=/gi, '-');
  // remove spaces
  result = result.replace(/\s/gi, '-');
  // finish in lowercase
  return result.toLowerCase();
}

function rename(filename, dir) {
  const to = normalizeFilename(filename);
  if (`${dir}/${filename}` === `${dir}/${to}`) return;
  fs.renameSync(`${dir}/${filename}`, `${dir}/${to}`);
  console.log(`${filename} renamed to ${to}`);
}

function main() {
  const iconsDir = './src/icons';

  const files = fs.readdirSync(iconsDir);
  for (const filename of files) {
    rename(filename, iconsDir);
  }

  console.log('rename done!');
}

main();
