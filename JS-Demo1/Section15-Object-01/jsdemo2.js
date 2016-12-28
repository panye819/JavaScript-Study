//var a = [1,2,3,4,5];
//var b = [1,2,1,4,2];
//var a1= a.every(function(x) {
////	return x % 2 === 0;
//	return x < 10;
//});
////alert(a1);
//alert(b.indexOf(2));
//alert(b.lastIndexOf(2));
//alert(b.indexOf(11));
var scope = "global scope";
function checkcope() {
	var scope = "local scope";
	function f() {
		alert(scope);
	}
	return f;
//	alert(f());
}
//checkcope()();
checkcope()();