<template>
  <div class="pg-about">
    <h1>This is an about page</h1>
    <h2>新的响应式机制采用了ES6的ProxyApi，抛弃了之前的Object.defineProperty()比较直观的解决的是Vue2中这两点问题</h2>
    <ul>
      <li><p>关于对象：Vue 无法检测 property 的添加或移除。由于 Vue 会在初始化实例时对 property 执行 getter/setter 转化，所以 property 必须在 <code>data</code> 对象上存在才能让 Vue 将它转换为响应式的。</p></li>
      <li>
        <p>关于数组：Vue 不能检测以下数组的变动：</p>
        <ol>
          <li>
            1、当你利用索引直接设置一个数组项时，例如：<code>vm.items[indexOfItem] = newValue</code>
          </li>
          <li>
            2、当你修改数组的长度时，例如：<code>vm.items.length = newLength</code>
          </li>
        </ol>
      </li>
    </ul>
    <el-button
      size="small"
      type="primary"
      @click="goodProxy"
    >
      对象增加属性
    </el-button>
    <p>{{ student.name }}：{{ student.sex }}</p>
    <p>{{ books }}</p>

    <h2>Composition</h2>
    <p>Button clicked {{ count }}</p>
    <p>Button clicked jian {{ countJian }}</p>
    <p>数组 {{ array1 }}</p>
    <p>数组 {{ JSON.stringify(array1) }}</p>
    <button @click="changeGO">
      change
    </button>

    <h2>$nextTick</h2>
    <div ref="msgDiv">
      {{ msg }}
    </div>
    <div v-if="msg1">
      Message got outside $nextTick: {{ msg1 }}
    </div>
    <div v-if="msg2">
      Message got inside $nextTick: {{ msg2 }}
    </div>
    <div v-if="msg3">
      Message got outside $nextTick: {{ msg3 }}
    </div>
    <button @click="changeMsg">
      Change the Message
    </button>
  </div>
</template>
<script>
import { ref } from 'vue'
export default {
  setup () {
    const count = ref(0)
    const count1 = ref(10)
    const array1 = ref([1,2])
    const change = () => {
      console.log('change执行')
      console.log(count)
      console.log(array1)
      count.value++
      count1.value--
      array1.value.push(count.value)
    }
    console.log('主体执行')
    console.log(count)
    console.log(array1)

    return {
      count,
      countJian: count1,
      array1,
      changeGO: change
    }
  },
  data () {
    return{
      msg: 'Hello Vue.',
      msg1: '',
      msg2: '',
      msg3: '',
      student: {
        name: 'wanghongwei',
      },
      books: ['语文','数学']
    }
  },
  methods: {
    goodProxy () {
      this.student.sex = '男'
      this.books[2] = '英语'

    },
    changeMsg () {
      this.msg = 'Hello world.'
      this.msg1 = this.$refs.msgDiv.innerHTML
      // setTimeout(() => {
      //   this.msg2 = this.$refs.msgDiv.innerHTML
      // },0)
      this.$nextTick(() => {
        this.msg2 = this.$refs.msgDiv.innerHTML
      })
      this.msg3 = this.$refs.msgDiv.innerHTML
    },
  }
}
</script>
<style lang="scss">
.pg-about{
  text-align: left;
}
</style>
