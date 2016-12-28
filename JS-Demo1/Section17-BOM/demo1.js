/**
 * window对象是最顶层的对象
 * window对象有六大属性，这六大属性本身也是对象
 * window对象旗下的document属性也是对象，并且其下有五大属性，并且五大属性也是对象
 * 所以一切皆对象
 * 1.第一个参数是你将要导航到的URL
 * 2.窗口的名称或者窗口的目标，命名可以给新窗口设置一个名称
 * 		目标：
 * 			_blank：新建一个窗口
 * 			_parent：在本窗口内加载
 * 3.特定的字符串，表示各种窗口配置的功能。
 * 
 * 
 * 
 */
//open('https://www.baidu.com','baidu','width=400,height=400,top=100,left=100');
open('opener.html','opener','width=400,height=400,top=100,left=100');