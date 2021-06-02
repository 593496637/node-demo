const EventEmitter = require('events')

const emitter = new EventEmitter()

emitter.on('listener1', () => { })
emitter.on('listener2', () => { })

// 返回已注册监听器的事件名数组。 数组中的值为字符串或 Symbol
console.log(emitter.eventNames());
// 返回正在监听的名为 eventName 的事件的监听器的数量
console.log(emitter.listenerCount('listener1'));


// 源码中绑定了exports 或 module.exports
console.log(this); //{}