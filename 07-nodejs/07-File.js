const fs=require('fs');

//
dir='myweb';
file=dir+'/test3.txt';
str='This is a test line.';

fs.mkdir(dir);
fs.writeFile(file,str);

fs.unlink(file);
fs.rmdir(dir);