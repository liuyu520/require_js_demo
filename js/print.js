/**
 * Created by 黄威 on 9/27/16.
 */

/*依赖const模块 const不小心和js的关键字冲突了所以命名为const1*/
define(['./const', 'myjquery'], function (const1, $222) {
    var $myButton = $222('#myButton');
    $myButton.click(function (event) {
        console.log("通过require js绑定了事件");
        console.log($myButton.val())
    });

    return {
        printColor: function () {
            console.log(const1.color);
        }
    };
});
