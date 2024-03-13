// .eslintrc.js
module.exports = {
  overrides: [
    // 支持：.html文件的HTML元素标签
    {
      plugins: [ '@html-eslint' ],
      files: [ '*.html' ],
      parser: '@html-eslint/parser',
      extends: [ 'plugin:@html-eslint/recommended' ],
      rules: {
        // prettier
        '@html-eslint/no-extra-spacing-attrs': 0,
        '@html-eslint/element-newline': 0,
        '@html-eslint/indent': 0,
        '@html-eslint/quotes': 0,
        '@html-eslint/require-closing-tags': [ 0, { selfClosing: 'always', allowSelfClosingCustom: true } ],
      },
    },
    // 支持：.html文件的js代码
    {
      plugins: [ 'html' ],
      files: [ '*.html' ],
    },
  ],
};
