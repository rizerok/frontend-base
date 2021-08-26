#frontend-base
- UI: react
- store management: redux
- languages:
  - index: pug
  - styles: styled-components
  - webpack configs: javascript
  - project src: typescript

## install
1) Clone this repository
2) create ```.env``` like example ```example.env```
3) npm i
4) use npm scripts
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


## TODO

- [ ] tests for build (check all scripts, check production build, check storybook)
- [ ] change merge logic of webpack configs with lodash
- [ ] create initial script(change project name, remove dirs, create files)
  - [ ] install node-ssh
  - [ ] create initial script
  - [ ] in script:
    - [ ] in package.json:
      - [ ] rename name
      - [ ] change version to 0.0.1
      - [ ] change repository
      - [ ] change bugs
      - [ ] change homepage
      - [ ] remove node-ssh

