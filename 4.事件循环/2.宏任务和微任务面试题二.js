// new Promise(resolve => {
//   resolve()
// })

// await 相当于Promise里的resolve()部分，直接执行，后面的属于微任务队列
async function async1() {
  console.log('async1 start');
  await async2()
  console.log('async1 end');
}

async function async2() {
  console.log('async2');
}

console.log('script start');

setTimeout(() => {
  console.log('setTimeout');
}, 0);

async1()

new Promise(resolve => {
  console.log('promise1');
  resolve()
}).then(() => {
  console.log('promise2');
})

console.log('script end');