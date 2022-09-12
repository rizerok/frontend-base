/*
eslint global-require: "off",
no-console: "off",
@typescript-eslint/no-var-requires: "off",
no-undef: "off"
*/
const sh = require('shelljs');
const { waitTime } = require('lib-async-operations/src/wait');

describe('scripts, npm run watch:dev', () => {
  jest.setTimeout(20000);
  // console messages
  const messages = [];
  // childProcess
  let child;
  beforeAll(async () => {
    // RUN SCRIPT
    child = sh.exec('npm run watch:dev', { async: true, silent: true });
    child.stdout.on('data', (data) => {
      messages.push(data);
    });
    await waitTime(10000);
  });

  afterAll(() => {
    // kill child process and stop webpack dev server
    child.kill('SIGINT');
  });

  test('should be message about development build', () => {
    expect(messages.findIndex(m => m.indexOf('Run "development" build.') !== -1)).not.toBe(-1);
  });
  test('should be message about Compiled successfully.', () => {
    console.log('messages', messages);
    expect(messages.findIndex(m => m.indexOf('compiled successfully') !== -1)).not.toBe(-1);
  });
});
