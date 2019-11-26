# Gulp New Project

A general workflow to develope your template using [GulpJs](https://gulpjs.com/) & [PugJs](https://pugjs.org/) & [Sass/Scss](https://sass-lang.com/) with live reload & build scripts

## Table of content
+ [Requirements](#Requirements)
+ [How to use](#How-to-use)
+ [Options](#Options)
+ [Adding external scripts & styles](#Adding-external-scripts-&-styles-(Recommended))
+ [Changelog](#Changelog)
+ [License](#License)

## Requirements
+ [NodeJs](https://nodejs.org)
+ [npm](https://npmjs.com) or [yarn](https://yarnpkg.com)

## How to use
0. Clone the repo in your computer <br>
``git clone https://github.com/mohssineAboutaj/gulp-new-project.git``
0. Move into the project root <br>
``cd gulp-new-project``
0. Install dependencies <br>
``npm install``
<br>or<br>
``yarn install``
0. Run server with live reload <br>
``npm start``
<br>or<br>
``yarn start``

## Options
+ Default mode is to build a single page website, to change it go to `config.js` and change the property `singlePage` to `false`, then add your pages in `src/pug/pages/`

## Adding external scripts & styles (Recommended)
+ Open the file `config.js` look for `jsList` for scripts & `cssList` for styles
+ Add file path in the *Array*

**NOTE:** if you have an external Scss file you can import it into the main scss file in `src/scss/style.scss`

## Changelog
[Changelog](./CHANGELOG.md)

## License
[MIT](http://en.wikipedia.org/wiki/mit_license)