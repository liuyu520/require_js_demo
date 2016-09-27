/**
 * Created by 黄威 on 9/27/16.
 */

require.config({
    paths: {
        myjquery: 'http://www.hbjltv.com/static/js/jquery-1.11.1'/*千万不要添加扩展名js*/
    },
    shim: {
        myjquery: {
            exports: '$'
        }
    },
    urlArgs: "v=1.0"
});
/*依赖print模块*/
require(['./print'], function (print) {
    'use strict';
    print.printColor();
});
