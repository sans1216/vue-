//手写一个sleep睡眠函数
//比如sleep(100)代表等待100ms
//ES5
function sleep(callback,time) {
    if(typeof callback == 'function'){
        setTimeout(callback,time);
    }
}
//Promise
function sleep(time){
    return new Promise((resolve) => {
        setTimeout(resolve(),time);
    })
}
sleep(2000).then(()=>{
    console.log('1')
})
//async await
function sleep(time) {
    return new Promise((resolve)=>{
        setTimeout(resolve,time);
    })
}
await sleep(2000);
console.log('1');