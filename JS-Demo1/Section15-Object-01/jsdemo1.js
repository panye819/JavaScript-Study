/**
 * 
 */
function Box(){};
Box.prototype.name = "Lee";
Box.prototype.age = 29;
Box.prototype.run = function () {
	return this.name+this.age+"运行中....."
}

var box1 = new Box();
alert(box1.run());