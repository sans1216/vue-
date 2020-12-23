//A instanceof B 判断A是否是B的实例，是返回true，否则false
function myInstanceof(left,right) {
    //如果left不是Object或者为空，就返回false
    if(typeof left !== 'object' || left == null){
        return false;
    }
    //取得左边的原型
    let proto = Object.getPrototypeOf(left);
    while(proto){
        if(proto === right.prototype) {
            return true;
        }
        proto = Object.getPrototypeOf(proto);
    }
    return false;
}
console.log(myInstanceof('111',String));
console.log(myInstanceof(new String('111',String)));