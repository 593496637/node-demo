// 1.JavaScript
// 2.微任务 process.nextTick、MutationObserver、promise.then catch finally
// 3.宏任务 I/O、setTimeout、setInterval、setImmediate、requestAnimationFrame

setTimeout(() => {
  console.log('set1');
  new Promise(resolve => {
    resolve()
  }).then(() => {
    new Promise((resolve) => {
      resolve()
    }).then(() => {
      console.log('then4');
    })
    console.log('then2');
  })
});

new Promise((resolve) => {
  console.log('pr1');
  resolve()
}).then(() => {
  console.log('then1');
})

setTimeout(() => {
  console.log('set2');
});

console.log(2);

queueMicrotask(() => {
  console.log('queueMicrotask');
})

new Promise(resolve => {
  resolve()
}).then(() => {
  console.log('then3');
})