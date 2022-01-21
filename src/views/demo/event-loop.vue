<!--
 * @Author: 王宏伟
 * @Email：wanghongwei@hualala.com
 * @Date: 2021-11-29 22:37:47
 * @LastEditTime: 2021-11-30 11:14:00
 * @LastEditors: 王宏伟
 * @Description: 时间循环：Event Loop
 * @FilePath: /vue3.0/src/views/demo/event-loop.vue
-->
<template>
  <div class="pg-func">
    <div class="ly-box">
      <cp-crumbs />
    
      <div class="content">
        <div class="infors">
          <h1>Event Loop</h1>
          <h2>同步任务和异步任务</h2>
          <p>JavaScript是单线程执行的语言，在同一个时间只能做一件事情。这就导致后面的任务需要等到前面的任务完成才能执行，如果前面的任务很耗时就会造成后面的任务一直等待。为了解决这个问题JS中出现了同步任务和异步任务。</p>

          <h3>（1）同步任务</h3>
          <p>在主线程上排队执行的任务只有前一个任务执行完毕，才能执行后一个任务，形成一个执行栈。</p>
          <h3>（2）异步任务</h3>
          <p>不进入主线程，而是进入任务队列，当主线程中的任务执行完毕，就从任务队列中取出任务放进主线程中来进行执行。由于主线程不断重复的获得任务、执行任务、再获取再执行，所以者种机制被叫做事件循环（Event Loop）</p>
          <h2>宏任务</h2>
          <p>(macro)task，可以理解是每次执行栈执行的代码就是一个宏任务（包括每次从事件队列中获取一个事件回调并放到执行栈中执行）。</p>
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
          <h2>微任务</h2>
          <p>microtask,可以理解是在当前 task 执行结束后立即执行的任务。也就是说，在当前task任务后，下一个task之前，在渲染之前。</p>
          <p>所以它的响应速度相比setTimeout（setTimeout是task）会更快，因为无需等渲染。也就是说，在某一个macrotask执行完后，就会将在它执行期间产生的所有microtask都执行完毕（在渲染前）。</p>
          <pre>
Promise.then
Object.observe
MutationObserver
process.nextTick(Node.js 环境)
          </pre>

          <h2>在事件循环中，每进行一次循环操作称为 tick，每一次 tick 的任务处理模型是比较复杂的，但关键步骤如下：</h2>
          <p>1、执行一个宏任务（栈中没有就从事件队列中获取）</p>
          <p>2、执行过程中如果遇到微任务，就将它添加到微任务的任务队列中</p>
          <p>3、宏任务执行完毕后，立即执行当前微任务队列中的所有微任务（依次执行）</p>
          <p>4、当前宏任务执行完毕，开始检查渲染，然后GUI线程接管渲染</p>
          <p>5、渲染完毕后，JS线程继续接管，开始下一个宏任务（从事件队列中获取）</p>
        </div>
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
    this.task()
    // this.task2()

  },
  methods: {
    // 单线程：宏任务、微任务
    task () {
      console.log('script start')
      async function async2 () {
        console.log('async2 end')
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
      console.log('script start')

      async function async2 () {
        setTimeout(() => {
          console.log('async2 end')
        },0)
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

  }
}
</script>
