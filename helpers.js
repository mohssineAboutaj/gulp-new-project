const gulpRunPlugin = require('gulp-run')

// custom error handler
module.exports.handleErr = (err) => {
	if (err) {
		console.log(err)
	}
}

// main function (parent) to execute commands
module.exports.gulpRunCmd = (cmd) => {
	return gulpRunPlugin(cmd).exec()
}

// copy files function, extends from gulpRunCmd
module.exports.copy = (from, to) => {
	return this.gulpRunCmd(`mkdir -p ${to} && cp ${from} ${to}`)
}

// copy files function, extends from gulpRunCmd
module.exports.copyDir = (from, to) => {
	return this.gulpRunCmd(`mkdir -p ${to} && cp -r ${from} ${to}`)
}

// remove files function, extends from gulpRunCmd
module.exports.rm = (dest) => {
	return this.gulpRunCmd(`rm -f ${dest}`)
}

// remove directories function, extends from gulpRunCmd
module.exports.rmDir = (dest) => {
	return this.gulpRunCmd(`rm -fr ${dest}`)
}
