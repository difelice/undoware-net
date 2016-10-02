//TODO gulp tasks for e.g. updating the cdn etc. 
 


var ethdeploy = require('ethelo-deploy');
gulp.task('deploy', function () {
    return gulp.src('public')
        .pipe(ethdeploy({ message: 'Deployed to liz-mars.github.io/undoware.net/' }));
});
