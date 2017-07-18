/**
 * Created by 黄威 on 9/27/16.
 */

requirejs.config({
    // baseUrl: '/js',

    paths: {
        'praa123': 'print'
    }
});
/*依赖print模块*/
require(['praa123'], function (print) {
    'use strict';
    print.printColor();
});
