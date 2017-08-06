# PostCSS Inset [<img src="https://postcss.github.io/postcss/logo.svg" alt="PostCSS Logo" width="90" height="90" align="right">][postcss]

[![NPM Version][npm-img]][npm-url]
[![Linux Build Status][cli-img]][cli-url]
[![Windows Build Status][win-img]][win-url]
[![Gitter Chat][git-img]][git-url]

[PostCSS Inset] lets you do use the [`inset`] shorthand property in CSS.

```css
.example {
  inset: 10px 20px 80px;
}

/* becomes */

.example {
  top: 10px;
  right: 20px;
  bottom: 80px;
  left: 20px;
}
```

## Usage

Add [PostCSS Inset] to your build tool:

```bash
npm install postcss-inset --save-dev
```

#### Node

Use [PostCSS Inset] to process your CSS:

```js
require('postcss-inset').process(YOUR_CSS);
```

#### PostCSS

Add [PostCSS] to your build tool:

```bash
npm install postcss --save-dev
```

Use [PostCSS Inset] as a plugin:

```js
postcss([
  require('postcss-inset')()
]).process(YOUR_CSS);
```

#### Gulp

Add [Gulp PostCSS] to your build tool:

```bash
npm install gulp-postcss --save-dev
```

Use [PostCSS Inset] in your Gulpfile:

```js
var postcss = require('gulp-postcss');

gulp.task('css', function () {
  return gulp.src('./src/*.css').pipe(
    postcss([
      require('postcss-inset')()
    ])
  ).pipe(
    gulp.dest('.')
  );
});
```

#### Grunt

Add [Grunt PostCSS] to your build tool:

```bash
npm install grunt-postcss --save-dev
```

Use [PostCSS Inset] in your Gruntfile:

```js
grunt.loadNpmTasks('grunt-postcss');

grunt.initConfig({
  postcss: {
    options: {
      use: [
        require('postcss-inset')()
      ]
    },
    dist: {
      src: '*.css'
    }
  }
});
```

[npm-url]: https://www.npmjs.com/package/postcss-inset
[npm-img]: https://img.shields.io/npm/v/postcss-inset.svg
[cli-url]: https://travis-ci.org/jonathantneal/postcss-inset
[cli-img]: https://img.shields.io/travis/jonathantneal/postcss-inset.svg
[win-url]: https://ci.appveyor.com/project/jonathantneal/postcss-inset
[win-img]: https://img.shields.io/appveyor/ci/jonathantneal/postcss-inset.svg
[git-url]: https://gitter.im/postcss/postcss
[git-img]: https://img.shields.io/badge/chat-gitter-blue.svg

[PostCSS Inset]: https://github.com/jonathantneal/postcss-inset
[PostCSS]: https://github.com/postcss/postcss
[Gulp PostCSS]: https://github.com/postcss/gulp-postcss
[Grunt PostCSS]: https://github.com/nDmitry/grunt-postcss
[`inset`]: https://www.w3.org/TR/css-logical-1/#propdef-inset
