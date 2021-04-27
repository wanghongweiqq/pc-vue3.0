<template>
  <div class="about">
    <h1>This is an about page</h1>
    <div>
      <p>Button clicked {{ count }}</p>
      <p>Button clicked jian {{ countJian }}</p>
      <p>数组 {{ array1 }}</p>
      <p>数组 {{ JSON.stringify(array1) }}</p>


      <button @click="changeGO">
        change
      </button>
    </div>
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
      msg3: ''
    }
  },
  methods: {
    changeMsg () {
      this.msg = 'Hello world.'
      this.msg1 = this.$refs.msgDiv.innerHTML
      setTimeout(() => {
        this.msg2 = this.$refs.msgDiv.innerHTML
      },0)
      this.msg3 = this.$refs.msgDiv.innerHTML
    },
  }
}
</script>
