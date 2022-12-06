This is a simple loader for including SVG vector images in your JS code.
## Install from NPM
```bash
npm install -D svg-loaders-js
```
## Usage in code
Import svg in your module:
```js
import icon from './icon.svg';
```
and use a ready to place svg element:
```js
const button = document.createElement("button");
button.append(icon);
```

## Options
Loader has no additional options. 

## Description
This loader does not support loading an svg file with several icons separated by id

## Git
Git [repository](https://github.com/MikAleinik/svg-loader-js) with loader files.
