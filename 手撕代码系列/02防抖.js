//在事件被触发n秒后在执行回调，如果在这n秒内事件又被触发，则重新计时
function debounce(fn,wait){
    var timer = null;
    return function(){
        var context = this;
        args = arguments;
        if(timer) {
            clearTimeout(timer);
            timer = null;
        }
        timer = setTimeout(()=>{
            fn.apply(context,args)
        },wait);
    }
}
var debounceRun = debounce(()=>{console.log('debounce')},2000);
window.addEventListener('mouseleave',2000);