//call
// 首先context为可选参数，如果不传的话默认上下文是window
// 接下来给content创建一个fn属性，并将值设置为需要调用的函数
// 因为call可以传入多个参数作为调用函数的参数，所有需要将参数剥离出来
// 然后调用函数并将对象上的函数删除
Function.prototype.myCall = function(context){
    context = context || window;
    context.fn = this;
    //记得把arguments转换成数组
    const args = [...arguments].slice(1);
    const result = context.fn(...args);
    delete context.fn;
    return result;
}

function test(arg1,arg2) {
    console.log(arg1,arg2);
    console.log(this.a,this.b);
}
test.myCall({a:1,b:2},1,2);

