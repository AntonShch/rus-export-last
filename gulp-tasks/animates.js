'use strict';

import { paths } from '../gulpfile.babel';
import gulp from 'gulp';
import debug from 'gulp-debug';

gulp.task('animates', () => {
    return gulp
        .src(paths.animates.src)
        .pipe(gulp.dest(paths.animates.dist))
        .pipe(
            debug({
                title: 'Animates',
            })
        );
});
