/**
 * Created by 黄威 on 9/27/16.
 */

/*依赖const模块 const不小心和js的关键字冲突了所以命名为const1*/
define(['./const'], function (const1) {
    document.getElementById("myButton").onclick=function (event) {
        alert("通过require js绑定了事件")
    };
    return {
        printColor: function () {
            console.log(const1.color);
        }
    };
});
