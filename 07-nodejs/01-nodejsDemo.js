const http=require('http');

cs=function (req,res) {
    res.writeHead('200',{'content-type':'text/html;charset=utf-8'});
    res.write('hello world!');
    res.write('我是阿呆，你是小菜吗？');
    res.end();

};
http.createServer(cs).listen(3000);
console.log('http is ok!');