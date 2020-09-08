class EventBus {
    constructor() {
        this.init()
    }

    init() {
        this.eventMap = {}
    }

    static getInstance() {
        if (!EventBus._instance) {
            EventBus._instance = new EventBus()
        }
        return EventBus._instance
    }

    emit(type, payload) {
        let callbackList = this.eventMap[type]
        if (Array.isArray(callbackList)) {
            callbackList.forEach(cb => { cb(payload) })
        }
    }

    on(type, cb) {
        let callbackList = this.eventMap[type]
        if (!Array.isArray(callbackList)) {
            this.eventMap[type] = []
        }
        if (!callbackList.includes(cb)) {
            this.eventMap[type].push(cb)
        }
    }

    cancel(type, cb) {
        let callbackList = this.eventMap[type]
        if (Array.isArray(callbackList)) {
            let index = callbackList.indexOf(cb)
            if (index !== -1) {
                callbackList.splice(index, 1)
            }
        }
    }

    cancelAll(type) {
        this.eventMap[type] = []
    }
}

let bus = EventBus.getInstance()

bus.on('check', (data) => { console.log(data) })

let timer = setInterval(() => {
    bus.emit('check', 'test')
}, 2000);


setTimeout(() => {
    clearInterval(timer)
}, 10000);
