<template>
  <div class="bcp-baseline content">
    <div class="flex-baseline">
      <span class="text-1">11第一块文字</span>
      <span class="text-2">22第二块文字</span>
      <span class="text-3">33第三块文字</span>
    </div>

    <!-- <div class="baseline-2">
      <span class="text-0">11第一块文字</span>
      <span class="text-1">22第二块文字</span>
      <span class="text-2">33第三块文字</span>
    </div> -->
    <h2>vertical-align-line</h2>
    <p>它的值比较多：baseline | text-top | text-bottom | sub | super | top |  middle | bottom | inherit</p>
    <p>以下为行内元素span为display:inline(默认值)的情况，padding四个内间距全部生效，margin的左右外边距生效，上线外边距不生效，inline-block时全部生效</p>
    <p>padding/margin/font-size不会影响文字的对齐基线，但有可能是文字整体上下移动。</p>
    <p>line-height会影响部分属性的对齐，比如：text-top/text-bottom/top/bottom/，不影响：middle/super/sub/baseline</p>
    <p>vertical-align: middle并非让元素在父容器中垂直居中，而是让元素的中点对齐父元素的基线（baseline）加上 x-height 的一半（x-height 是小写字母 x 的高度）。这种对齐方式非常依赖于父元素的字体和行高设置，并且容易受到父元素内其他行内元素（尤其是文本）的影响，因此常常会出现“看似略微向下偏移”的现象</p>
    <p>vertical-align: text-top;会将父文字挤下来，所以注释掉该示例。</p>
    <div class="vertical-align">
      <p class="line-40" />
      字80，盒100x
      <!-- <span class="vertical-text-top">形式: text-top</span> -->
      <span class="vertical-text-bottom">形式: text-bottom</span>
      <span class="vertical-top">形式: top</span>
      <span class="vertical-middle">形式: middle</span>
      <span class="vertical-bottom">形式: bottom</span>
      <span class="vertical-super">形式: super</span>
      <span class="vertical-sub">形式: sub</span>
      <span class="vertical-baseline">形式: baseline</span>
    </div>

    <h2>vertical-align:middle</h2>
    <p>该声明(vertical-align:middle)不会让子元素在父框内垂直居中，即使子元素使用了display:inline-block，如果有多个子元素，会让多个子元素以最高的元素垂直居中</p>
    <div class="vertical-align-middle">
      <span class="middle-1">1倍行高</span>
      <span class="middle-2">2倍行高</span>
      <span class="middle-3">3倍行高</span>
      <span>可以隐藏display:inline-block看下效果，这里是超长文字内容，这里是超长文字内容，这里是超长文字内容，这里是超长文字内容，这里是超长文字内容，这里是超长文字内容，这里是超长文字内容，这里是超长文字内容，这里是超长文字内容，这里是超长文字内容，这里是超长文字内容，这里是超长文字内容，这里是超长文字内容，这里是超长文字内容，这里是超长文字内容，</span>
    </div>
  </div>
</template>

<style lang="scss">
.bcp-baseline {
  .flex-baseline {
    display: flex;
    // align-items: center;
    align-items: baseline;
    height: 100px;
    color: #fff;
    border: 1px solid red;

    .text-1 {
      // padding-top: 20px;
      // margin-top: 20px;
      font-size: 14px;
      // line-height: 42px;
      background: rgba(green, 0.6);
    }

    .text-2 {
      font-size: 20px;
      background: rgba(red, 0.6);
    }

    .text-3 {
      font-size: 30px;
      background: rgba(blue, 0.6);
    }
  }

  .vertical-align {
    position: relative;
    height: 100px;
    font-size: 80px;
    line-height: 1;
    border: 2px solid red;

    span {
      padding: 10px;
      margin: 10px;
      font-size: 14px;
      border: 1px solid green;
      // line-height: 2;
    }

    $types:'text-top','text-bottom','top',middle,bottom,super,sub,baseline;

    @each $type in $types {
      .vertical-#{$type} {
        vertical-align: #{$type};
      }
    }
  }

  .line-40 {
    position: absolute;
    top: 40px;
    box-sizing: border-box;
    width: 100%;
    height: 40px;
    padding: 0;
    border: 2px dashed purple;
  }

  .vertical-align-middle {
    position: relative;
    height: 100px;
    border: 2px solid red;

    >span {
      display: inline-block;
      border: 1px solid green;

      $list:1,2,3;

      @each $i in $list {
        &.middle-#{$i} {
          line-height: #{$i};
        }
      }
    }
  }
}
</style>
