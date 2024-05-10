# fabric-demo
eslint+prettier+stylelint + husky+Lint-staged for vue@2 and egg.js（excluding .ts）.

>针对Node.js 16.17.0+

0. 起步（安装方式二选一）

    1. 方案一

        1. 🗑删除冲突的依赖（删除eslint、stylelint、prettier、以及他们仨的各种依赖库、config、plugin）

            `npm uninstall @umijs/fabric stylelint-config-prettier stylelint-declaration-block-no-ignored-properties @typescript-eslint/eslint-plugin && npm uninstall eslint eslint-plugin-vue @html-eslint/parser @html-eslint/eslint-plugin eslint-plugin-html eslint-config-egg eslint-config-prettier  stylelint stylelint-config-standard stylelint-config-css-modules stylelint-scss stylelint-config-standard-less postcss-less stylelint-config-standard-scss postcss-scss postcss-html stylelint-config-html stylelint-config-standard-vue  prettier`
        2. 🔨安装依赖

            `npm i --save-dev fabric-demo@1`
    2. <details>

        <summary>方案二</summary>

        1. 🗑删除冲突的依赖

            `npm uninstall @umijs/fabric stylelint-config-prettier stylelint-declaration-block-no-ignored-properties @typescript-eslint/eslint-plugin`
        2. 🔨安装依赖

            `npm i --save-dev eslint@8 eslint-plugin-vue@9 @html-eslint/parser@0 @html-eslint/eslint-plugin@0 eslint-plugin-html@8 eslint-config-egg@13 eslint-config-prettier@9  stylelint@15 stylelint-config-standard@34 stylelint-config-css-modules@4.3.0 stylelint-scss@5 stylelint-config-standard-less@2 postcss-less@6 stylelint-config-standard-scss@11 postcss-scss@4 postcss-html@1 stylelint-config-html@1 stylelint-config-standard-vue@1  prettier@2  fabric-demo@0`
        </details>
1. [eslint](https://github.com/eslint/eslint)@8

    1. 🔧配置 `项目根目录/.eslintrc.js`

        ```js
        module.exports = {
          extends: [require.resolve('fabric-demo/eslint')],
          root: true,
          // 其他自定义配置
        };
        ```
    2. 🔧（可选）按需配置`项目根目录/.eslintignore`，如：

        ```ignore
        **/app/public
        ```
2. [stylelint](https://github.com/stylelint/stylelint)@15

    1. 🔧配置`项目根目录/.stylelintrc.js`

        ```js
        module.exports = {
          extends: [ require.resolve("fabric-demo/stylelint")],
          // 其他自定义配置
        };
        ```
    2. 🔧（可选）按需配置`项目根目录/.stylelintignore`，如：

        ```ignore
        **/app/public
        ```
3. [prettier](https://github.com/prettier/prettier)@2

    1. 🔧配置 `项目根目录/.prettierrc.js`

        ```js
        module.exports = Object.assign({}, require("fabric-demo").prettier, {
          // 其他自定义配置
        })
        ```
    2. 🔧（可选）按需配置`项目根目录/.prettierignore`，如：

        ```ignore
        **/app/public
        package-lock.json
        ```
- 🔧新增package.json的`scripts`中

    ```json
    "eslint": "eslint --fix --cache --ext .js,.vue,.html .",
    "stylelint": "stylelint **/*.{css,less,scss,vue,html} --fix --cache --quiet",
    "prettier": "prettier **/*.{js,jsx,vue,flow,ts,tsx,css,less,scss,html,json,yml,yaml} --write --cache --no-error-on-unmatched-pattern"
    ```
4. [husky](https://github.com/typicode/husky)@8

    1. 🗑删除package.json内配置：

        ```json
        # 删除以下全部：
        "husky": {
          "hooks": {
            "pre-commit": "npm run lint-staged",
            "commit-msg": "commitlint -E HUSKY_GIT_PARAMS"
          }
        }
        ```
    2. 🛠️安装和配置husky

        `npx husky-init@8 && npm i && npx husky@8 set .husky/pre-commit "npm run lint-staged" && npx husky@8 set .husky/commit-msg 'npx --no -- commitlint --edit "$1"'`
    3. 🛠️安装和配置commitlint

        `npm i --save-dev @commitlint/config-conventional@17 @commitlint/cli@17 && echo "module.exports = {extends: ['@commitlint/config-conventional']}" > commitlint.config.js`
5. [lint-staged](https://github.com/lint-staged/lint-staged)@14

    1. 🔨安装依赖

        `npm i --save-dev lint-staged@14`
    2. 🔧配置package.json

        ```json
        "lint-staged": {
          "*.{js,vue,html}": "eslint --fix --cache --ext .js,.vue,.html",
          "*.{css,less,scss,vue,html}": "stylelint --fix --cache",
          "*.{js,jsx,vue,flow,ts,tsx,css,less,scss,html,json,yml,yaml}": "prettier --write --cache"
        },
        ```
    3. 🔧新增package.json的`scripts`中

        ```json
        "lint-staged": "lint-staged -p false"
        ```
6. 其他

    1. 🔧（可选）按需新增`项目根目录/.gitignore`，如：

        ```ignore
        # 保留之前的配置，新增：
        .eslintcache
        .stylelintcache
        ```

---
#### 理念
1. 最简单的安装和配置
2. 支持添加自定义配置进行覆盖
3. 规则按照已在使用库的相关config推荐（egg@2、vue@2）

    选择最基本的规则配置，如：`eslint:recommended`、`plugin:vue/recommended`，暂不使用社区第三方的规则。
