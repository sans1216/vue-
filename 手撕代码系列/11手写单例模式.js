//单例模式：保证一个类仅有一个实例，并提供全局访问点
class singleTon {
    constructor(name) {
        this.name = name;
        this.instance = null;
    }
    static getInstance(name){
        //新建对象时判断全局是否有该对象，如果有，就返回该对象
        //没有就创建一个新对象返回
        if(!this.instance){
            this.instance = new singleTon(name);
        }
        return this.instance;
    }
}