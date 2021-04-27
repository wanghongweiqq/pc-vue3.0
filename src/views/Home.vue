<template>
  <div class="home">
    <el-button
      size="small"
      type="primary"
    >
      abc123d
    </el-button>
    <img
      alt="Vue logo"
      src="@/assets/logo.png"
    >
    <span class="text-primary cursor-pointer">text-primary</span>
    <HelloWorld msg="Welcome to Your Vue.js App" />
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

import ajax from '@/service/apis/demo'


export default {
  name: 'Home',
  components: {
    HelloWorld
  },
  created () {
    this.getList()
  },
  methods: {
    getList () {
      console.log(1111111)
      // this.$ajax.getList({
      ajax.getList({
        pageSize: 10,
        page: 1
      }).then((res) => {
        console.log(res)
      })
    },

  }
}
</script>
<style lang="scss">
.home{
  >.fade-enter-active, >.fade-leave-acitve {
    transition: all  0.4s ease-in-out 0s;
  }
  >.fade-enter, >.fade-leave-to{
    opacity : 0;
    transform: translate(0,0px);
  }
}
</style>
