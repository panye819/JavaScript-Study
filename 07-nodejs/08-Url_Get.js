const http=require('http');
const url=require('url');
const querystring=require('querystring');

cs=function (req,res) {
    var uri=req.url;
    if(uri !== '/favicon.ico'){
        var arr=url.parse(uri);
        var str=arr.query;
        var json=querystring.parse(str);
        console.log(json);
        res.write('This is a web server');
        res.end();
    }
};
http.createServer(cs).listen(3000);
console.log("Web server is OK!");
