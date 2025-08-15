<!--
 * @Author: 王宏伟
 * @Email：wanghongwei@hualala.com
 * @Date: 2025-08-09 14:09:56
 * @Description: css中定义属性
 * @FilePath: /vue3.0/src/views/demo/css/property.vue
-->
<template>
  <div class="bcp-property content">
    <h2>CSS Flex 弹性布局</h2>
    <p>默认值：flex-grow:0 有剩余空间也不扩展；flex-shink:1 空间不足时被压缩； flex-basis:auto  初始大小为auto</p>
    <div class="box">
      <div class="box-content">
        11
      </div>
    </div>
  </div>
</template>

<style >
/* 只能用css格式，估计是scss还没有支持 */
@property --rota {
  syntax: '<angle>';
  inherits: true;
  initial-value: 0deg;
}

.box {
  width: 150px;
  height: 200px;
  padding: 10px;
  background: linear-gradient(var(--rota), #000, #999);
  animation: box-bg-rotate 4s linear infinite;
}

@keyframes box-bg-rotate {
  to {
    --rota: 360deg;
  }
}

.box-content {
  width: 100%;
  height: 100%;
  background-color: white;
}
</style>