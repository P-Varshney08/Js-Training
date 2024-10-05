class MyPromise {
    constructor(executor) {
        this.state = 'pending'; // initial state
        this.value = undefined;
        this.reason = undefined; // rejection reason
        this.onFulfilledCallbacks = []; // for storing fulfilled callbacks
        this.onRejectedCallbacks = []; // for storing rejected callbacks
        
        const resolve = (value) => {
            if (this.state === 'pending') {
                this.state = 'fulfilled';
                this.value = value;
                this.onFulfilledCallbacks.forEach(fn => fn());
            }
        };

        const reject = (reason) => {
            if (this.state === 'pending') {
                this.state = 'rejected';
                this.reason = reason;
                this.onRejectedCallbacks.forEach(fn => fn());
            }
        };

        try {
            executor(resolve, reject);
        } catch (err) {
            reject(err); 
        }
    }

    then(onFulfilled, onRejected) {
        return new MyPromise((resolve, reject) => {
            if (this.state === 'fulfilled') {
                try {
                    const result = onFulfilled ? onFulfilled(this.value) : this.value;
                    resolve(result);
                } catch (err) {
                    reject(err);
                }
            }

            if (this.state === 'rejected') {
                try {
                    const result = onRejected ? onRejected(this.reason) : this.reason;
                    reject(result);
                } catch (err) {
                    reject(err);
                }
            }

            // If still pending, store the callbacks for future execution
            if (this.state === 'pending') {
                if (onFulfilled) {
                    this.onFulfilledCallbacks.push(() => {
                        try {
                            const result = onFulfilled(this.value);
                            resolve(result);
                        } catch (err) {
                            reject(err);
                        }
                    });
                }

                if (onRejected) {
                    this.onRejectedCallbacks.push(() => {
                        try {
                            const result = onRejected(this.reason);
                            reject(result);
                        } catch (err) {
                            reject(err);
                        }
                    });
                }
            }
        });
    }

    catch(onRejected) {
        return this.then(null, onRejected);
    }

    static resolve(value) {
        return new MyPromise((resolve) => {
            resolve(value);
        });
    }

    static reject(reason) {
        return new MyPromise((_, reject) => {
            reject(reason);
        });
    }
}

const promise = new MyPromise((resolve, reject) => {
    setTimeout(() => resolve('Resolved!'), 1000);
});

promise.then(value => {
    console.log(value);
}).catch(err => {
    console.error(err);
});
