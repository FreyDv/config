# config
Latest common config for prettier eslint typescript and ect.


## Installation

```sh
npm i -D @dfri/config
```

## Usage

`tsconfig.json`

```json
{
  "extends": "@dfri/config/tsconfig.json",
  "compilerOptions": {
    "outDir": "dist",
    "noUnusedParameters": false
  },
  "include": ["src/**/*", "test/**/*", "bin/**/*"],
  "exclude": ["node_modules"]
}
```

`.eslintrc`

```json
{
  "extends": "@dfri/config/eslint.config.mjs",
  "rules": {}
}
```

`.prettier.config.mjs`

```js
import baseConfig from '@dfri/config/prettier.config.mjs';

const config = {
...baseConfig
}

export default config;
```