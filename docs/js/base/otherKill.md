---
title: "其他js技巧"
---

#### 1.Object.entries() 与for ... in  的区别
```
都可以遍历object对象的key/value，但for in 循环也会梅举原型中的对象
```

#### 2. Object.prototype.toString.call() 判断对象的类型
```
Object.prototype.toString.call(null); // "[object Null]"
Object.prototype.toString.call(undefined); // "[object Undefined]"
Object.prototype.toString.call(“abc”);// "[object String]"
Object.prototype.toString.call(123);// "[object Number]"
Object.prototype.toString.call(true);// "[object Boolean]"
```
> 但是如下判断还是要换用instanceOf来判断
```
**自定义类型**
function Person(name, age) {
    this.name = name;
    this.age = age;
}
var person = new Person("Rose", 18);
Object.prototype.toString.call(arr); // "[object Object]"
```
> instanceOf
```
console.log(person instanceof Person); // true
```

#### 3.js判断对象是否存在某个属性值
- **in**
> 该方法可以判断对象的自有属性和继承来的属性是否存在。(包括原型中的对象)
```
var o={x:1};
"x" in o;            //true，自有属性存在
"y" in o;            //false
"toString" in o;     //true，是一个继承属性
```

- **hasOwnProperty**
> 该方法只能判断自有属性是否存在，对于继承属性会返回false。。(`不`包括原型中的对象)
```
var o={x:1};
o.hasOwnProperty("x");    　　 //true，自有属性中有x
o.hasOwnProperty("y");    　　 //false，自有属性中不存在y
o.hasOwnProperty("toString"); //false，这是一个继承属性，但不是自有属性
```

#### 4.遍历数组的几种方法
+ for of
#### 5.遍历对象属性的几种方法
+ for in 

#### 6. 如何控制多个请求的执行顺序
> 1.都返回Promise，放入Promise.all中实现顺序执行
> 2.同步回调
```
function getInfo(info, index) {
  return new Promise((resolve, reject) => {
    // 使用settimeout模拟请求
    const ms = 1000 * Math.ceil(Math.random() * 3);
    setTimeout(() => {
      // get(info).save().then(data => { resolve(index); })
      resolve(index);
    }, ms);
    console.log(`${index} time: ${ms}`);
  });
}

let promises = [1, 2, 3].map((item, index) => {
  let info = {};
  return getInfo(info, index);
});

Promise.all(promises).then((allData) => {
  console.log(allData);
  // [0, 1, 2]
}).catch((err) => {
  console.log(err);
})
```
-- segmentfault： cipchk