<!--
 * @Author: 王宏伟
 * @Email：wanghongwei@hualala.com
 * @Date: 2025-08-09 14:09:56
 * @Description: css中定义属性
 * @FilePath: /vue3.0/src/views/demo/css/property.vue
-->
<template>
  <div class="bcp-property content">
    <h2>CSS 自定义属性@property</h2>
    <p>自定义属性@property --xxx，这样属性--xxx就像width一样可以正常使用了，每个样式里都会含有改属性。</p>
    <p>主要是用在动画效果里，能够执行动画的两个条件：</p>
    <p>1、keyframes中的声明是一个属性</p>
    <p>2、改属性的值是一个数值</p>
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
  background: linear-gradient(var(--rota), green, red);
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
