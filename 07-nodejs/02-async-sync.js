const fs=require('fs');

file='test.txt';
console.log('开始读取文件...');

// data=fs.readFileSync(file); 
data=fs.readFile(file,function (err,data) {
    console.log(data.toString());
});
// console.log(data.toString());

console.log('读取文件完毕...');
