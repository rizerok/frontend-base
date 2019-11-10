/* eslint global-require: "off", no-console: "off" */
const merge = require('webpack-merge');
const dotenv = require('dotenv');

dotenv.config();

const sameRule = (a, b) => {
  if (String(a.test) !== String(b.test)) { // check test
    return false;
  }

  let use1;
  let use2;
  // eslint-disable-next-line no-unused-expressions
  Array.isArray(a.use) ? use1 = a.use : use1 = [a.use];
  // eslint-disable-next-line no-unused-expressions
  Array.isArray(b.use) ? use2 = b.use : use2 = [b.use];
  if (use1.length !== use2.length) { // check loaders count
    return false;
  }

  for (let i = 0; i < use1.length; i++) { // check by loaders
    if (use1[i].loader !== use2[i].loader) {
      return false;
    }
  }

  return true;
};

const mergeConfig = {
  customizeArray(a, b, key) {
    if (key === 'module.rules') {
      const rules = b;
      a.forEach(elA => {
        if (rules.every(r => !sameRule(r, elA))) { // uniq
          rules.push(elA);
        }
      });
      return rules;
    }
    return undefined;
  },
  customizeObject(a, b, key) {
    if (key === 'entry') {
      return b;
    }
    return undefined;
  }
};

module.exports = env => {
  const ENV = env || process.env.NODE_ENV || 'development';

  let clientConfig;

  console.log(`Run ${ENV} build.`);

  // eslint-disable-next-line default-case
  switch (ENV) {
  case 'development': {
    const base = require('./webpack/webpack.client.js');
    const dev = require('./webpack/webpack.dev.js');
    clientConfig = merge(mergeConfig)(base, dev);
    break;
  }
  case 'production': {
    const base = require('./webpack/webpack.client.js');
    const prod = require('./webpack/webpack.prod.js');
    clientConfig = merge(mergeConfig)(base, prod);
    break;
  }
  }

  return clientConfig;
};
