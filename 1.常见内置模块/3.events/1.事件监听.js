const EventEmitter = require('events')

// 1.创建发射器
const emitter = new EventEmitter()

// 2.监听事件
// addListener是on的别名
const listener = (args) => {
  console.log('监听到event事件', args);
}
emitter.on('event', listener)

// 3.发出事件
emitter.emit('event', '参数')

// 4.关闭监听
emitter.off('event', listener)

// 下面这个事件不会被监听到
emitter.emit('event', '不会被监听到')

