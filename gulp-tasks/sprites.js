"use strict";

import { paths } from "../gulpfile.babel";
import gulp from "gulp";
import svg from "gulp-svg-sprite";
import svgmin from "gulp-svgmin";
import cheerio from "gulp-cheerio";
import replace from "gulp-replace";
import debug from "gulp-debug";
import browsersync from "browser-sync";

gulp.task("sprites", () => {
    return gulp.src(paths.sprites.src)
        .pipe(svgmin({
            js2svg: {
                pretty: true
            }
        }))
        .pipe(cheerio({
			run: function ($) {
				$('[fill]').removeAttr('fill');
				$('[style]').removeAttr('style');
			},
			parserOptions: { xmlMode: true }
        }))
        .pipe(replace('&gt;', '>'))
        .pipe(svg({
            mode: {
                symbol: {
					sprite: "../svg/sprite.svg",
					render: {
						scss: {
							dest:'../../../src/styles/_sprite.scss',
							template: "src/styles/helpers/_sprite_template.scss"
						}
					}
				}
            }
        }))
        .pipe(gulp.dest(paths.sprites.dist))
        .pipe(debug({
            "title": "Sprites"
        }))
        .on("end", browsersync.reload);
});