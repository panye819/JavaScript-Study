/**
 *
 * */
//加载express模块
var express =require('express');

//加载模板处理模块
var swig = require('swig');

//创建App应用
var app = express();

//静态文件托管
app.use('/public',express.static(__dirname+'/public'));

//定义当前应用所使用的模板引擎
//第一个参数：模板引擎的名称，同时也是模板文件的后缀
//第二个参数：表示用于解析处理模板内容的方法
app.engine('html',swig.renderFile);

//设置模板文件存放的目录，第一个参数必须是Views，第二个参数是目录
app.set('views','./views');

//注册所使用的模板引擎,第一个参数必须是view engine,第二个参数和app.engine方法中
//定义的模板引擎的名称一致
app.set('view engine', 'html');

//在开发过程中，需要取消模板缓存的限制
swig.setDefaults({cache: false});
/**
 * 根据不同的功能划分模块
 * */
app.use('/admin',require('./routers/admin'));
app.use('/api',require('./routers/api'));
app.use('/',require('./routers/main'));
//监听http请求
app.listen(8081);
