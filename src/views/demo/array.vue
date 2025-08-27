<!--
 * @Author: 王宏伟
 * @Email：wanghongwei@hualala.com
 * @Date: 2025-04-10 16:49:57
 * @Description: 任务安排，支持链式调用
 * @FilePath: /vue3.0/src/views/demo/array.vue
-->
<template>
  <div class="pg-array">
    <CpCrumbs />
    <div class="content">
      <h2>返回新数组的方法</h2>
      <p>最新返回新数组的方法：toSorted / toReversed / toSpliced / with</p>
      <p>老方法有：filter / map / concat / 解构</p>
      <p>with(index, value) 替换数组中指定索引位置的元素，并返回一个包含此更改的新数组，index支持负数，一次只能替换一个值。</p>
      <pre>
const array1 = [2,5,41,11,8,3]
const array2 = array1.toSorted((a,b) => a - b)
const array3 = array1.toReversed()
const array4 = array1.toSpliced(1,1,100,'c')
const array5 = array1.with(0,'a')
</pre>
    </div>

    <div class="content">
      <h2>循环中动态改变数组</h2>
      <p>主要是比较：for循环、for of、forEach</p>
      <pre>
let arr = [1,2,3,4]
// 数组用for of循环支持动态改变，i会一直按索引递增的形式遍历，不会说数组改变从第1个重新循环，i上限是新数组的长度，i对应的内容也是按最新的数据项
for(let i = 0; i &lt; arr.length; i++) {
  console.log('arr',arr,arr.length)
  console.log('数组索引:',i, ' 值:',arr[i])
  // if(arr[i] === 4) { arr.push(4) }
  if(arr[i] === 4) { arr.unshift(7) }
  if(arr.length > 10) break
}
for(let [i,item] of arr.entries()) {
  console.log('arr',arr,arr.length)
  console.log('数组索引:',i, ' 值:',item)
  // if(i === 4) { arr.push(4) }
  if(item === 4) { arr.unshift(7) }
  if(arr.length > 10) break
}
// 数组用forEach循环不会动态改变，i只会按初始状态执行，先拿到数组长度，然后这个值就不会改变，即使后面数组动态添加了也不会改变循环的次数，但i对应的内容是按最新的数据项
arr.forEach((item,i) => {
  console.log('arr',arr,arr.length)
  console.log(i,item)
  // if(item === 4) { arr.push(4) }
  // if(item === 4) { arr.unshift(7) }
  if(item === 1) { arr.splice(1,0,1) }

})
console.log('最终arr',arr,arr.length)
</pre>
    </div>
  </div>
</template>
<!-- eslint-disable no-unused-vars -->
<script setup>
import { onMounted } from 'vue'
import CpCrumbs from '@/components/crumbs/'

// 最新返回新数组的方法：toSorted / toReversed / toSpliced / with
const arrayChange = () => {
  const array1 = [2,5,41,11,8,3]
  const array2 = array1.toSorted((a,b) => a - b)
  const array3 = array1.toReversed()
  const array4 = array1.toSpliced(1,1,100,'c')
  const array5 = array1.with(0,'a')
  console.log('arrayChange')
  console.log(array1)
  console.log(array2)
  console.log(array3)
  console.log(array4)
  console.log(array5)
  // 老方法有：filter / map / concat / 解构
}

// 循环中动态改变数组，for循环类似于for of，forEach
const arrayLoop = () => {
  let arr = [1,2,3,4]
  // 数组用for of循环支持动态改变，i会一直按索引递增的形式遍历，不会说数组改变从第1个重新循环，i上限是新数组的长度，i对应的内容也是按最新的数据项
  // for(let i = 0; i < arr.length; i++) {
  //   console.log('arr-for',arr,arr.length)
  //   console.log('数组索引:',i, ' 值:',arr[i])
  //   // if(arr[i] === 4) { arr.push(4) }
  //   if(arr[i] === 4) { arr.unshift(7) }
  //   if(arr.length > 10) break
  // }
  // for(let [i,item] of arr.entries()) {
  //   console.log('arr',arr,arr.length)
  //   console.log('数组索引:',i, ' 值:',item)
  //   // if(i === 4) { arr.push(4) }
  //   if(item === 4) { arr.unshift(7) }
  //   if(arr.length > 10) break
  // }
  // 数组用forEach循环不会动态改变，i只会按初始状态执行，先拿到数组长度，然后这个值就不会改变，即使后面数组动态添加了也不会改变循环的次数，但i对应的内容是按最新的数据项
  arr.forEach((item,i) => {
    console.log('arr-forEach',arr,arr.length)
    console.log('数组索引:',i, ' 值:',item)
    // if(item === 4) { arr.push(4) }
    // if(item === 4) { arr.unshift(7) }
    if(item === 1) { arr.splice(1,0,1) }
  })
  console.log('最终arr',arr,arr.length)
}

onMounted(() => {
  arrayChange() // 最新返回新数组的方法
  arrayLoop() // 数组的循环
})

</script>
