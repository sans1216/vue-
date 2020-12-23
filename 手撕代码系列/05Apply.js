// apply和call实现类似，只是传入的参数形式是数组形式，而不是逗号分隔的参数序列
Function.prototype.myApply = function(context) {
    context = context || window;
    context.fn = this;
    let args = [...arguments].slice(1);
    const result = context.fn(args);
    delete context.fn;
    return result;
}   