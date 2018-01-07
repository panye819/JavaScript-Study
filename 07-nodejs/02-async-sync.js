const fs=require('fs');

file='test.txt';
console.log('开始读取文件...');

//同步读取文件
// data=fs.readFileSync(file); 
// console.log(data.toString());

//异步读取文件
data=fs.readFile(file,function (err,data) {
    console.log(data.toString());
});
console.log('读取文件完毕...');
