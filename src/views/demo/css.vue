<template>
  <div class="pg-css">
    <div class="ly-box">
      <cp-crumbs />
      <div class="content">
        <h2>CSS Flex 弹性布局</h2>
        <div class="flex">
          <span>1</span>
          <p>
            <em>align-items不设置值时默认每个item的高度是父级高度的100%</em>
            <i>3</i>
          </p>
          <font>1</font>
        </div>
        <div class="flex flex-center marginTop20">
          <span>1</span>
          <p>
            <em>align-items: center; 会导致item的高度不是父级高度的100%，因为只有这样才能让其在从轴方向居中，设置其他值时也是这样(normal除外)</em>
            <i>3</i>
          </p>
          <font>1</font>
        </div>
        <ul class="flex poem marginTop20">
          <li>床前明月光</li>
          <li>疑是地上霜</li>
          <li>举头望明月</li>
          <li>低头思故乡</li>
        </ul>
        <h2>CSS Grid 网格布局</h2>
        <div class="grid marginTop20">
          <div class="container">
            <div class="item item-1">
              1
            </div>
            <div class="item item-2">
              2
            </div>
            <div class="item item-3">
              3
            </div>
            <div class="item item-4">
              4
            </div>
            <div class="item item-5">
              5
            </div>
            <div class="item item-6">
              6
            </div>
            <div class="item item-7">
              7
            </div>
            <div class="item item-8">
              8
            </div>
            <div class="item item-9">
              9
            </div>
          </div>
          <div class="container container-01">
            <div class="item item-1">
              1
            </div>
            <div class="item item-2">
              2
            </div>
            <div class="item item-3">
              3
            </div>
            <div class="item item-4">
              4
            </div>
            <div class="item item-5">
              5
            </div>
            <div class="item item-6">
              6
            </div>
            <div class="item item-7">
              7
            </div>
            <div class="item item-8">
              8
            </div>
            <div class="item item-9">
              9
            </div>
          </div>
          <div class="container container-01 container-02">
            <div class="item item-1">
              1
            </div>
            <div class="item item-2">
              2
            </div>
            <div class="item item-3">
              3
            </div>
            <div class="item item-4">
              4
            </div>
            <div class="item item-5">
              5
            </div>
            <div class="item item-6">
              6
            </div>
            <div class="item item-7">
              7
            </div>
            <div class="item item-8">
              8
            </div>
            <div class="item item-9">
              9
            </div>
          </div>
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
  mounted () {
    // bus.$on('busEvent', val => {
    //   console.log('父组件')
    //   console.log(val)
    // })
  },
}
</script>
<style lang="scss">
.pg-css {
  color: #fff;

  h2 {
    color: #000;
  }

  .flex {
    display: flex;
    border: 2px solid #000;
    // justify-content: space-between;
    &.flex-center {
      align-items: center;
    }

    span {
      width: 100px;
      background: purple;
    }

    p {
      display: flex;
      flex: 1;
      flex-direction: column;
      justify-content: space-between;
      background: blue;

      em {
        background: green;
      }

      i {
        background: orange;
      }
    }

    font {
      width: 100px;
      height: 100px;
      background: red;
    }
  }

  .poem {
    flex-direction: row-reverse;
    height: 200px;
    background-image: linear-gradient(#666, #999);

    li {
      width: 20px;
      text-align: center;
    }
  }

  .grid {
    .container {
      display: inline-grid;
      // grid-template-columns:repeat(auto-fill,500px);
      grid-template-rows: repeat(3, 50px);
      grid-template-columns: 50px 50px 50px;
      // justify-items: start;
      grid-auto-rows: 20px;
      grid-column-gap: 0; //grid在最新的语法中可省略
      // grid-template-rows: 50px 50px 50px;
      // grid-gap: <grid-row-gap> <grid-column-gap>;
      column-gap: 0; //grid在最新的gap相关的3个语法中可省略
      margin-right: 50px;
      // place-items: <align-items> <justify-items>;
      .item {
        padding: 0;
        margin: 0;
        font-size: 2em;
        text-align: center;
        border: 1px solid #e5e4e9;
      }

      .item-1 {
        background-color: #ef342a;
      }

      .item-2 {
        background-color: #f68f26;
      }

      .item-3 {
        background-color: #4ba946;
      }

      .item-4 {
        background-color: #0376c2;
      }

      .item-5 {
        background-color: #c077af;
      }

      .item-6 {
        background-color: #f8d29d;
      }

      .item-7 {
        background-color: #149632;
      }

      .item-8 {
        background-color: #852369;
      }

      .item-9 {
        background-color: #ff6100;
      }

      &.container-01 {
        .item-1 {
          grid-column-start: 1;
          grid-column-end: 3;
        }

        .item-2 {
          grid-column-start: 1;
          grid-column-end: 3;
        }
      }

      &.container-02 {
        grid-auto-flow: row dense;
      }
    }
  }
}
</style>
