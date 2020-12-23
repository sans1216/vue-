const STATUS_PENDING = 'pending';
const STATUS_FULLFILLED = 'fullfilled';
const STATUS_REJECTED = 'rejected';

class promise{
    constructor(executor){
        this.value = '';
        this.status = STATUS_PENDING;
        this.reason = reason;

        this.onRejectedStack = [];
        this.onFullfilledStack = [];

        let resolve = (value) =>{
            if(this.status === STATUS_PENDING){
                this.value = value;
                this.status = STATUS_FULLFILLED;
                this.onFullfilledStack.forEach(fn => fn());
            }
        }

        let reject = (reason) => {
            if(this.status === STATUS_PENDING) {
                this.reason = reason;
                this.status = STATUS_REJECTED;
                this.onRejectedStack.forEach(fn => fn());
            }
        }

        try{
            executor(resolve,reject);
        }catch(err){
            reject(err);
        }

    }
    then(onFullfilled = () => {},onRejected = () => {}){
        if(this.status === STATUS_REJECTED){
            onRejected(this.reason);
        }
        if(this.status === STATUS_FULLFILLED){
            onFullfilled(this.value);
        }
        if(this.status === STATUS_PENDING) {
            this.onFullfilledStack.push(() => onFullfilled(this.value));
            this.onRejectedStack.push(() => onRejected(this.reason));
        }
    }
}