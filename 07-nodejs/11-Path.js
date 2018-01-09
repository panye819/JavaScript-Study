const path=require('path');

str='/Users/castlepan/Study-Code/JavaScript-Study/07-nodejs/10-OS.js';
pobj={ root: '/',
    dir: '/Users/castlepan/Study-Code/JavaScript-Study/07-nodejs',
    base: '10-OS.js',
    ext: '.js',
    name: '10-OS' };
str2=path.format(pobj);
console.log(str2);
console.log("\n");
console.log(path.dirname(str));
console.log(path.basename(str));
console.log(path.extname(str));
console.log(path.parse(str));

