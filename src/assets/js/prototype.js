
// 判断是否为整数
const isInteger = (val) => {
  const num = Number(val)
  return Math.floor(num) === num
}

// 浮点数运算
const math = () => {
  function toInteger (num1,num2) { // 扩大相同倍数
    let integerObj = { n1: num1, n2: num2, times: 1 } // times= 1 ：默认倍数为1
    if (isInteger(num1) && isInteger(num2)) { // num1、num2均为整数
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
}

const toFixed = (length) => {
  console.log('length')
  console.log(length)
  console.log(this)
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
}
const prototypeReset = () => {
  Math.add = math().add
  Math.subtract = math().subtract
  Math.multiply = math().multiply
  Math.divide = math().divide
  Number.prototype.toFixed = (length,a) => {
    console.log('length')
    console.log(length)
    console.log(this)
    var carry = 0 // 存放进位标志
    var num, multiple // num为原浮点数放大multiple倍后的数，multiple为10的length次方
    var str = a + '' // 将调用该方法的数字转为字符串
    var dot = str.indexOf('.') // 找到小数点的位置
    if (str.substr(dot + length + 1, 1) >= 5) carry = 1 // 找到要进行舍入的数的位置，手动判断是否大于等于5，满足条件进位标志置为1
    multiple = Math.pow(10, length) // 设置浮点数要扩大的倍数
    num = Math.floor(a * multiple) + carry // 去掉舍入位后的所有数，然后加上我们的手动进位数
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
  }
}
export default toFixed
