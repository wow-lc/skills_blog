---
title: js
---
## 1.js有几种语言类型
```javascript
7种。 
基本类型6种: String, Number, Boolean, Null, Undefind, Symbol
引用类型1种: Object
```

## 2.Symbol的实际运用场景
```
/** 首先Symbol的特性是唯一值的变量,因此可以创建枚举类型,可以避免名称冲突 **/
const directions = {
    UP   : Symbol( 'UP' ),
    DOWN : Symbol( 'DOWN' ),
    LEFT : Symbol( 'LEFT' ),
    RIGHT: Symbol( 'RIGHT' )
};
```

**注意：以symbol作为的属性名,不会被遍历出来。需要`Reflect.ownKeys`或`Object.getOwnPropertySymbols`遍历**

## 3.值类型和引用类型的理解
```
- 值类型
存放于内存的栈中
从一个变量向另一个变量赋值的时候，直接将值分配到新变量的位置

- 引用类型
存放于栈对应指向堆的地方
从一个变量向另一个变量赋值的时候，只是将在栈中指向堆的地址分配给新变量，指向的对地址不变。
```
## 4.undefind与null的区别
```
- null表示"没有对象"，即该处不应该有值。

（1） 作为函数的参数，表示该函数的参数不是对象。
（2） 作为对象原型链的终点。


- undefined表示"缺少值"，就是此处应该有一个值，但是还没有定义。

（1）变量被声明了，但没有赋值时，就等于undefined。
（2) 调用函数时，应该提供的参数没有提供，该参数等于undefined。
（3）对象没有赋值的属性，该属性的值为undefined。
（4）函数没有返回值时，默认返回undefined。
```
引自[阮一峰的网络日志](https://www.ruanyifeng.com/blog/2014/03/undefined-vs-null.html)

## 5.JavaScript数据类型的方式
### typeof
```
示例：
console.log(type('this.string'));
> string

优点：
对基本类型可以做出准确的判断

缺点：
对引用类型都统一指向object

注意点： 
特殊情况 typeof(null) -> null
```

### instanceof
```
示例：
console.log('this.string' instanceof String);
console.log(new String('this is string') instanceof String)
> false
> true

优点：
判断对象和构造函数在原型链上是否有关系，如果有关系，返回真，否则返回假

缺点：
无法对基础类型进行判断
```

### constructor
```
示例：
'this.string'.constructor == String
> true

优点：
基本能检测所有的类型（除了null和undefined）	

缺点：
(1)undefined和null是不能够判断出类型的，并且会报错
(2)使用constructor是不保险的，因为constructor属性是可以被修改的
```

### Object.propertype.toString.call()
```
示例：
Object.prototype.toString.call('this is str')
> [object String]

优点：
检测出所有的类型

缺点：
IE6下，undefined和null均为Object
```

- 6.隐式类型转换的场景以及转换原则
> 参考[掘金](https://juejin.im/post/5cda9178f265da0379419ad1)

