'use strict';

import { paths } from '../gulpfile.babel';
import gulp from 'gulp';
import debug from 'gulp-debug';

gulp.task('animations', () => {
    return gulp
        .src(paths.animations.src)
        .pipe(gulp.dest(paths.animations.dist))
        .pipe(
            debug({
                title: 'Animations',
            })
        );
});
