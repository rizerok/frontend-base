/* eslint global-require: "off", no-console: "off", @typescript-eslint/no-var-requires: "off" */
const dotenv = require('dotenv');
const { mergeWith } = require('lodash');

dotenv.config();

// check same(not uniq) rule
const sameRule = (a, b) => {
  // check regexp
  if (String(a.test) !== String(b.test)) { // check test
    return false;
  }

  // if use not array -> set array
  const use1 = Array.isArray(a.use) ? a.use : [a.use];
  const use2 = Array.isArray(b.use) ? b.use : [b.use];
  // and check loaders count
  if (use1.length !== use2.length) { // check loaders count
    return false;
  }

  for (let i = 0; i < use1.length; i++) { // check by loaders ordering
    if (use1[i].loader !== use2[i].loader) {
      return false;
    }
  }

  // if conditions are not met -> rule is same, not uniq
  return true;
};

const mergeByStrategy = (configA, configB) => mergeWith(
  configA,
  configB,
  (valueA, valueB, key, object, source, stack) => {
    // strategy
    if (key === 'rules') {
      valueA.forEach(elA => {
        if (valueB.every(r => !sameRule(r, elA))) { // if ruleA is uniq
          valueB.push(elA);
        }
      });
      return valueB;
    }
    if (Array.isArray(valueA)) {
      return valueA.concat(valueB);
    }

    return undefined;
  }
);

module.exports = (env) => {
  const ENV = env || process.env.NODE_ENV || 'development';
  let clientConfig;

  console.log(`Run ${ENV} build.`);

  const base = require('./webpack/webpack.client.js');
  // eslint-disable-next-line default-case
  switch (ENV) {
  case 'development': {
    const dev = require('./webpack/webpack.dev.js');
    clientConfig = mergeByStrategy(base, dev);
    break;
  }
  case 'production': {
    const prod = require('./webpack/webpack.prod.js');
    clientConfig = mergeByStrategy(base, prod);
    break;
  }
  }
  return clientConfig;
};
