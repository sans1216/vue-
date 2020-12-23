class EventEmitter {
    constructor() {
        this.events = {};
    }
    //订阅事件的方法
    on(eventName , callback){
        if(!this.events[eventName]){
            this.events[eventName] = [callback];
        }else{
            this.events[eventName].push(callback);
        }
    }
    //触发事件的方法
    emit(eventName){
        this.events[eventName] && this.events[eventName].forEach( fn => fn());
    }
    //移除事件的方法
    remove(eventName, callback) {
        this.events[eventName] && this.events[eventName].filters(fn => fn != callback);
    }
    //只执行一次的方法
    once(eventName, callback) {
        let fn = () => {
            callback();
            removeEventListener(eventName,fn);
        }
        this.on(eventName, fn);
    }
}
