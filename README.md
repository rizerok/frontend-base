#frontend-base
- UI: react
- store management: redux
- bundler: webpack 5
- TS transpiling: babel
- languages:
  - index: pug
  - styles: styled-components
  - webpack configs: javascript
  - tests: javascript
  - project src: typescript

## install
1) Clone this repository
2) remove ```.git/``` dir
3) create ```.env``` like example ```example.env```
4) npm i
5) use npm scripts
```json
  {
      "build:dev": "NODE_ENV=development webpack --progress",
      "watch:dev": "NODE_ENV=development webpack-dev-server --progress",
      "build:prod": "NODE_ENV=production webpack --progress",
      "lint": "eslint -c \"./eslint/common.eslintrc.js\" \"**/**.ts*\" && stylelint \"**/**.scss\"",
      "lint:fix": "eslint \"**/**.tsx*\" --fix && stylelint \"**/**.scss\" --fix",
      "commit": "git-cz"
    }
```

## scripts
`npm run build:dev` - build dev version in `/public` directory.

`npm run build:prod` - build prod version in `/public` directory.

`npm run watch:dev` - for development.

`npm run lint` - check syntax error and warring.

`npm run lint:fix` - try fix syntax error and warring.

`npm run commit` - helper for git.


## TODOs

- [ ] tests for build (check all scripts, check production build, check storybook)
  - [x] check what webpack watch:dev running
  - [ ] check what site reload when files change
  - [ ] check hot reloading
  - [ ] check storybook
  - [ ] check build
    - [ ] run build and run puppeteer e2e tests
    - [ ] dev
    - [ ] production
    - [ ] create public dir
    - [ ] check svgr
  - [ ] puppeteer e2e
- [x] change merge logic of webpack configs with lodash
- [ ] create initial script(change project name, remove dirs, create files)
  - [x] install shelljs
  - [ ] create initial script
  - [ ] in script:
    - [ ] in package.json:
      - [ ] rename name
      - [ ] change version to 0.0.1
      - [ ] change repository
      - [ ] change bugs
      - [ ] change homepage
      - [ ] remove shelljs
      - [ ] remove lib-async-operations
- [ ] think about generating index.html with from react with ssr

