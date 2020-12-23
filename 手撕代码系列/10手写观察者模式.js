class Events {
    constructor() {
        this.events = {};
    }
    //注册监听函数
    subscribe(eventName, callback){
        if(!this.events[eventName]){
            this.events[eventName] = [callback]

        }else{
            this.events[eventName].push(callback);
        }
    }
    //发布事件，触发观察者回调事件
    publish(eventName){
        this.events[eventName] && this.events[eventName].forEach( fn => fn());
    }
    //移除主题上的一个观察者的回调事件
    remove(eventName, callback){
        this.events[eventName] && this.events[eventName].filter(cn => cb != callback);
    }
    //移除主题的所有观察者的回调事件
    removeAll(eventName) {
        if(this.events[eventName]){
            this.events[eventName] = [];
        }
    }
}