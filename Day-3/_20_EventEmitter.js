class EventEmitter {
    constructor() {
        this.events = {};
    }

    on(event, listener) {
        if(!this.events[event]) {
            this.events[event] = [];
        }
        this.events[event].push(listener);
    }

    emit(event, ...args){
        if(this.events[event]){
            this.events[event].forEach(listener => listener(...args));
        }
    }

    off(event, listener) {
        if(this.events[event]) {
            this.events[event] = this.events[event].filter(lis => lis!== listener);
        }
    }
}

const emitter = new EventEmitter();

const greet = (name) => console.log(`Hello, ${name}`);
const farewell = (name) => console.log(`Goodbye, ${name}`);

emitter.on('greet', greet);

emitter.emit('greet', 'Alice');

emitter.on('greet', farewell);

emitter.emit('greet', 'Bob'); 

emitter.off('greet', greet);

emitter.emit('greet', 'Charlie'); 
emitter.off('greet', farewell);

emitter.emit('greet', 'Diana');