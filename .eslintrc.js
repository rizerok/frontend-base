const commonConfig = require('./eslint/common.eslintrc');
const editorConfig = require('./eslint/editor.eslintrc');

module.exports = {
    ...commonConfig,
    rules: {
        ...commonConfig.rules,
        ...editorConfig.rules
    }
};
