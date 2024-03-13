// .stylelintrc.js
module.exports = {
  extends: [ "stylelint-config-standard", "stylelint-config-css-modules" ],
  overrides: [
    {
      files: [ "**/*.less" ],
      extends: [ "stylelint-config-standard-less", "stylelint-config-css-modules" ],
      customSyntax: 'postcss-less',
      rules: {
        // 开启函数
        "function-no-unknown": [ true, { ignoreFunctions: [ "tint", "fade", "svg-gradient", "image-width", "image-height", "image-size", "darken" ] } ],

        // 解析有问题，只好关闭
        "less/color-no-invalid-hex": null,
        "less/no-duplicate-variables": null
      }
    },
    {
      files: [ "**/*.scss" ],
      extends: [ "stylelint-config-standard-scss", "stylelint-config-css-modules" ],
      customSyntax: 'postcss-scss',
      rules: {
        "scss/no-global-function-names": [ true, { "severity": "warning" } ],

        // 开启函数
        "function-no-unknown": [ true, { ignoreFunctions: [ "mix", "alpha", "str-slice", "inspect" ] } ],

        // 命名
        "scss/dollar-variable-pattern": null,
        "scss/at-function-pattern": null,
        "scss/at-mixin-pattern": null,
        "scss/load-no-partial-leading-underscore": null,

        // prettier
        "scss/operator-no-unspaced": null,
        "scss/double-slash-comment-whitespace-inside": null,
      }
    },
    {
      files: [ "**/*.html" ],
      extends: "stylelint-config-html",
    },
    // 必须放在html下面
    {
      files: [ "**/*.vue" ],
      extends: [
        "stylelint-config-standard-vue",
      ],
    },
  ],
  rules: {
    // 书写习惯
    "alpha-value-notation": 'number',

    // 开启函数
    "function-no-unknown": [ true, { ignoreFunctions: [ "constant", "alpha" ] } ],

    // 小数点位数
    "number-max-precision": null,

    // 空
    "block-no-empty": [ true, { "severity": "warning" } ],
    "no-empty-source": null,

    // 重复
    "no-duplicate-selectors": [ true, { "severity": "warning" } ],

    // 优先级顺序
    "no-descending-specificity": null,

    // font-family属性
    "font-family-no-missing-generic-family-keyword": null,

    // 命名
    "selector-class-pattern": null,
    "selector-id-pattern": null,
    "keyframes-name-pattern": null,

    // 解析有问题，只好关闭
    "media-query-no-invalid": null,
    "media-feature-name-no-unknown": null,

    // 不处理浏览器前缀
    "selector-no-vendor-prefix": null,
    "property-no-vendor-prefix": null,
    "at-rule-no-vendor-prefix": null,
    "media-feature-name-no-vendor-prefix": null,
    "value-no-vendor-prefix": null,

    // prettier
    "declaration-block-single-line-max-declarations": null,
    "rule-empty-line-before": "never",
    "declaration-empty-line-before": "never",
    "custom-property-empty-line-before": "never",
    "comment-empty-line-before": "never",
  }
};
