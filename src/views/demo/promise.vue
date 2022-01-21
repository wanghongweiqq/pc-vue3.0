<template>
  <div class="pg-func">
    <div class="ly-box">
      <cp-crumbs />
      <div class="content">
        <div class="infors">
          <h1>promise</h1>
          <h2>promise是什么？</h2>
          <p>1、主要用于异步计算</p>
          <p>2、可以将异步操作队列化，按照期望的顺序执行，返回符合预期的结果</p>
          <p>3、可以在对象之间传递和操作promise，帮助我们处理队列</p>

          <h2>异步操作的常见语法</h2>
          <p>1、事件监听</p>
          <pre>
document.getElementById('#start').addEventListener('click', start, false);
function start() {
  // 响应事件，进行相应的操作
}
// jquery on 监听
$('#start').on('click', start)
          </pre>
          <p>2、回调</p>
          <pre>
// 比较常见的有ajax
$.ajax('http://www.wyunfei.com/', {
 success (res) {
   // 这里可以监听res返回的数据做回调逻辑的处理
 }
})

// 或者在页面加载完毕后回调
$(function() {
 // 页面结构加载完成，做回调逻辑处理
})
          </pre>
          <h2>异步操作的常见语法</h2>
          <ul>
            <li>1、之前处理异步是通过纯粹的回调函数的形式进行处理</li>
            <li>2、很容易进入到回调地狱中，嵌套层次深，不好维护，剥夺了函数return的能力</li>
            <li>3、问题可以解决，但是难以读懂，维护困难</li>
          </ul>
          <h2>promise详解</h2>
          <pre>
new Promise(function (resolve, reject) {
  // 一段耗时的异步操作
  resolve('成功') // 数据处理完成
  // reject('失败') // 数据处理出错
}).then(
  (res) => {console.log(res)},  // 成功
  (err) => {console.log(err)} // 失败
)
          </pre>
          <p>promise是一个对象，对象和函数的区别就是对象可以保存状态，函数不可以（闭包除外）</p>
          <p>并未剥夺函数return的能力，因此无需层层传递callback，进行回调获取数据</p>
          <p>代码风格，容易理解，便于维护</p>
          <p>多个异步等待合并便于解决</p>
          <h2>promise有三个状态：</h2>
          <p>1、pending[待定]初始状态</p>
          <p>2、fulfilled[实现]操作成功</p>
          <p>3、rejected[被否决]操作失败</p>

          <h2>.then()</h2>
          <p>1、接收两个函数作为参数，分别代表fulfilled（成功）和rejected（失败）</p>
          <p>2、.then()返回一个新的Promise实例，所以它可以链式调用</p>
          <p>3、当前面的Promise状态改变时，.then()根据其最终状态，选择特定的状态响应函数执行</p>
          <p>4、状态响应函数可以返回新的promise，或其他值，不返回值也可以我们可以认为它返回了一个null；</p>
          <p>5、如果返回新的promise，那么下一级.then()会在新的promise状态改变之后执行</p>
          <p>6、如果返回其他任何值，则会立即执行下一级.then()</p>

          <h2>.then()里面有.then()的情况</h2>
          <p>1、因为.then()返回的还是Promise实例</p>
          <p>2、会等里面的then()执行完，再执行外面的</p>
          <pre>
new Promise((resolve)=>{
  console.log('Step 1') //1
  setTimeout(()=>{
    resolve(100)
  },1000)
}).then((val)=>{ //val=100
  return new Promise(resolve=>{
    console.log('Step 1-1') //2
    setTimeout(()=>{
      resolve(val+10)
    },1000)
  }).then(val=>{ //val=110
    console.log('Step 1-2') //3
    return val+10
  }).then(val=>{ //val=120
    console.log('Step 1-3') //4
    return val+10
  })
}).then(val=>{ //val=130
  console.log('Step 2') //5
  console.log(val)  //6 val=130
})
          </pre>
          <p>了解了其 执行顺序后，我们最好将其展开，用链式的方式，这样会有更好的可读性</p>
          <pre>
new Promise((resolve)=>{
  console.log('Step 1') //1
  setTimeout(()=>{
    resolve(100)
  },1000)
}).then((val)=>{ //val=100
  return new Promise(resolve=>{
    console.log('Step 1-1') //2
    setTimeout(()=>{
      resolve(val+10)
    },1000)
  })
}).then(val=>{ //val=110
  console.log('Step 1-2') //3
  return val+10
}).then(val=>{ //val=120
  console.log('Step 1-3') //4
  return val+10
}).then(val=>{ //val=130
  console.log('Step 2') //5
  console.log(val)  //6 val=130
})
          </pre>
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
    // this.promise_01()
    // this.promise_02()
    // this.promiseAll()
    // this.promiseRace()

  },
  methods: {
    // 单线程：宏任务、微任务
    task () {
      setTimeout(() => {
        console.log(1)
        new Promise((resolve) => {
          resolve()
        }).then(() => {
          console.log(2)
        })
        setTimeout(() => { console.log(0) }, 0)
      }, 0)

      setTimeout(() => {
        console.log(3)
        new Promise((resolve) => {
          resolve()
        }).then(() => {
          console.log(4)
        })
      }, 0)
      // 1 2 3 4 0
    },
    promise_01 () {
      new Promise((resolve, reject) => {
        var random = Math.random()
        if(random > 0.5 ) {
          resolve(`promise_01-成功:${ random }`)
        }else{
          reject(`promise_01-失败:${ random }`)
          // reject(new Error(`promise_01-失败:${ random }`))
        }
      }).then((res) => { // 成功
        console.log(res)
      },(err) => { // 失败
        console.log(err)
      })
    },
    promise_02 () {
      new Promise((resolve) => {
        var random = Math.random()
        if(random > 0.5 ) {
          resolve(`promise_02-成功:${ random }`)
        }else{
          throw new Error(`promise_02-失败:${ random }`) // 分为：name（错误类型）、message（传进去的参数）， name:Error、EvalError、RangeError、ReferenceError、SyntaxError、TypeError、URIError
        }
      }).then((res) => {
        console.log(res)
      }).catch((err) => { // catch1
        console.log(err)
        console.log(`name:${ err.name }`)
        console.log(`message:${ err.message }`)
        throw new Error('promise_02-失败1:')
      }).then(() => {
        console.log('继续')
      }).catch((err) => { // catch2
        // 在上一次报错的执行完后有继续的报错才会执行到这里,下面的报错不会执行这里,虽然属于报错队列的第二个，但一直都不会被触发
        console.log(`错误:${ err }`)
      }).then(() => {
        console.log('继续2')
        throw new Error('promise_02-失败2:')
      }).catch((err) => { // catch3
        console.log(`错误2:${ err }`)
      })
    },
    // asyncFunc1:切菜
    asyncFunc1 () {
      console.log('开始切菜。')
      // eslint-disable-next-line no-unused-vars
      return new Promise(function (resolve,reject) { // 做一些异步操作
        setTimeout(function () {
          console.log('切菜完毕！')
          resolve('切好的菜')
          // console.log('切菜切手了！')
          // reject('切菜切手了，无法继续做饭')
        }, 1000)
      })
    },
    // asyncFunc2:烧水
    asyncFunc2 () {
      console.log('开始烧水。')
      var p = new Promise(function (resolve) { // 做一些异步操作
        setTimeout(function () {
          console.log('烧水完毕！')
          resolve('烧好的水')
        },2000)
      })
      return p
    } ,
    // 批量执行:当所有的子Promise都完成，该Promise完成，返回值是全部值得数组;有任何一个失败，该Promise失败，返回值是第一个失败的子Promise结果
    promiseAll () {
      Promise.all([this.asyncFunc1(), this.asyncFunc2()]).then((result) => {
        console.log('都完成了大家一起输出-数组')
        console.log(result)
      }).catch((err) => { // 任何一个失败
        console.log('失败原因')
        console.log(err)
      })
    },
    // 先完成先执行:
    promiseRace () {
      Promise.race([this.asyncFunc1(), this.asyncFunc2()]).then((result) => {
        console.log('谁快谁先输出')
        console.log(result)
      }).catch((err) => { // 任何一个失败
        console.log('失败原因')
        console.log(err)
      })
    },
  }
}
</script>
