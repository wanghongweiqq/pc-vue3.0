<!-- eslint-disable no-sparse-arrays -->
<!-- eslint-disable no-sparse-arrays -->
<!-- eslint-disable no-sparse-arrays -->
<!--
 * @Author: 王宏伟
 * @Email：wanghongwei@hualala.com
 * @Date: 2025-04-10 16:49:57
 * @Description: 数组的操作
 * @FilePath: /vue3.0/src/views/demo/array.vue
-->
<template>
  <div class="pg-array">
    <CpCrumbs />

    <div class="content">
      <h2>创建数组的方法</h2>
      <h3>new Array(n, ……)</h3>
      <p>n为单数字参数时创建指定长度的空数组（可能引发歧义）。该空数组称为稀疏数组，会导致相应项在数组的遍历方法中map、for循环不进行</p>
      <p>n为多参数时，参数作为数组元素。</p>
      <p>Array静态方法fill，可以用来填充元素：new Array(3).fill(1)</p>
      <pre>
let arr0 = new Array(3) //[空属性 × 3]
let arr1 = new Array(1,2,3) //[1, 2, 3]
let arr2 = new Array(3).fill(1) // [1, 1, 1]
</pre>
      <p>在JavaScript中，稀疏数组（Sparse Array）是指包含空位（empty slots）的数组，这些空位既不是undefined也不是null，而是未被赋值的索引位置。稀疏数组在使用map()和for循环时可能引发一些意料之外的行为</p>
      <h4>空位与undefined的区别</h4>
      <p>空位是未被初始化的索引（如new Array(3)生成[empty × 3]），而显式赋值为undefined的数组是密集数组（如[undefined, undefined, undefined]）。</p>
      <p>空位在遍历时可能被跳过，而undefined会被视为有效值处理。</p>
      <h4>性能影响</h4>
      <p>稀疏数组因空位需要额外判断，遍历速度通常比密集数组慢，尤其在大型数组中更明显</p>
      <p>
        <el-button
          size="small"
          type="primary"
          @click="testSparseArray"
        >
          稀疏数组的遍历
        </el-button>
      </p>
      <h3>Array.from( )（ES6引入）</h3>
      <p>将类数组对象（如字符串、arguments）或可迭代对象（如 Set）转换为数组，支持映射函数处理元素</p>
      <pre>
let arr0 = Array.from({ length: 3 },() => 2) // [2, 2, 2] 没有第二个参数时，值为undefined，不会像稀疏数组那样影响循环遍历
let arr1 = Array.from('hello'); // ['h', 'e', 'l', 'l', 'o']
let arr2 = Array.from([1, 2, 3], x => x * 2); // [2, 4, 6]
</pre>

      <h3>Array.of( )（ES6引入）</h3>
      <p>所有参数均作为数组元素，解决new Array(n)的歧义</p>
      <pre>let arr = Array.of(5); // [5]，而非长度为5的空数组</pre>

      <h3>其他形式 </h3>
      <p>数组字面量，简洁且性能最佳，各元素已知的情况下最常用：let arr = [1, 2, 3]; </p>
      <p>扩展运算符：let arr2 = [...[1, 2], 3]; // [1, 2, 3] </p>
    </div>

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

    <div class="content">
      <h2>类数组</h2>
      <h3>以下是一些常见的类数组对象：</h3>
      <p>最新返回新数组的方法：toSorted / toReversed / toSpliced / with</p>

      <div>
        常见类数组对象
        描述
        是否可迭代
        是否活的 (Live)
        ​arguments​
        函数内部包含所有实参的对象
        视情况而定
        否
        ​NodeList​
        如 document.querySelectorAll的返回结果
        是
        部分是
        ​HTMLCollection​
        如 document.getElementsByTagName的返回结果
        否
        是
        ​String​
        字符串
        是
        否
      </div>
    </div>
  </div>
</template>
<!-- eslint-disable no-unused-vars -->
<script setup>
import { onMounted } from 'vue'
import CpCrumbs from '@/components/crumbs/'

const testSparseArray = () => {
  // const sparseArray = new Array(3)
  const sparseArray = ['a', ,'c']
  // for循环/for of处理空位，空位返回 undefined
  for(let item of sparseArray) {
    console.log('for of: ',item)
  }
  // forEach/map/filter/reduce/some等 跳过空位，空位返回值不一定
  sparseArray.forEach((item,index) => {
    console.log('forEach: ',index,item)
  })
}

// 最新返回新数组的方法：toSorted / toReversed / toSpliced / with
const arrayChange = () => {
  const array = [2,5,41,11,8,3]
  const array1 = array.toSorted((a,b) => a - b)
  const array2 = array.toReversed()
  const array3 = array.toSpliced(1,1,100,'c')
  const array4 = array.with(0,'a')
  console.log('array =[2,5,41,11,8,3]')
  console.log('array.toSorted((a,b) => a - b)', array1)
  console.log('array.toReversed()', array2)
  console.log('array.toSpliced(1,1,100,"c")', array3)
  console.log('array.with(0,"a")', array4)
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

const ArrayLikeObject = () => {
  function isArrayLike (obj) {
    if (obj === null || typeof obj !== 'object') return false
    const length = obj.length
    return typeof length === 'number' && length >= 0 && (length === 0 || (length - 1) in obj)
  }
  let arrayLike = { 0: 'a', '1': 'b',b: 'x', length: 2 }
  let string1 = 'abc'
  console.log(string1[1])
  console.log(isArrayLike(arrayLike))
  const arrResult = Array.from(arrayLike)
  console.log(arrResult)
  console.log(Array.isArray(arrayLike)) // 输出 false
}

onMounted(() => {
  arrayChange() // 最新返回新数组的方法
  // arrayLoop() // 数组的循环
  // ArrayLikeObject()
})

</script>
