//自定义模块

function show() {
    this.name='user1';
    this.say=function () {
        console.log('my name is '+this.name);
    }
}

module.exports=new show();

