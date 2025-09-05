<template>
  <div class="pg-css">
    <div class="ly-box">
      <CpCrumbs />
      <Flex />
      <Baseline />
      <Property />
    </div>
  </div>
</template>
<script>
import CpCrumbs from '@/components/crumbs/'
import Flex from './flex'
import Property from './property'
import Baseline from './baseline'

export default {
  components: {
    CpCrumbs,
    Flex,
    Baseline,
    Property,
  },
}
</script>
<style lang="scss">
.pg-css {
  h2 {
    color: #000;
  }

  .flex-test-1 {
    box-sizing: border-box;
    display: flex;
    width: 300px;
    color: #000;
    // border: 1px solid #ff6100;

    >* {
      box-sizing: border-box;
      // overflow: hidden;
      border: 1px solid #aaa;
    }

    .flex1 {
      flex: 1;
      flex-basis: 100px;
      // flex-basis: auto;
      // flex-shrink: 0;
      // width: 100px;
    }

    .flex-grow-1 {
      flex-basis: 100px; //flex-basis/width 都可以设置初始宽度，但flex-basis的权重更高
      flex-grow: 1;
    }
  }

  .flex {
    display: flex;
    color: #fff;
    border: 2px solid #000;
    // justify-content: space-between;
    &.flex-center {
      align-items: normal;
    }

    span {
      // flex-shrink: 0;
      width: 100px;
      height: 100px;
      background: purple;
    }

    p {
      display: flex;
      flex: 1;
      flex-direction: column;
      justify-content: space-between;
      padding: 0;
      background: blue;

      em {
        background: green;
      }

      i {
        background: orange;
      }
    }

    font {
      // flex-shrink: 0;
      width: 100px;
      background: red;
    }

    .flex1 {
      flex: 1;
      overflow: hidden;
      white-space: nowrap;
      background-color: gray;
    }
  }

  .poem {
    flex-direction: row-reverse;
    // align-items: flex-end;
    height: 200px;
    color: #fff;
    background-image: linear-gradient(#666, #999);

    li {
      width: 20px;
      text-align: center;
    }
  }

  .grid {
    color: #fff;

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
