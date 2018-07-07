<div align="center">
  <img width="250" height="200"
    src="https://pbs.twimg.com/media/DcM9lLoVQAAnVSz.png">
  <a href="https://github.com/webpack/webpack">
    <img width="200" height="200"
      src="https://webpack.js.org/assets/icon-square-big.svg">
  </a>
  <h1>React-Parcel Starter</h1>
</div>

This is a code boilerplate built with **ParcelJS** which it could be used as starter project template for ReactJS Projects. It comes ready to
install dependencies for _React_ and _ReactDOM_. It refreshs automatically and CSS files compile minified with updated autoprefixer following
[caniuse][1] and using _Postcss_.

## How to use it

Ensure you have [ParcelJS][2] blunder globally:

```
npm install -g parcel-bundler
```
Download the repository and init the project:

```
npm install
```
To work in development mode:
```
npm start
```

To send project to production:
```
npm build
```

To check ESlint previous commit using ***lint-staged***:
```
npm precommit
```
## Modules installed

* Babel, babel-core, babel-eslint, babel-plugin-transform-class-properties, babel-plugin-transform-object-rest-spread, babel-preset-env, babel-preset-react.

* Eslint, eslint-config-prettier, eslint-config-standard, eslint-config-standard-react, eslint-plugin-import, eslint-plugin-node, eslint-plugin-promise, eslint-plugin-react, eslint-plugin-standard.

* Node-sass, postcss, autoprefixer, postcss-modules, browserslist.

* React, ReactDom, redux, react-redux, react-router-dom, prop-types, axios.

* Classnames, Normalize.css

* Lint-staged, husky.

[1]: http://caniuse.com/
[2]: https://parceljs.org/
