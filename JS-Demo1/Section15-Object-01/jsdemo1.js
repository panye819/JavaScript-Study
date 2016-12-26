/**
 * 
 */
//function Box(){};
//Box.prototype.name = "Lee";
//Box.prototype.age = 29;
//Box.prototype.run = function () {
//	return this.name+this.age+"运行中....."
//}
//
//var box1 = new Box();
//alert(box1.run());
//var a = Math.PI;
//alert(a);
//
//var b = Math.random();
//alert(b*100);
//alert(Math.round(b+50));

//var c = ["论语","中庸","孔子","大学","孟子"];
////alert(c);
////c[0] = "MySQL";
////alert(c)
//for(var i=0;i<c.length;i++){
//	alert(c[i]);
//}
var arr = [1,3,11,32,23,2,4,41,14];
arr.sort();
alert(arr.sort(function(a, b) {
//	return b - a;
	return a - b;
	
}));