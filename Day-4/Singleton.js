class Singleton{
    constructor() {
        if(Singleton.instance) {
            return Singleton.instance;
        }
        this.value = Math.random();
        Singleton.instance = this;
        return this;
    }

    getValue() {
        return this.value;
    }
}

const singleton1 = new Singleton();
const singleton2 = new Singleton();

console.log(singleton1===singleton2)
console.log(singleton1.getValue())
console.log(singleton2.getValue())