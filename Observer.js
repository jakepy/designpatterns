// Define a ONE TO MANY dependency 'subject' to many other objects, known as observers or 'functions'

function Subject() {
    this.observers = [] // This is an array of observer functions
}

Subject.prototype = {
    subscribe: function(fn) {
        this.observers.push(fn)
    },
    unsubscribe: function(fnToRemove) {
        this.observers = this.observers.filter(fn => {
            if(fn != fnToRemove)
                return fn
        })
    },
    notify: function() {
        this.observers.forEach(fn => {
            fn.call()
        })
    }
}

const subject = new Subject()

function Observer1() {
    console.log("Observer 1 Notification")
}

function Observer2() {
    console.log("Observer 2 Notification")
}

subject.subscribe(Observer1)
subject.subscribe(Observer2)
subject.unsubscribe(Observer1)
subject.notify()