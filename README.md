# fabric-demo
eslint+prettier+stylelint + husky+Lint-staged for vue@2 and egg.js（excluding .ts）.

[![NPM Version](https://img.shields.io/npm/v/fabric-demo)](https://www.npmjs.com/package/fabric-demo)
![Node Current](https://img.shields.io/node/v/fabric-demo)

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

    1. 🔧配置`项目根目录/.eslintrc.js`

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
        *.min.*
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
        *.min.*
        ```
3. [prettier](https://github.com/prettier/prettier)@2

    1. 🔧配置`项目根目录/.prettierrc.js`

        ```js
        module.exports = Object.assign({}, require("fabric-demo").prettier, {
          // 其他自定义配置
        })
        ```
    2. 🔧（可选）按需配置`项目根目录/.prettierignore`，如：

        ```ignore
        **/app/public
        package-lock.json
        *.min.*
        ```
- 🔧新增package.json的`scripts`中

    ```json
    "eslint": "eslint --fix --cache --ext .js,.vue,.html .",
    "stylelint": "stylelint '**/*.{css,less,scss,vue,html}' '*.{css,less,scss,vue,html}' --fix --cache --quiet",
    "prettier": "prettier '**/*.{js,jsx,vue,flow,ts,tsx,css,less,scss,html,json,yml,yaml}' '*.{js,jsx,vue,flow,ts,tsx,css,less,scss,html,json,yml,yaml}' --write --cache --no-error-on-unmatched-pattern"
    ```
- 🔧新增`项目根目录/.gitignore`

    ```ignore
    # 保留之前的配置，新增：
    .eslintcache
    .stylelintcache
    ```
---

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
    2. 🛠️安装和配置husky（需要`commitlint`、`lint-staged`）

        `npx husky-init@8 && npm i && npx husky@8 set .husky/pre-commit "npm run lint-staged" && npx husky@8 set .husky/commit-msg 'npx --no -- commitlint --edit "$1"'`
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
6. [commitlint](https://github.com/conventional-changelog/commitlint)@17

    1. 方案一（本地安装、配置）

        1. 🔨安装依赖

            `npm i --save-dev @commitlint/config-conventional@17 @commitlint/cli@17`
        2. 🔧配置`项目根目录/.commitlintrc.js`

            ```js
            module.exports = {extends: ['@commitlint/config-conventional']};
            ```
    2. <details>

        <summary>方案二（全局安装、配置）</summary>

        1. 🛠️全局安装依赖、添加配置

            ```shell
            npm i -g @commitlint/config-conventional@17 @commitlint/cli@17

            echo "module.exports = {extends: ['@commitlint/config-conventional']};" > ~/.commitlintrc.js
            ```
        2. 🗑删除本地的依赖

            `npm uninstall @commitlint/config-conventional @commitlint/cli`
        3. 🗑删除[本地配置](https://github.com/conventional-changelog/commitlint#config)
        </details>
7. 其他（可选）

    1. [git cz](https://github.com/commitizen/cz-cli)

        1. 🔨全局安装依赖

            `npm i -g commitizen`
        2. 适配器选择

            1. 方案一：默认适配器

                🔧配置package.json

                ```json
                "config": {
                  "commitizen": {
                    "path": "cz-conventional-changelog"
                  }
                }
                ```
            2. 方案二：用`commitlint`配置作为适配器

                >`commitizen`和`commitlint`使用同一份配置

                1. 方案一（本地安装、配置）

                    1. 🔨安装依赖

                        `npm i --save-dev @commitlint/cz-commitlint`
                    2. 🔧配置package.json

                        ```json
                        "config": {
                          "commitizen": {
                            "path": "@commitlint/cz-commitlint"
                          }
                        }
                        ```
                2. <details>

                    <summary>方案二（全局安装、配置）</summary>

                    1. 🛠️全局安装依赖、添加配置

                        ```shell
                        npm i -g @commitlint/cz-commitlint

                        echo '{ "path": "@commitlint/cz-commitlint" }' > ~/.czrc
                        ```
                    2. 🗑删除本地的依赖

                        `npm uninstall commitizen @commitlint/cz-commitlint cz-conventional-changelog cz-customizable`
                    3. 🗑删除package.json内配置：

                        ```json
                        # 删除以下全部：
                        "config": {
                          "commitizen": {
                            "path": "cz-conventional-changelog"
                          }
                        }
                        ```
                    </details>

---
#### 理念
1. 最简单的安装和配置
2. 支持添加自定义配置进行覆盖
3. 规则按照已在使用库的相关config推荐（egg@2、vue@2）

    选择最基本的规则配置，如：`eslint:recommended`、`plugin:vue/recommended`，暂不使用社区第三方的规则。
