# Gulp New Project

A general workflow to develope your template using [GulpJs](https://gulpjs.com/) & [PugJs](https://pugjs.org/) & [Sass/Scss](https://sass-lang.com/) with live reload & build scripts

## Table of content
+ [Requirements](#Requirements)
+ [How to use](#How-to-use)
+ [Options](#Options)
+ [Adding external scripts & styles](#Adding-external-scripts-&-styles-(Recommended))
+ [Available scripts](#Available-scripts)
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

## Html configuration
+ The folder named `pages` is for the htm pages, any file exist in `src/pug/pages/` is an html page & other folders is only for include

## Adding external scripts & styles (Recommended)
+ Open the file `config.js` look for `jsList` for scripts & `cssList` for styles
+ Add file path in the *Array*

**NOTE:** if you have an external Scss file you can import it into the main scss file in `src/scss/libs/libs.scss` or move in `src/scss/libs/` & import in `src/scss/libs/libs.scss`

## Available scripts
+ **start**               Start the project & run live server with compiling & layout build (developement mode)
+ **build**               Build the project for production
+ **build:css**           Build the project css files for production
+ **build:js**            Build the project js files for production
+ **build:html**          Build the project html files for production
+ **test**                Run testing in command line
+ **test:browser**        Run testing in the browser

## Changelog
[Changelog](./CHANGELOG.md)

## License
[MIT](http://en.wikipedia.org/wiki/mit_license)