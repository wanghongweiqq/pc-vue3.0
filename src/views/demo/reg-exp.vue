<template>
  <div class="pg-reg-exp">
    <div class="ly-box">
      <cp-crumbs />
      <div class="content">
        <h2>正则表达式</h2>
        <h3>构建</h3>
        <table class="table">
          <tbody>
            <tr>
              <th>
                方法
              </th>
              <th>描述</th>
            </tr>

            <tr>
              <td>正则表达式字面量</td>
              <td>const pattern = /\d/g&nbsp;&nbsp;&nbsp;&nbsp;/pattern/modifier(s);</td>
            </tr>
            <tr>
              <td>RegExp对象的构造函数</td>
              <td>const pattern = new RegExp("\\d","g")&nbsp;&nbsp;&nbsp;&nbsp;注意使用元字符等特殊字符时，前面需添加转义字符\</td>
            </tr>
          </tbody>
        </table>
        <h3>元字符 <small>元字符是具有特殊含义的字符</small></h3>
        <table class="table">
          <tbody>
            <tr>
              <th>
                元字符
              </th>
              <th>描述</th>
            </tr>

            <tr>
              <td>
                <a href="#dot">.</a>
              </td>
              <td>查找单个字符，除了换行符或行终止符。<small>转义字符：\n表示换行（LF），\r表示回车（CR）</small>。</td>
            </tr>

            <tr>
              <td>\w</td>
              <td>查找单词字符。<small>包含：a-z、A-Z、0-9，_（下划线）</small></td>
            </tr>

            <tr>
              <td>\W</td>
              <td>查找非单词字符。<small>包含：汉字和特殊符号等</small></td>
            </tr>

            <tr>
              <td>\d</td>
              <td>查找数字。</td>
            </tr>

            <tr>
              <td>\D</td>
              <td>查找非数字字符。</td>
            </tr>

            <tr>
              <td>
                <a
                  href="jsref_regexp_whitespace.asp"
                  title=""
                >\s</a>
              </td>
              <td>查找空白字符。</td>
            </tr>

            <tr>
              <td>
                <a
                  href="jsref_regexp_whitespace_non.asp"
                  title=""
                >\S</a>
              </td>
              <td>查找非空白字符。</td>
            </tr>

            <tr>
              <td>
                <a
                  href="jsref_regexp_begin.asp"
                  title=""
                >\b</a>
              </td>
              <td>在单词的开头/结尾查找匹配项，开头如下：\bHI，结尾如下：HI\b。</td>
            </tr>

            <tr>
              <td>
                <a
                  href="jsref_regexp_begin_not.asp"
                  title=""
                >\B</a>
              </td>
              <td>查找匹配项，但不在单词的开头/结尾处。</td>
            </tr>

            <tr>
              <td>
                <a
                  href="/jsref/jsref_regexp_nul.asp"
                  title=""
                >\0</a>
              </td>
              <td>查找 NULL 字符。</td>
            </tr>

            <tr>
              <td>
                <a
                  href="jsref_regexp_newline.asp"
                  title=""
                >\n</a>
              </td>
              <td>查找换行符。</td>
            </tr>

            <tr>
              <td>
                <a
                  href="/jsref/jsref_regexp_formfeed.asp"
                  title=""
                >\f</a>
              </td>
              <td>查找换页符。</td>
            </tr>

            <tr>
              <td>
                <a
                  href="/jsref/jsref_regexp_carriagereturn.asp"
                  title=""
                >\r</a>
              </td>
              <td>查找回车符。</td>
            </tr>

            <tr>
              <td>
                <a
                  href="/jsref/jsref_regexp_tab.asp"
                  title=""
                >\t</a>
              </td>
              <td>查找制表符。</td>
            </tr>

            <tr>
              <td>
                <a
                  href="/jsref/jsref_regexp_vtab.asp"
                  title=""
                >\v</a>
              </td>
              <td>查找垂直制表符。</td>
            </tr>

            <tr>
              <td>
                <a
                  href="jsref_regexp_octal.asp"
                  title=""
                >\xxx</a>
              </td>
              <td>查找以八进制数 xxx 规定的字符。</td>
            </tr>

            <tr>
              <td>
                <a
                  href="jsref_regexp_hex.asp"
                  title=""
                >\xdd</a>
              </td>
              <td>查找以十六进制数 dd 规定的字符。</td>
            </tr>

            <tr>
              <td>
                <a
                  href="jsref_regexp_unicode_hex.asp"
                  title=""
                >\uxxxx</a>
              </td>
              <td>查找以十六进制数 xxxx 规定的 Unicode 字符。</td>
            </tr>
          </tbody>
        </table>
      </div>
      <div class="content">
        <h2 id="dot">
          换行操作
        </h2>
        <h3>1、br换行</h3>
        <h4>1.1、直接html书写，特殊：\n不换行当做普通字符串处理</h4>
        <p>hello word!\n<br>love you!</p>
        <h4>1.2、v-html，特殊：\n会被自动清除掉</h4>
        <p v-html="whiteSpaceString" />
        <p>v-html容易导致XSS攻击，只有在可信内容上使用它，永远不要用在用户提交的内容上</p>

        <h3>2、\n换行</h3>
        <h4>2.1、设置样式：white-space: pre-wrap</h4>
        <p class="pre-wrap">
          {{ whiteSpaceString }}
        </p>
        <h4>2.2、使用标签：pre</h4>
        <pre class="no-style">{{ whiteSpaceString }}</pre>

        <h3>把br和\n使用replace互换</h3>
        <p class="pre-wrap">
          {{ whiteSpaceString.replace(/<br>/g,'\n') }}
        </p>
      </div>
      <div class="content">
        <h2>反斜杠匹配</h2>
        <p>字符串中没有\字符，因为在字符串文字中使用它时会启动转义序列。数据中如果只有1个反斜杠将无法显示也无法用正则匹配到</p>
        <p>利用数据渲染dom（或console.log）时，反斜杠需要被转义，两个反斜杠输出/显示为一个，奇数个不被渲染，直接被忽略掉</p>
        <p>数据只有奇数个反斜杠（不含其他字符）会报错</p>
        <p>{{ slashString }}</p>
      </div>

      <div class="content">
        <h2>Unicode和正则表达式</h2>
        <p>统一码（Unicode），也叫万国码、单一码，由统一码联盟开发，是计算机科学领域里的一项业界标准，包括字符集、编码方案等。</p>
        <p>统一码是为了解决传统的字符编码方案的局限而产生的，它为每种语言中的每个字符设定了统一并且唯一的二进制编码，以满足跨语言、跨平台进行文本转换、处理的要求。</p>
        <p>这么多符号，Unicode不是一次性定义的，而是分区定义。每个区可以存放16的4次方共65536个字符，称为一个<span class="text-danger">平面（plane）</span>。目前，一共有17个平面，共1114112个字符。</p>
        <table class="table">
          <tbody>
            <tr>
              <th>名称</th>
              <th>描述</th>
            </tr>
            <tr>
              <td>基本平面</td>
              <td>最前面的16的4次方共65536个字符位，放在基本平面（缩写BMP），它的码点范围是从0一直到16的4次方-1，16进制就是从U+0000到U+FFFF。所有最常见的字符都放在这个平面，这是Unicode最先定义和公布的一个平面。</td>
            </tr>
            <tr>
              <td>辅助平面</td>
              <td>（缩写SMP）剩下的字符都放在辅助平面（缩写SMP），码点范围从U+010000一直到U+10FFFF。</td>
            </tr>
            <tr>
              <td>中文</td>
              <td>Unicode编码：[\u4e00-\u9fa5]，下标：19968-40869，共20902个</td>
            </tr>
            <tr>
              <td>全角数字</td>
              <td>Unicode编码：[\uff10-\uff19]，下标：65296-65305，共10个</td>
            </tr>
            <tr>
              <td>0-9</td>
              <td>Unicode编码：[\u0030-\u0039]，下标：48-57，共10个</td>
            </tr>
            <tr>
              <td>A-Z</td>
              <td>Unicode编码：[\u0041-\u005a]，下标：65-90，共26个</td>
            </tr>
            <tr>
              <td>[,\,],^,_,`</td>
              <td>Unicode编码：[\u005b-\u0060]，下标：91-96，共6个</td>
            </tr>
            <tr>
              <td>a-z</td>
              <td>Unicode编码：[\u0061-\u007a]，下标：97-122，共26个</td>
            </tr>
            <tr>
              <td>str.charCodeAt(index)</td>
              <td>获取字符串中索引值为index的Unicode编码的下标，index默认为0，可以不写。'abc'.charCodeAt() // 97</td>
            </tr>
            <tr>
              <td>String.fromCharCode(index1,index2,……)</td>
              <td>将Unicode编码的下标转为字符/字符串。String.fromCharCode(97,98,99) // 'abc'</td>
            </tr>
            <tr>
              <td>num.toString(radix)</td>
              <td>
                <p>将数字进行不同进制(radix)之间的转化，默认进制是10，返回字符串格式。</p>
                <p>num直接使用十进制数字时必须加小括号()，如(97).toString(16)，变量或者其他进制时可以不强制加小括号。</p>
                <p>0b : 二进制，0o :八进制，0x : 十六进制，十进制正常书写，第一位是数字0，第二位是字母(一般小写，大写也可以)</p>
              </td>
            </tr>
            <tr>
              <td>toString的其他对象用法</td>
              <td>
                <p>Array：arr.toString()=arr.join()，返回字符串，以英文逗号隔开</p>
                <p>Boolean：bool.toString()，返回'false'或'true'</p>
                <p>
                  Date：date.toString()，返回Date对象转换后的字符串，date.toLocaleString()，返回地方日期格式规范的字符串，如：2023/8/1 16:30:09
                </p>
                <p>Function：fun.toString()，返回Function关键字、参数列表、函数体部分</p>
                <p>RegExp：pattern.toString()，返回正则表达式的字符串值</p>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>zhe
<script>

import CpCrumbs from '@/components/crumbs/'

export default {
  components: {
    CpCrumbs,
  },
  data () {
    return{
      whiteSpaceString: 'hello word!\n<br />love you!',// 含有换行符\n
      whiteSpaceString2: 'hello word!<br />love you!',// 不含换行符\n
      // eslint-disable-next-line no-useless-escape
      slashString: '数据中4个\\\\，显示为2个，数据中5个\\\\\，显示为2个，建议是偶数个，否则会有eslint的警告',
    }
  },
  mounted () {
    // alert('a\nb')
    // this.dotFun()
    this.slashFun()
    // this.wFun()
    // this.dFun()
    // this.containFun()
    
  },
  methods: {
    dotFun () {
      // 查找单个字符，除了换行符或行终止符
      console.log('字符串中的换行符\\n对match有拦截作用,后面重新匹配，一共匹配到2个')
      console.log(this.whiteSpaceString.match(/l.+o/g))// 换行符\n对match有拦截作用
      console.log('字符串中没有\\n，一共匹配到1个')
      console.log(this.whiteSpaceString2.match(/l.+o/g))
    },
    slashFun () {
      // 两个反斜杠
      const pattern = /\\\\，/g // 字面量的写法
      // const pattern = new RegExp('\\\\\\\\，','g') // 构造函数的写法
      console.log(pattern.toString())
      let result = this.slashString.replace(pattern,'反斜杠')
      console.log('slashString:\n' + this.slashString)
      console.log('pattern:\n' + pattern.toString())
      console.log('result:\n' + result)
      console.log(pattern.test(this.slashString)) 
      pattern.lastIndex = 0
      console.log(pattern.test('\\\\，')) 
    },
    wFun () {
      const pattern1 = /\w/g 
      const pattern2 = /\W/g 
      const text = '我很好，I’m fine 100%!1_2-@'
      console.log('\\w（小w）result:\n' + text.match(pattern1))
      console.log('\\W（大W）result:\n' + text.match(pattern2))
    },
    dFun () {
      // \d代表的数字0-9，匹配不上有些文章说的其他国的数字，比如：罗马数字，全角数字等
      const text = '半角123，_全角４５６Ⅷ½ⅠⅡα零壹XxyzXVIILeごいち（i chi）[,\\,],^,_,`'
      const pattern1 = /\d/g 
      console.log('\\d result:\n' + text.match(pattern1))
      // 包含：a-z、A-Z、0-9，全角数字\uff10-\uff19，不含_
      const pattern2_1 = /[\w\uff10-\uff19]/g 
      const pattern2_2 = /[^_]/g 
      console.log('\\w含全角数字不含下划线 result:\n' + text.match(pattern2_1).join('').match(pattern2_2))
      const pattern3 = /[A-Z]/g 
      console.log('\\字母 result:\n' + text.match(pattern3))
      console.log('1111')
      console.log('0'.charCodeAt())// 65
      console.log('9'.charCodeAt())// 90
      console.log('a'.charCodeAt())// 97
      console.log('z'.charCodeAt())// 122
      let str = '' // Unicode下标转字符
      let code = [] // Unicode下标10进制转16进制，添加前缀可组合成Unicode编码
      for(let i = 91; i < 97; i++) {
        str = str + String.fromCharCode(i) + ','
        code.push(i.toString(16))
      }
      console.log(str + '\n' + code)// Unicode编码， 下标：91-96，符号：[,\,],^,_,`, Unicode：5b,5c,5d,5e,5f,60
      const pattern4_1 = /[[-`]/g 
      const pattern4_2 = /[\u005b-\u0060]/g 
      console.log('\\特殊符号91-96 result:\n' + text.match(pattern4_1))
      console.log('\\特殊符号91-96 result:\n' + text.match(pattern4_2))

      const today = new Date()
      console.log(today + '<br />')// Tue Aug 01 2023 17:57:32 GMT+0800 (中国标准时间)
      console.log(today.toString() + '<br />')// Tue Aug 01 2023 17:57:32 GMT+0800 (中国标准时间)
      console.log(today.toLocaleString())// 2023/8/1 17:57:45
    },
    containFun () {
      const pattern1 = /\(.*?\)/g 
      const pattern2 = /(?<=\()(.*?)(?=\))/g // ?=n或者?!n（es6支持?<=n，?<!p）可以统称为断言。?=n:匹配任何其后紧接指定字符串n的字符串，就是n前面的那个位置， ?<=n:称为后行断言，匹配n后面的位置，简单理解为以n开头。匹配的位置都不包含n、
      const text = '()[]{}((小括号))[中括号]{大括号}(小括号2)[中括号2]{大括号2}'
      console.log('包含:\n' + text.match(pattern1))
      console.log('包含2:\n' + text.match(pattern2))
      console.log(text.match(pattern2))
      const cs = '1234567890'
      const pattern3 = /((?<=\d)\d{3})+/g
      console.log(cs.match(pattern3))
    }
  }
}
</script>
<style lang="scss">
.pg-reg-exp {
  h3 {
    padding-left: 10px;
    margin: 10px 0 5px 0;
    // background-color: rgba($themeColor, 0.1);
    border-left: 5px solid $themeColor;
  }

  h4 {
    padding-top: 10px;
    font-weight: bold;
  }

  .pre-wrap {
    white-space: pre-wrap;
  }

  .no-style {
    padding: 5px 0;
    font-family: "Microsoft YaHei", "微软雅黑", sans-serif;
    background-color: transparent;
  }

  .table {
    small {
      color: $themeColorInfo;
    }
  }
}
</style>
