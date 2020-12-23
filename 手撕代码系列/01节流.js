// 节流：规定一个单位时间内只能有一次触发事件的回调函数执行
// 如果在同一个单位时间内某事件被触发多次，只能一次生效
function throttle(fn,delay) {
    var last = Date.now();
    return function() {
        var now = Date.now();
        if(now - last >= delay) {
            last = now;
            return fn.apply(this,arguments);
        }
    }
}
var throttleRun = throttle(()=>{
    console.log(123)
},2000)
window.addEventListener('mousemove',2000);