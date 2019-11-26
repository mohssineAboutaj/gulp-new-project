/**
 * is a config for gulpfile
 */
// define config object
let config = {};

/* Start fill the config Object */
// config.singlePage = true

config.server = {}

config.server.port = 10000

config.server.host = "localhost"

config.root = "./"

ROOT = config.root

// Source config
config.src = {}
config.src.dir = ROOT + "src/"

config.src.css = config.src.dir + "css/"

config.src.sass = config.src.dir + "scss/"
config.src.sassFiles = config.src.sass + "**/*.scss"
config.src.sassMain = config.src.sass + "style.scss"

config.src.js = config.src.dir + "js/"
config.src.jsFiles = config.src.js + "**/*.js"
config.src.jsMain = config.src.js + "script.js"

config.src.pug = config.src.dir + "pug/"
config.src.pugFiles = config.src.pug + "**/*.pug"
// if (config.singlePage == true) {
// 	config.src.pugMain = config.src.pug + "index.pug"
// } else {
	config.src.pugPages = config.src.pug + "pages/*.pug"
// }

config.cssList = [
	config.src.css + 'style.css',
]

config.jsList = [
	'./node_modules/@fortawesome/fontawesome-free/js/all.min.js',
	config.src.js + 'script.js',
]

// Developement config
config.dev = {}
config.dev.dir = ROOT + "dev/"

config.dev.css = config.dev.dir + "css/"
config.dev.cssFiles = config.dev.css + "*.css"

config.dev.js = config.dev.dir + "js/"
config.dev.jsFiles = config.dev.js + "*.js"

config.dev.htmlFiles = config.dev.dir + "*.html"

// Dist config
config.dist = {}
config.dist.dir = ROOT + "dist/"

config.dist.css = config.dist.dir + "css/"

config.dist.js = config.dist.dir + "js/"

// Testing config
config.spec = {}

config.spec.dir = ROOT + "spec/"
config.spec.files = [
	config.spec.dir + "**/*.[sS]pec.js"
]

/* End fill the config Object */



// export configuration
module.exports = config
