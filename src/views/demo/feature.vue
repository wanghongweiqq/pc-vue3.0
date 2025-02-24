<template>
  <div class="pg-feature">
    <cp-crumbs />
    <h2>新的响应式机制采用了ES6的ProxyApi，抛弃了之前的Object.defineProperty()比较直观的解决的是Vue2中这两点问题</h2>
    <ul>
      <li><p>关于对象：Vue 无法检测 property 的添加或移除。由于 Vue 会在初始化实例时对 property 执行 getter/setter 转化，所以 property 必须在 <code>data</code> 对象上存在才能让 Vue 将它转换为响应式的。</p></li>
      <li>
        <p>关于数组：Vue 不能检测以下数组的变动：</p>
        <ol>
          <li>
            当你利用索引直接设置一个数组项时，例如：<code>vm.items[indexOfItem] = newValue</code>
          </li>
          <li>
            当你修改数组的长度时，例如：<code>vm.items.length = newLength</code>
          </li>
        </ol>
      </li>
    </ul>
    <p>
      <el-button
        size="small"
        type="primary"
        @click="goodProxy"
      >
        对象增加属性
      </el-button>
    </p>
    <p>{{ student.name }}：{{ student.sex }}</p>
    <p>{{ books }}</p>
  </div>
</template>
<script>
import CpCrumbs from '@/components/crumbs/'

export default {
  components: {
    CpCrumbs
  },
  data () {
    return{
      student: {
        name: 'wanghongwei',
      },
      books: ['语文','数学']
    }
  },
  mounted () {
    this.proxy1()
    // this.proxy2()
    // this.proxy3()
    // this.proxy4()
    // this.proxy5()
    // this.memberStatic()
    // this.memberInstance()
    // this.memberPrototype()
  },
  methods: {
    goodProxy () {
      this.student.sex = '男'
      this.books[2] = '英语'
      // this.student = {
      //   sex: '男',
      //   name: 'wanghongwei',
      // }
    },
    proxy1 () {
      const sum = (a, b) => {
        return a + b
      }
      let proxy = new Proxy(sum, {
        apply: function (target, thisArg, argumentsList) {
          console.log('argumentsList')
          console.log(argumentsList)
          // argumentsList: 数组形式 [1, 2]
          return argumentsList[0] + argumentsList[1] * 100
        }
      })
      // 正常调用
      console.log(sum(1, 2)) // 3
      // 代理之后调用
      console.log(proxy(1, 2)) // 201
    },
    proxy2 () {
      const target = {
        greet (a, b) {
          return a + b
        }
      }
      const handler = {
        apply: function (target, thisArg, argumentsList) {
          return argumentsList[0] + argumentsList[1] * 100
        }
      }
      const proxy = new Proxy(target.greet, handler)
      console.log(target.greet(1,2)) // 3
      console.log(proxy(1,2)) // 201
    },
    proxy3 () {
      const target = {
        message: 'Hello, world!'
      }
      const handler = {
        get: function (target, prop, receiver) {
          return `Intercepted: ${ Reflect.get(target, prop, receiver) }`
        }
      }
      const proxy = new Proxy(target, handler)
      console.log(target.message) // Hello, world!
      console.log(proxy.message) // 输出：Intercepted: Hello, world!
    },
    proxy4 () {
      const target = {
        greet () {
          return 'Hello'
        }
      }
      const handler = {
        apply: function (target, thisArg, argumentsList) {
          return `${ Reflect.apply(target, thisArg, argumentsList) } World!`
        }
      }
      const proxy = new Proxy(target.greet, handler)
      console.log(2) 
      console.log(proxy()) // 输出：Hello World!
    },
    proxy5 () {
      class Person {
        constructor (firstName, lastName) {
          this.firstName = firstName
          this.lastName = lastName
        }
        fullName () {
          return `${ this.firstName } ${ this.lastName }`
        }
        get fullName2 () {
          return `${ this.firstName } ${ this.lastName }`
        }
      }

      let args = ['小帅', '的编程笔记']

      let xiaoshuai = Reflect.construct(
        Person,
        args
      )

      console.log(xiaoshuai instanceof Person)// true
      console.log(xiaoshuai.fullName()) // 小帅 的编程笔记
      console.log(xiaoshuai.fullName2) // 小帅 的编程笔记
    },
    // 静态成员：静态成员的属性和方法不能通过实例对象调用，只能通过类的本身调用
    memberStatic () {
      function Person () {}
      Person.sex = '男' // 静态属性 sex
      Person.sayName = function () { // 静态方法 sayName
        console.log('Hellow World') 
      }

      console.log(Person.sex) // 男
      Person.sayName() // Hellow World

      var person = new Person()
      console.log(person.sex) // undefined
      // person.sayName() // Uncaught TypeError: person.sayName is not a function
    },
    // 实例成员：实例成员的属性和方法不能通过类本身调用，只能通过实例化对象调用
    memberInstance () {
      function Person (name) {
        this.name1 = name || '默认实例名字' // 实例属性 name1
        this.say1 = function () {} // 实例方法 say1()
      }

      let person1 = new Person('小明')
      // 实例属性 age 
      person1.name1 = '小丽'
      person1.age = 14 
      // 实例方法 say2()
      person1.say2 = function () { 
        console.log('Hello World') 
      } 

      // 实例成员的属性和方法不能通过类本身调用/
      console.log(Person.name) // Person，构造函数/类都有一个默认属性name，值为构造函数的名字
      console.log(person1.name1) // 小丽 > 小明 > 默认实例名字，值取值最后声明的值，this.name1最先声明
      console.log(Person.name1) // undefined
      // Person.say2() // Uncaught TypeError: Person.sayName is not a function
   
      let person2 = new Person()
      console.log(person1.age) // 14 
      console.log(person2.age) // undefined
    },
    // 原型成员：类的原型的属性和方法也不能通过类本身调用，只能通过实例化对象调用
    memberPrototype () {
      function Person (name) {
        this.name = name // 实例属性 name
        this.say = function () { console.log('实例方法 this.say') } // 实例方法 say()
      }
      Person.prototype.name = '王十八' // 声明原型属性
      Person.prototype.age = '18' // 声明原型属性
      Person.prototype.say = function () { // 声明原型方法
        console.log('构造函数的原型方法 Person.prototype.say')
      }

      // 类的原型的属性和方法不能通过类本身调用，
      console.log(Person.age) // undefined
      // Person.say() // Uncaught TypeError: Person.say is not a function

      let person = new Person('小明')
      person.say = function () { console.log('实例方法 person.say') }
      console.log(person.name) // 小明
      console.log(person.age) // 可以使用实例对象调用原型属性，实际是 person.__proto__.name
      person.say() // 实例优先调用实例成员，person.say > this.say，不存在时会调用构造函数的原型方法Person.prototype.say，实际是 person.__proto__.say()
    },
  }
}
</script>
