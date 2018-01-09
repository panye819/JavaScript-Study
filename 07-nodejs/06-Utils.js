const util=require('util');
a=[1,2,3,4];
console.log(typeof(a));
console.log(util.isArray(a));

console.log(util.isBoolean(true));
console.log(util.isDate(new Date()));

console.log(util.isFunction(function () {
    console.log(1);
}));

console.log(util.isNumber(3));

console.log(util.isString('111'));

console.log(util.isRegExp(/^\d{11}$/ig));

obj={'name':'user1','age':'20'};
console.log(util.inspect(obj));