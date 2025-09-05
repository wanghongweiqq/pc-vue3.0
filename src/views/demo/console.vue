<!--
 * @Author: 王宏伟
 * @Email：wanghongwei@hualala.com
 * @Date: 2025-04-10 16:49:57
 * @Description: console的日常使用
 * @FilePath: /vue3.0/src/views/demo/array.vue
-->
<template>
  <div class="pg-console">
    <CpCrumbs />

    <div class="content">
      <h2>以下是 console的主要方法类型及其用途的总结：</h2>
      <h3>new Array(n, ……)</h3>

      <table class="table">
        <tr>
          <th>类型</th>
          <th>方法名</th>
          <th>主要用途</th>
          <th>特点与示例</th>
        </tr>
        <tr>
          <td rowspan="3">
            <b>基础输出</b>
          </td>
          <td>console.log()</td>
          <td>输出普通信息，最常用。</td>
          <td>支持多参数和占位符，如 console.log('Hello %s', 'World')输出 Hello World。</td>
        </tr>
        <tr>
          <td>console.info()</td>
          <td>输出提示性信息。</td>
          <td>功能与log类似，在部分浏览器中输出前会显示一个蓝色图标或“i”图标。</td>
        </tr>
        <tr>
          <td>console.debug()</td>
          <td>输出调试信息。</td>
          <td>通常需要在浏览器控制台中启用“Verbose”或“详细”级别日志显示才能看到。</td>
        </tr>

        <tr>
          <td rowspan="2">
            <b>警告与错误</b>
          </td>
          <td>console.warn()</td>
          <td>输出警告信息。</td>
          <td>消息通常以黄色背景显示，带有黄色三角图标，表示可能存在潜在问题但不影响运行。</td>
        </tr>
        <tr>
          <td>console.error()</td>
          <td>输出错误信息。</td>
          <td>消息通常以红色背景显示，带有红色叉图标，并会输出错误的堆栈跟踪，用于指示运行错误。</td>
        </tr>

        <tr>
          <td rowspan="2">
            <b>结构化展示</b>
          </td>
          <td>console.dir()</td>
          <td>以易于阅读和展开的树形结构列表形式显示对象的所有属性。</td>
          <td>特别适合查看复杂的对象或DOM元素的属性。</td>
        </tr>
        <tr>
          <td>console.table()</td>
          <td>将数组或对象等复合型数据以表格形式展示。</td>
          <td>使数据对比和查看更加清晰，例如 console.table([{name: 'Alice', age: 30}])。</td>
        </tr>

        <tr>
          <td>
            <b>清理控制台</b>
          </td>
          <td>console.clear()</td>
          <td>清除控制台中的所有输出。node中不起作用。</td>
          <td>将光标重置回第一行，让控制台变得干净。</td>
        </tr>

        <tr>
          <td>
            <b>样式化输出</b>
          </td>
          <td>%c占位符</td>
          <td>对输出的文本应用CSS样式。</td>
          <td>console.log('%cStyled Text', 'color: red; font-size: 20px;')可以将文本输出为红色且字体大小为20px。</td>
        </tr>

        <tr>
          <td rowspan="3">
            <b>分组管理</b>
          </td>
          <td>console.group()</td>
          <td>创建一个新的内联分组，后续输出将缩进显示。</td>
          <td>以 console.groupEnd()结束分组，分组默认展开。</td>
        </tr>
        <tr>
          <td>console.groupCollapsed()</td>
          <td>创建一个新的内联分组，但默认是折叠状态。</td>
          <td>需要点击展开才能查看组内内容，适用于信息较多时保持控制台整洁。</td>
        </tr>
        <tr>
          <td>console.groupEnd()</td>
          <td>结束当前的内联分组。</td>
          <td>与 console.group()或 console.groupCollapsed()配对使用。</td>
        </tr>

        <tr>
          <td rowspan="4">
            <b>性能分析</b>
          </td>
          <td>console.time()</td>
          <td>启动一个计时器，接收一个标签作为参数。</td>
          <td>与 console.timeEnd()配合使用，计算两者之间代码的执行时间。</td>
        </tr>
        <tr>
          <td>console.timeEnd()</td>
          <td>结束指定标签的计时器，并输出消耗的时间。</td>
          <td>console.timeEnd('myTimer')会输出类似 myTimer: 123ms的结果。</td>
        </tr>
        <tr>
          <td>console.timeLog()</td>
          <td>在计时器运行过程中输出当前时间。</td>
          <td>不结束计时器，用于记录中间时间点。</td>
        </tr>
        <tr>
          <td>console.profile()</td>
          <td>开始一个性能分析会话（部分浏览器支持）。</td>
          <td>与console.profileEnd()配对使用，用于性能分析。</td>
        </tr>

        <tr>
          <td rowspan="2">
            <b>计数与重置</b>
          </td>
          <td>console.count()</td>
          <td>记录并输出该行代码被执行的次数，可以接受一个标签参数用于区分不同计数器。</td>
          <td>console.count('myLabel')会输出类似 myLabel: 1的结果。</td>
        </tr>
        <tr>
          <td>console.countReset()</td>
          <td>重置指定标签的计数器。</td>
          <td>console.countReset('myLabel')会将 'myLabel' 的计数重置。</td>
        </tr>

        <tr>
          <td rowspan="2">
            <b>调试辅助</b>
          </td>
          <td>console.assert()</td>
          <td>断言测试，当条件为 false 时输出错误信息。</td>
          <td>console.assert(1 === 2, 'Math error')会在条件假时输出错误信息。</td>
        </tr>
        <tr>
          <td>console.trace()</td>
          <td>输出当前的调用堆栈轨迹。</td>
          <td>帮助开发者定位代码的执行路径和调用关系。</td>
        </tr>

        <tr>
          <td rowspan="2">
            <b>其他</b>
          </td>
          <td>console.dirxml()</td>
          <td>显示网页某个节点所包含的HTML/XML代码。</td>
          <td>用于查看DOM节点的结构化信息。</td>
        </tr>
        <tr>
          <td>console.memory</td>
          <td>(属性而非方法) 用于查看此刻的内存使用情况信息，如堆大小。</td>
          <td>console.log(console.memory)可以输出内存信息。</td>
        </tr>
      </table>
    </div>
  </div>
</template>
<!-- eslint-disable no-unused-vars -->
<script setup>
import { onMounted } from 'vue'
import CpCrumbs from '@/components/crumbs/'
import utils from '@/assets/js/utils'

const obj = { a: 1,b: 3,c: 3,d: 4 }
const arr = [1, 2, 3, 4]
const objDeep = { a: { b: { c: { d: 1 } } } }
const arrDeep = [1, [2, [3, [4]]]]

const log = () => {
  console.log(obj)
  console.log(arr)
  console.log(objDeep)
  console.log(arrDeep)
}
const stringify = () => {
  console.log(JSON.stringify(obj))
  console.log(JSON.stringify(arr))
  console.log(JSON.stringify(objDeep))
  console.log(JSON.stringify(arrDeep))
}
const dir = () => {
  console.dir(obj)
  console.dir(arr)
  console.dir(objDeep)
  console.dir(arrDeep)
}

const table = () => {
  console.table(obj)
  console.table(arr)
  console.table(objDeep)
  console.table(arrDeep)
}
const trace = () => {
  console.trace() // 没有参数时，默认展示console.trace，有参数时展示参数的值，下边展示可折叠的调用堆栈轨迹
}

const clear = () => {
  console.clear() // 及时设置了参数，该值也不会输出，控制台会展示“控制台数据已被清除”
}

const style = () => {
  console.log('%c log/info/error等都支持%c的样式输出，同一节也就是同一个逗号内，只有第一个%c起作用', 'color: red; text-decoration:underline;')
}

const group = () => {
  // console.groupCollapsed('%c接口请求：','color: purple',) // 默认折叠状态
  console.group('%c接口请求：','color: purple',) // 默认展开状态
  console.log('%c URL:', 'color: red', 'meitian.com')
  console.log('%c Method:', 'color: red', 'post')
  console.log('%c Params:', 'color: red', '{ id : 1 }')
  console.log('%c Response:', 'color: red', '{ success : true }')
  console.groupEnd() // 不支持设置参数
}

const time = () => {
  console.time('myTimer')
  // utils.delay(1000)

  let sum = 0
  for (let i = 0; i < 5; i++) {
    for (let j = 0; j < 100000000; j++) { // 一亿次运算
      sum += j
    }
    // 在循环内部打印当前计时器的时间
    console.timeLog('myTimer', `完成第 ${ i + 1 } 次循环后的时间。`,`sum当前值为：${ sum }`)
  }
  console.timeEnd('myTimer')

}

onMounted(() => {
  // log()
  // stringify()
  // dir()
  // table()
  // clear()
  // style()
  // group()
  time()
  // trace()
})

</script>
