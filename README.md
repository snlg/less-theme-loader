# webpack less loader for import theme into less files

## install
```bash
npm i less-theme-loader --save-dev
```

## use
**webpack.config.js**
```js
module.exports = {
  module: {
    loaders: [
      {
        test: /\.less$/,
        loaders: ['less-theme-loader'],
        options:{
          themeFilesPath:path.resolve('')
        }
      }
    ]
  }
};
```
**org file**
```less
bady{
  ...
}
```
**output file**
```less
@import 'xxx'
bady{
  ...
}
```