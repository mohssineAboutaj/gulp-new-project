// import configuration file
const config = require('./config');

// use exports variables from config
let {
	server,
	jsList,
	cssList,
	src,
	dev,
	dist,
	spec,
} = config;
// import dependencies
const gulp = require('gulp'),
			cssMinify = require('gulp-clean-css'),
			jsMinify = require('gulp-minify'),
			autoprefixer = require('gulp-autoprefixer'),
			browserify = require('gulp-browserify'),
			browserSync = require('browser-sync'),
			cssConcat = require('gulp-concat-css'),
			jsConcat = require('gulp-concat'),
			pug = require('gulp-pug'),
			sass = require('gulp-sass'),
			jasmine = require('gulp-jasmine')
			jasmineBrowser = require('gulp-jasmine-browser'),
			gulpWatch = require('gulp-watch'),
			gulpFile = require('gulp-file'),
			gulpRunPlugin = require('gulp-run');

let {
	handleErr,
	copy,
	rmDir,
} = require('./helpers')

// clean & remove folders
gulp.task('clean', () => {
	rmDir(dev.dir)
	rmDir(dist.dir)
})

// testing task
gulp.task('test-task', () => {
	gulp.src(spec.files)
		.pipe(jasmine({
			includeStackTrace: true,
		}))
})

// testing in browser task
gulp.task('test:browser-task', () => {
	gulp.src(spec.files)
			.pipe(gulpWatch(spec.files))
			.pipe(jasmineBrowser.specRunner())
			.pipe(jasmineBrowser.server({
				port: server.port + 2,
			}))
})

// pug task
gulp.task('pug-task', () => {
	gulp.src(src.pugPages)
			.pipe(pug({
				pretty: true,
			}))
			.on('error', handleErr)
			.pipe(gulp.dest(dev.dir))
			.pipe(browserSync.stream())
})

// sass task
gulp.task('sass-task', () => {
	gulp.src(src.sassMain)
			.pipe(sass({
				outputStyle: 'nested',
			}))
			.on('error', handleErr)
			.pipe(gulp.dest(src.css))
			.pipe(browserSync.stream())
})

// js task
gulp.task('js-task', () => {
	const fileName = "bundle.js"

	if (jsList.length == 0) {
		gulpFile(
				fileName, 
				`/* ${fileName} generated with gulp-file */`
			)
			.on('error', handleErr)
			.pipe(gulp.dest(dev.js))
			.pipe(browserSync.stream())
	} else {
		gulp.src(jsList)
				.pipe(jsConcat(fileName))
				.on('error', handleErr)
				.pipe(gulp.dest(dev.js))
				.pipe(browserSync.stream())
	}
})

// css task
gulp.task('css-task', () => {
	const fileName = "bundle.css"

	if (cssList.length == 0) {
		gulpFile(
				fileName, 
				`/* ${fileName} generated with gulp-file */`
			)
			.on('error', handleErr)
			.pipe(gulp.dest(dev.css))
			.pipe(browserSync.stream())
	} else {
		gulp.src(cssList)
				.pipe(cssConcat(fileName))
				.on('error', handleErr)
				.pipe(gulp.dest(dev.css))
				.pipe(browserSync.stream())
	}
})

// build css task
gulp.task('build:css-task', ['sass-task', 'css-task'], () => {
	gulp.src(dev.cssFiles)
			.pipe(autoprefixer())
			.pipe(cssMinify())
			.on('error', handleErr)
			.pipe(gulp.dest(dist.css))
})

// build js task
gulp.task('build:js-task', ['js-task'], () => {
	gulp.src(dev.jsFiles)
			.pipe(browserify())
			.pipe(jsMinify({
				ext: {
					min: ".js"
				}
			}))
			.on('error', handleErr)
			.pipe(gulp.dest(dist.js))
})

// build html task
gulp.task('build:html-task', ['pug-task'], () => {
	return copy(dev.htmlFiles, dist.dir)
})

// build task
gulp.task('build-task', [
	'build:css-task', 
	'build:js-task', 
	'build:html-task',
])

// server task
gulp.task('server-task', () => {
	browserSync.init({
		port: server.port,
		ui: false,
		server: dev.dir,
	})
})

// watching task
gulp.task('watch-task', () => {
	// watch pug files & run the task
	gulp.watch(src.pugFiles, ['pug-task'])

	// watch sass files & run the task
	gulp.watch(src.sassFiles, ['sass-task'])

	// watch js files & run the task
	gulp.watch(jsList, ['js-task'])

	// watch css files & run the task
	gulp.watch(cssList, ['css-task'])
})

// default task
gulp.task('default', [
	'clean',
	'pug-task',
	"sass-task",
	'js-task',
	'css-task',
	'watch-task',
	'server-task',
])
