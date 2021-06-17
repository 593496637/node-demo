/**
 * 
  setTimeout的优先级高于setImmediate，
  但是因为setTimeout的after被强制修正为1，
  这就可能存在下一个tick触发时，耗时尚不足1ms，
  setTimeout的回调依然未超时，因此setImmediate就先执行了！
  这可以通过在本次tick中加入一段耗时较长的代码来来保证本次tick耗时必须超过1ms来检测
 */

// https://segmentfault.com/a/1190000013102056


setTimeout(() => {
  console.log('setTimeout');
}, 0);

setImmediate(() => {
  console.log('setImmediate');
})

