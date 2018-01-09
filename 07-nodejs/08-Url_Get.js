const http=require('http');
const url=require('url');
const querystring=require('querystring');

cs=function (req,res) {
    uri=req.url;
    if(uri !== '/favicon.ico'){
        arr=url.parse(uri);
        str=arr.query;
        json=querystring.parse(str);
        console.log(json);
        res.write('This is a web server');
        res.end();
    }
};
http.createServer(cs).listen(3000);
console.log("Web server is OK!");
