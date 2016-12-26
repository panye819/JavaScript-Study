/**
 * 
 */
//闭包：
/*闭包是指有权访问另一个函数作用域中的变量的函数，创建闭包的最常见方式就是
在一个函数内部创建另外一个函数，通过另一个函数访问这个函数的局部变量。
使用闭包的优点，也是它的缺点，就是可以把局部变量驻留在内存中，可以避免使用全局变量


*/
//通过闭包返回局部变量：
/*function box() {
	var user = "Lee";
	return function() {
		return user;
	}
}
alert(box()());	
var b = box();
alert(b());

var age = 100;
function box() {
	age++;
}
alert(age);
box();
alert(age);
box();
alert(age);
box();
function box() {
	var age = 100;
	age++;
	return age;
}
alert(box());
alert(box());
alert(box());
alert(box());
*/
//使用匿名函数实现 局部变量驻留内存中从而实现累加
function box() {
	var age = 100;
	return function() {
		age++;
		return age;
	}
}
var b = box();
alert(b());
alert(b());
alert(b());
alert(b());
alert(box()());