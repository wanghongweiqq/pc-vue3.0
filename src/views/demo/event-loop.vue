<!--
 * @Author: 王宏伟
 * @Email：wanghongwei@hualala.com
 * @Date: 2021-11-29 22:37:47
 * @LastEditTime: 2024-06-24 16:38:25
 * @LastEditors: Please set LastEditors
 * @Description: 时间循环：Event Loop
 * @FilePath: /vue3.0/src/views/demo/event-loop.vue
-->
<template>
  <div class="pg-func">
    <div class="ly-box">
      <cp-crumbs />
    
      <div class="content">
        <h1>Event Loop</h1>
        <h2>同步任务和异步任务</h2>
        <p>JavaScript是单线程执行的语言，在同一个时间只能做一件事情。这就导致后面的任务需要等到前面的任务完成才能执行，如果前面的任务很耗时就会造成后面的任务一直等待。为了解决这个问题JS中出现了同步任务和异步任务。</p>

        <h3>（1）同步任务</h3>
        <p>在主线程上排队执行的任务只有前一个任务执行完毕，才能执行后一个任务，形成一个执行栈。执行栈管理同步任务</p>
        <h3>（2）异步任务</h3>
        <p>不进入主线程，而是进入任务队列，当主线程中的任务执行完毕，就从任务队列中取出任务放进主线程中来进行执行。由于主线程不断重复的获得任务、执行任务、再获取再执行，所以者种机制被叫做事件循环（Event Loop）.任务队列管理异步任务</p>

        <h2>异步任务分为：宏任务和微任务</h2>
        <h2>宏任务</h2>
        <p>macrotask 称为 Task，宏任务是由宿主（浏览器、Node）发起的，可以理解是每次执行栈执行的代码就是一个宏任务（包括每次从事件队列中获取一个事件回调并放到执行栈中执行）。</p>
        <h3>宏任务包含：</h3>
        <pre>
            script(整体代码) 
            setTimeout
            setInterval
            I/O
            UI交互事件
            postMessage
            MessageChannel
            setImmediate(Node.js 环境)
          </pre>
        <p>PS：script(整体代码) 实际上如果同时存在两个 script 代码块，会首先在执行第一个 script 代码块中的同步代码，如果这个过程中创建了微任务并进入了微任务队列，第一个 script 同步代码执行完之后，会首先去清空微任务队列，再去开启第二个 script 代码块的执行。所以这里应该就可以理解 script（整体代码块）为什么会是宏任务。</p>
        <h2>微任务</h2>
        <p>microtask 称为 Jobs,，微任务由 JS 自身发起，可以理解是在当前 task 执行结束后立即执行的任务。也就是说，在当前task任务后，下一个task之前，在渲染之前。</p>
        <p>所以它的响应速度相比setTimeout（setTimeout是task）会更快，因为无需等渲染。也就是说，在某一个macrotask执行完后，就会将在它执行期间产生的所有microtask都执行完毕（在渲染前）。</p>
        <h3>微任务包含：</h3>
        <pre>
            Promise.then/catch/finally
            async/await
            Object.observe
            MutationObserver
            process.nextTick(Node.js 环境)
          </pre>
        <p> PS：async/await</p>
        <p>ECMAScript2017中添加了async functions和await。 </p>
        <p>async关键字是将一个同步函数变成一个异步函数，并将返回值变为promise。</p>
        <p>而await可以放在任何异步的、基于promise的函数之前。在执行过程中，它会暂停代码在该行上，直到promise完成，然后返回结果值。而在暂停的同时，其他正在等待执行的代码就有机会执行了。</p>
        <p>await后面的函数执行完毕时，await会产生一个微任务(Promise.then是微任务)。但是我们要注意这个微任务产生的时机，它是执行完await之后，直接跳出async函数，执行其他代码(此处就是协程的运作，A暂停执行，控制权交给B)。其他代码执行完毕后，再回到async函数去执行剩下的代码，然后把await后面的代码注册到微任务队列当中。</p>
        <p>await function XXX()，执行顺序如下：先把XXX里的同步执行完，然后会跳出async方法，执行接下来的同步任务，XXX里的异步如promise.then会被添加到微任务队列，执行完这个微任务后会把await方法后面的任务继续添加进微任务队列，并执行这个微任务队列直到清空该队列</p>
        <p>Promise方法体里的逻辑会当做同步任务立即执行，之后的.then/catch/finally会被添加到微任务队列，then等链式的时候，是一个一个依次添加到微任务队列的，即执行完前面一个待执行下一个的时候才将下一个添加到微任务队列。</p>

        <h2>在事件循环中，每进行一次循环操作称为 tick，每一次 tick 的任务处理模型是比较复杂的，但关键步骤如下：</h2>
        <p>1、执行一个宏任务（栈中没有就从事件队列中获取）</p>
        <p>2、执行过程中如果遇到微任务，就将它添加到微任务的任务队列中</p>
        <p>3、宏任务执行完毕后，立即执行当前微任务队列中的所有微任务（依次执行）</p>
        <p>4、当前宏任务执行完毕，开始检查渲染，然后GUI线程接管渲染</p>
        <p>5、渲染完毕后，JS线程继续接管，开始下一个宏任务（从事件队列中获取）</p>
      </div>
    </div>
  </div>
</template>
<script>
import CpCrumbs from '@/components/crumbs/'

export default {
  components: {
    CpCrumbs,
  },
  data () {
    return{
    }
  },
  mounted () {
    const request = { body: { username: 'username',password: 'password' } }
    const { body, body: { username, password } } = request
    console.log(body,username,password)
    // this.task()
    // this.task2()
    this.task3() // 原文链接：https://www.jianshu.com/p/fd15db94a034
    // this.task4() 
  },
  methods: {
    // 单线程：宏任务、微任务
    task () {
      console.log('script start')
      async function async2 () {
        console.log('async2 start')
        function test () {
          console.log(1111)
          console.log(new Date().getTime())

          return 'test'
        }
        console.log(2222)
        console.log(new Date().getTime())
        await test()

      }
      async function async1 () {
        await async2()
        console.log('async1 end')
      }
      async1()

      setTimeout(function () {
        console.log('setTimeout')
      }, 0)

      new Promise(resolve => {
        console.log('Promise')
        resolve()
      })
        .then(function () {
          console.log('promise1')
        })
        .then(function () {
          console.log('promise2')
        })

      console.log('script end')
    },
    
    task2 () {
      console.log('script start') // 1

      function async2 () {
        setTimeout(() => {
          console.log('async2 end') // 7
        },0)
      }
      async function async1 () {
        await async2()// await后面的代码不会立即执行，会作为微任务执行
        console.log('async1 end') // 4
      }
      async1()

      setTimeout(function () {
        console.log('setTimeout') // 8
      }, 0)

      new Promise(resolve => {
        console.log('Promise') // 2
        resolve()
      })
        .then(function () {
          console.log('promise1') // 5
        })
        .then(function () {
          console.log('promise2')// 6
        })

      console.log('script end') // 3
    },

    task3 () {
      // 整体输出： d a c1 c2 g i c3 2 h b f 3 e

      // 第1遍事件循环

      // 执行代码块function task3（可以理解为宏任务队列的第1个任务）的同步任务，具体如下：
      // console.log('d') 输出：d  紧接着宏任务队列添加第1个任务：setTimeout
      // async1()中的同步任务， 输出：a c1 c2，此时微任务队列添加第1个任务：function async2.then
      // new Promise 输出：g，此时微任务队列添加第2个任务：new Promis.then
      // console.log('i') 输出：i

      // 此时代码块宏任务执行完毕后，开始清空微任务队列，具体如下： 
      // 1 function async2.then，输出：c3 2; 此时微任务队列添加第3个任务(其实此时是第2个，因为第1个已执行完)：async function async1中await后的代码
      // 2 new Promis.then，输出：h;
      // 3 async function async1中await后的代码，输出：b; 此时微任务队列添加第4个任务(其实此时是第1个，因为第1、2、3个已执行完)：async1().then
      // 4 async1().then，输出：f 3

      // 第2遍事件循环
      // setTimeout的任务，输出：e

      async function async1 () {
        console.log('a')// 2
        // eslint-disable-next-line no-use-before-define
        const res = await async2()// await会阻塞async2的返回值，先跳出async1进行往下执行（需要注意的是，现在async1中的res变量，还是undefined，没有赋值。 res是在清空微任务队列时赋值并执行后面程序。）
        console.log('b')// 10
        return res
      }

      function async2 () {
        console.log('c1') // 3
        return new Promise((resolve) => {
          console.log('c2') // 4
          resolve(2)
        }).then((x) => { 
          console.log('c3') // 7
          console.log(x)// 8
          return x + 1
        }) 
      } 

      console.log('d') // 1

      setTimeout(() => {
        console.log('e') // 13
      }, 0)

      async1().then(res => {
        console.log('f') // 11
        console.log(res) // 12
      })
      
      new Promise((resolve) => {
        console.log('g') // 5
        resolve()
      }).then(() => {
        console.log('h') // 9
      })

      console.log('i')// 6
    },
    task4 () {
      setTimeout(() => { console.log('定时器2s') }, 2000) 
      setTimeout(() => { console.log('定时器1s') }, 1000) 
      console.log('后盾人')      
      for (let i = 0; i < 100; i++) { 
        console.log('打印循环1万次' + i) 
        // setTimeout(() => { console.log('打印循环1万次' + i) },i * 1000) 
      }
    }

  }
}
</script>
