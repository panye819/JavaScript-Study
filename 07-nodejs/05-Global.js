console.log(__filename);
console.log(__dirname);
console.info(__filename);
console.info(__dirname);
console.warn(__filename);
console.warn(__dirname);
console.error(__filename);
console.error(__dirname);

console.time('x');
for(var i=0;i<1000000;i++){

}
console.timeEnd('x');

str=process.version;
str1=process.argv;
str2=process.pid;
str3=process.title;
str4=process.platform;
str5=process.memoryUsage();
str6=process.uptime();
console.log(str);
console.log(str1);
console.log(str2);
console.log(str3);
console.log(str4);
console.log(str5);
console.log(str6);
