//TODO gulp tasks for e.g. updating the cdn etc. 
 

var build_location='dist'; 
var gulp = require('gulp');
var ethdeploy = require('ethelo-deploy');
var del = require('del');
gulp.task('deploy', function () {
    del([`#{build_location}/**/.git/`]);
    return gulp.src(build_location)
        .pipe(ethdeploy({ message: 'Deployed to liz-mars.github.io/undoware-net/' }));
});
