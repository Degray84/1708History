'use strict';

const fs = require('fs');

module.exports = function () {
    $.gulp.task('pug', function () {
        return $.gulp.src('./source/template/pages/*.pug')
            .pipe($.gp.plumber())
            .pipe($.gp.pug({
                pretty: true,
                locals: {
                    com: JSON.parse(fs.readFileSync('./content/common.json', 'utf8'))
                }
            }))
            .on('error', $.gp.notify.onError(function (error) {
                return {
                    title: 'Pug',
                    message: error.message
                }
            }))
            .pipe($.gulp.dest($.config.root));
    });
};