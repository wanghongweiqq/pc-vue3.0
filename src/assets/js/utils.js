import Constant from './constant'
// 2222
export default {
  // 11
  // 京东云图片处理:按尺寸调用和webp格式调用
  imgOssProcess (url,width,height,quality = 60) {
    url = url ? url : Constant.defaultGoodsImage
    if( url.indexOf('//') > -1) {
      if( width && height) {
        if(window.canWebp) {
          return `${ url }?x-oss-process=img/s/${ width }/${ height }/q/${ quality }/fmt/webp/`
        }else{
          return `${ url }?x-oss-process=img/s/${ width }/${ height }/`
        }
      }else{
        if(window.canWebp) {
          return `${ url }?x-oss-process=img/q/${ quality }/fmt/webp/`
        }else{
          return url
        }
      }
    } else{
      return url
    }
  },
  // 过滤查询参数
  filterParams (obj) {
    let params = {}
    const reg = /(^\s+)|(\s+$)/g
    for (let key in obj) {
      if (typeof (obj[key]) === 'string') {
        obj[key] = obj[key].replace(reg, '')
      }
      // null==undefined 0==''为true，所以要写全等于
      if (obj[key] !== null && obj[key] !== '' && typeof obj[key] !== 'undefined' && !(obj[key] instanceof Array && obj[key].length === 0) && !(obj[key] instanceof Object && Object.keys(obj[key]).length === 0)) {
        params[key] = obj[key]
      }
    }
    return params
  },
  // 过滤查询参数
  filterParamsToString (obj) {
    const params = this.filterParams(obj)
    const strArray = Object.keys(params).map((item,index) => {
      if(index === 0) {
        return `?${ item }=${ params[item] }`
      }else{
        return `&${ item }=${ params[item] }`
      }
    })
    return strArray.join('')
  },
  // 判断是否为整数
  isInteger (val) {
    const num = Number(val)
    return Math.floor(num) === num
  },
  // 数字展示为带n位小数
  formatFloat (val,n = 2) {
    if(isNaN(val)) { // 先尝试转为数值再判断, false:isNaN(false)、isNaN(null)、isNaN('')、isNaN(' ')、isNaN(new Date())
      return val
    }else{ // 1.335.toFixed(2)=1.33
      const num = Number(val)
      if (this.isInteger(num)) {
        return num.toFixed(n)
      }else{
        const times = Math.pow(10, n)
        const result = parseInt(num * times + 0.5) / times
        return result.toFixed(n)
      }
    }
  },
  toFixed (length) {
    var carry = 0 // 存放进位标志
    var num, multiple // num为原浮点数放大multiple倍后的数，multiple为10的length次方
    var str = this + '' // 将调用该方法的数字转为字符串
    var dot = str.indexOf('.') // 找到小数点的位置
    if (str.substr(dot + length + 1, 1) >= 5) carry = 1 // 找到要进行舍入的数的位置，手动判断是否大于等于5，满足条件进位标志置为1
    multiple = Math.pow(10, length) // 设置浮点数要扩大的倍数
    num = Math.floor(this * multiple) + carry // 去掉舍入位后的所有数，然后加上我们的手动进位数
    console.log(num)
    var result = num / multiple + '' // 将进位后的整数再缩小为原浮点数
    /*
     * 处理进位后无小数
     */
    dot = result.indexOf('.')
    if (dot < 0) {
      result += '.'
      dot = result.indexOf('.')
    }
    /*
     * 处理多次进位
     */
    var len = result.length - (dot + 1)
    if (len < length) {
      for (var i = 0; i < length - len; i++) {
        result += 0
      }
    }
    return result
  },
  // 浮点数运算
  math () {
    const _this = this
    function toInteger (num1,num2) { // 扩大相同倍数
      let integerObj = { n1: num1, n2: num2, times: 1 } // times= 1 ：默认倍数为1
      if (_this.isInteger(num1) && _this.isInteger(num2)) { // num1、num2均为整数
        return integerObj
      }else{ // num1、num2为浮点数
        const num1Array = String(num1).split('.')
        const num2Array = String(num2).split('.')
        const num1Times = num1Array.length === 1 ? 0 : num1Array[1].length
        const num2Times = num2Array.length === 1 ? 0 : num2Array[1].length
        const maxTimes = Math.max(num1Times,num2Times)
        integerObj.n1 = String(num1).replace('.','') * Math.pow(10,maxTimes - num1Times)
        integerObj.n2 = String(num2).replace('.','') * Math.pow(10,maxTimes - num2Times)
        integerObj.times = Math.pow(10,maxTimes)
        return integerObj
      }
    }
    function operation (num1, num2, op) {
      const integerObj = toInteger(Number(num1),Number(num2))
      switch (op) {
        case 'add':// 0.1+0.2=0.30000000000000004
          return (integerObj.n1 + integerObj.n2) / integerObj.times
        case 'subtract':// 0.3-0.2=0.09999999999999998
          return (integerObj.n1 - integerObj.n2 ) / integerObj.times
        case 'multiply':// 0.3*9=2.6999999999999997  4.39*100=438.99999999999994
          return (integerObj.n1 * integerObj.n2 ) / Math.pow(integerObj.times,2)
        case 'divide':// 2.7/9=0.30000000000000004
          return integerObj.n1 / integerObj.n2
      }
    }
    // 加减乘除的四个接口
    function add (a, b) {
      return operation(a, b, 'add')
    }
    function subtract (a, b) {
      return operation(a, b, 'subtract')
    }
    function multiply (a, b) {
      return operation(a, b, 'multiply')
    }
    function divide (a, b) {
      return operation(a, b, 'divide')
    }
    return {
      add: add,
      subtract: subtract,
      multiply: multiply,
      divide: divide
    }
  },
  // number () {
  //   const _this = this
  //   function toInteger (val) {
  //     const num = Number(val)
  //     let integerObj = { times: 1, num: 0 }
  //     if (_this.isInteger(num)) {
  //       integerObj.num = num
  //       return integerObj
  //     }
  //     const floatStr = String(num)
  //     integerObj.times = Math.pow(10, floatStr.split('.')[1].length)
  //     integerObj.num = Number(floatStr.replace('.',''))
  //     return integerObj
  //   }
  //   function operation (a, b, op) {
  //     const o1 = toInteger(a)
  //     const o2 = toInteger(b)
  //     const n1 = o1.num
  //     const n2 = o2.num
  //     const t1 = o1.times
  //     const t2 = o2.times
  //     const max = t1 > t2 ? t1 : t2
  //     let result = null
  //     console.log(111111111)
  //     console.log(o1)
  //     console.log(o2)
  //     switch (op) {
  //       case 'add':// 0.1+0.2=0.30000000000000004
  //         if (t1 === t2) {
  //           result = n1 + n2
  //         } else if (t1 > t2) {
  //           result = n1 + n2 * (t1 / t2)
  //         } else {
  //           result = n1 * (t2 / t1) + n2
  //         }
  //         return result / max
  //       case 'subtract':// 0.3-0.2=0.09999999999999998
  //         if (t1 === t2) {
  //           result = n1 - n2
  //         } else if (t1 > t2) {
  //           result = n1 - n2 * (t1 / t2)
  //         } else {
  //           result = n1 * (t2 / t1) - n2
  //         }
  //         return result / max
  //       case 'multiply':// 0.3*9=2.6999999999999997  4.39*100=438.99999999999994
  //         result = (n1 * n2) / (t1 * t2)
  //         return result
  //       case 'divide':// 2.7/9=0.30000000000000004
  //         if(t2 - t1 > 0) {
  //           result = (n1 / n2) * ( t2 / t1)
  //         }else{
  //           result = (n1 / n2) / ( t2 / t1)
  //         }
  //         return result
  //     }
  //   }
  //   // 加减乘除的四个接口
  //   function add (a, b) {
  //     return operation(a, b, 'add')
  //   }
  //   function subtract (a, b) {
  //     return operation(a, b, 'subtract')
  //   }
  //   function multiply (a, b) {
  //     return operation(a, b, 'multiply')
  //   }
  //   function divide (a, b) {
  //     return operation(a, b, 'divide')
  //   }
  //   return {
  //     add: add,
  //     subtract: subtract,
  //     multiply: multiply,
  //     divide: divide
  //   }
  // },
  // 转化为日期格式
  formatDate (date) {
    if(Object.prototype.toString.call(date) === '[object Date]') {
      return date
    }else if(Object.prototype.toString.call(date) === '[object String]' && date !== '') {
      return new Date(date.replace(/-/g, '/'))
    }else if(Object.prototype.toString.call(date) === '[object Number]') {
      return new Date(date)
    }else{
      return null
    }
  },
  // 一天的开始时间
  dayStart (date) {
    const time = this.formatDate(date)
    if(time === null) {
      return '- -'
    }
    return time.setHours(0,0,0)
  },
  // 一天的结束时间
  dayEnd (date) {
    const time = this.formatDate(date)
    if(time === null) {
      return '- -'
    }
    return time.setHours(23,59,59)
  },
  /* 日期格式化
   * 1. date：
   * 字符串格式：'2020/01/01 12:00:00'、'2020-01-01'、'Jan 01 2020 12:00:00'、'Jan 01, 2020'
   * 数字格式（1970/01/01至今毫秒数）：1577808000000
   * 日期格式：new Date(2020,00,01,12,00,0)、new Date(字符串格式/数字格式)
   * 2. reg：
   * [YMDhms]的任意组合形式，但要保证位数对应，注意大小写，因为有两个m
   * reg每个时间节点要有其他字符隔开，时间外的内容不要含这个字符集合中的字母
   * 正确：YYYY-MM-DD hh:mm:ss、YYYY年MM月DD日、YYYYMMDD（做了特殊处理），错误：hhmmss
	*/
  formatTime (date, reg = 'YYYY-MM-DD') {
    const time = this.formatDate(date)
    const regOriginal = reg
    if(time === null) {
      return '- -'
    }
    let f = {
      Y: time.getFullYear(),
      M: time.getMonth() + 1,
      D: time.getDate(),
      h: time.getHours(),
      m: time.getMinutes(),
      s: time.getSeconds()
    }
    if(regOriginal === 'YYYYMMDD') {
      reg = 'YYYY MM DD'
    }
    let result = reg.replace(/([YMDhms])+/g, (v, i) => {
      if (i) {
        let val = '0' + f[i]
        return val.slice(-v.length)
      }
    })
    if(regOriginal === 'YYYYMMDD') {
      result = result.replace(/\s/g, '')
    }
    return result
  },
  // 获取本周时间,toNow默认false:从周一到周日，为true时：从周一到当前date
  getWeekDate (date = new Date(),toNow = false) {
    const time = this.formatDate(date)
    if(time === null) {
      return '- -'
    }
    const weekIndex = time.getDay()
    let monday = new Date(time)
    let minusDay = (weekIndex === 0 ? 7 : weekIndex) - 1
    monday.setDate(monday.getDate() - minusDay) // 定位到周一
    if(toNow) {
      return [this.dayStart(monday), this.dayEnd(time)]
    }else{
      let sunday = new Date(time)
      sunday.setDate(monday.getDate() + 6) // 定位到周日
      return [this.dayStart(monday), this.dayEnd(sunday)]
    }
  },
  // 获取本月时间,toNow默认false：从月初到月末，为true时：从月初到当前date
  getMonthDate (date = new Date(),toNow = false) {
    const time = this.formatDate(date)
    if(time === null) {
      return '- -'
    }
    let monthStart = new Date(time)
    monthStart.setDate(1)
    if(toNow) {
      return [this.dayStart(monthStart), this.dayEnd(time)]
    }else{
      let monthEnd = new Date(time)
      monthEnd.setMonth(monthEnd.getMonth() + 1)
      monthEnd.setDate(0)
      return [this.dayStart(monthStart), this.dayEnd(monthEnd)]
    }
  },
  // 数据类型判断，返回：element、string、number、boolean、object……
  dataType (data) {
    if (data instanceof Element) {
      return 'element'
    }
    if (typeof data === 'symbol') {
      return 'symbol'
    }
    const map = {
      '[object String]': 'string',
      '[object Number]': 'number',
      '[object Boolean]': 'boolean',
      '[object Object]': 'object',
      '[object Array]': 'array',
      '[object Function]': 'function',
      '[object Date]': 'date',
      '[object RegExp]': 'regExp',
      '[object Undefined]': 'undefined',
      '[object Null]': 'null',
    }
    return map[Object.prototype.toString.call(data)]
  },
  // 数据深拷贝，支持Symbal
  deepCopy (data) {
    let newData = null
    const type = this.dataType(data)
    if(type === 'array' || type === 'object') {
      newData = type === 'array' ? [] : {}
      let proto = [...Object.keys(data), ...Object.getOwnPropertySymbols(data)]
      proto.map((key) => {
        newData[key] = this.deepCopy(data[key])
      })
      return newData
    }else{
      return data
    }
  },

}
