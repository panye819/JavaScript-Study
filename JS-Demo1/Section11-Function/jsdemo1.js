/**
 * 
 */
//function sum(num){
//	if(num<=1){
//		return 1;
//	}else{
//		return num*sum(num-1);
//	}
//}
//alert(sum(4));
function box1(num){
	if(num<=1){
		return 1;
	}else{
		return num*arguments.callee(num-1);
	}
}
alert(box1(4));
alert(box1(5));
alert(box1(6));