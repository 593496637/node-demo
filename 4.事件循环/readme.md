
## node中的队列
**event loop
宏任务(MacroTask):setTimeout、setInterval、IO事件、setImmediate、close事件
微任务(MicroTask):Promise的then回调、process.nextTick、queueMicroTask**

微任务队列：
next tick queue: process.nextTick
other queue:Promise的then回调、queueMicroTask

宏任务队列：
timer queue:setTimeout、setInterval
poll queue:IO事件
check queue：setImmediate
close queue:close事件

执行顺序：
1、main script
2、ticks队列(nextTick)
3、其他微任务队列(Promise的then)
4、timers(setTimeout、setInterval)
5、io队列
6、setImmediate队列
7、close队列

