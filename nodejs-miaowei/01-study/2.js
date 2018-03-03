/**
 * 在一个模块中通过var定义的变量，其作用域范围是当前模块，外部不能直接访问
 * 如果需要
 *
 *
 *
 *module：
 *  保存提供和当前模块有关的一些信息
 *  在这个module对象，有一个子对象，exports对象
 *  我们可以通过这个对象把一个模块中的局部变量对象进行提供访问
 * */

var a = 100;
// global.a = 100;
module.exports.a = a;
/**
 * 在模块作用域，还有另外一个内置对象，exports，它其实就是module.exports
 * */
console.log(module.exports === exports);
var b = 200;
exports.b = b;