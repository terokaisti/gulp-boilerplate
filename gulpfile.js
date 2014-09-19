var gulp = require('gulp'),
	connect = require('gulp-connect'),
	plumber = require('gulp-plumber'),
	watch = require('gulp-watch'),
	sources = {
		overwatch: "out/**/*.*"
	},
	destinations = {
		docs: "out/",
	};
/*SERVER TASK*/
gulp.task('serve', function(event) {
	connect.server({
		root: destinations.docs,
		port: 1980,
		livereload: true
	});
	// sets up a livereload that watches for any changes in the root
	watch({glob: sources.overwatch})
		.pipe(connect.reload());
});
/*DEFAULT TASK*/
gulp.task('default', ["serve"]);