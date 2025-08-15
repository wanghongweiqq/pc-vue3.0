<template>
  <div class="bcp-flex content">
    <h2>CSS Flex 弹性布局</h2>
    <p>默认值：flex-grow:0 有剩余空间也不扩展；flex-shink:1 空间不足时被压缩； flex-basis:auto  初始大小为auto</p>
    <p>flex:1 为flex-grow:1; flex-shink:1; flex-basis:0%的缩写</p>
    <p>flex-basis/width 都可以设置初始宽度，但flex-basis的权重更高</p>
    <div class="flex-test-1">
      <div class="flex1">
        flex1
      </div>
      <div class="flex-grow-1">
        flex-grow-1
      </div>
      <div class="flex1">
        flex1
      </div>
    </div>
    <div class="flex-test-1">
      <em class="flex-grow-1">
        flex-grow-1
      </em>
      <span class="flex1">
        flex1
      </span>
      <em class="flex-grow-1">
        flex-grow-1
      </em>
    </div>
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
</template>

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
