const fs = require('fs');
const path = require('path');

const pkg = require('../package.json');

const distPath = path.resolve(__dirname, '../dist');

fs.copyFileSync(
  path.resolve(__dirname, '../README.md'),
  `${distPath}/README.md`,
);

fs.copyFileSync(path.resolve(__dirname, '../LICENSE'), `${distPath}/LICENSE`);
fs.copyFileSync(
  path.resolve(__dirname, '../src/wetrust-ui.css'),
  `${distPath}/wetrust-ui.css`,
);

fs.writeFileSync(`${distPath}/package.json`, JSON.stringify(pkg, null, 2));
