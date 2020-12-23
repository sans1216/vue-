//bind返回的是一个新的函数
//bind的用法一般是 bar.bind(obj)(2);
Function.prototype.myBind = function(ctx,...arg1){
    // 要用箭头函数，否则this指向错误
    return (...arg2) => {
        return this.call(ctx,...arg1,...arg2);
    }
}
function myThrottle(fn,delay){
    let last = Date.now();
    let context = this;
    let args =  arguments;
    return function(){
        let now = Date.now();
        if(now-last>delay) {
            last = now;
            fn.apply(context,args);
        }
    }
}
function myDebounce(fn,delay){
    let timer = null;
    let context = this;
    let args = arguments;
    return function(){
        if(timer){
            clearTimeout(timer);
            timer = null;
        }
        setTimeout(()=>{
            fn.apply(context,args);
        },delay);
    }
}
function myNew(ctx,...args){
    let obj = Object.create(ctx);
    let res = ctx.call(obj,args);
    return res instanceof Object ? res : obj;
}