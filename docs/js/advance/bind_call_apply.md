---
title: bind call apply的区别
---
### bind call apply的区别
共同点都是改变this的指向。

### bind
**bind()** 会创建新的函数，这个新函数的`this`指向`bind()`的第一个参数。

```javascript
// 示例
let corgi = {
    type: "dog"
}
const animal = {
    type: "default",
    getType: function() {
        return this.type;
    }
}
  
console.log(animal.getType());
// output: default
const newFn = animal.getType.bind(corgi);
console.log(newFn());
// output: dog
```

[MDN文档 bind](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Function/bind)

### call

**call()** 方法使用一个指定的 this 值和单独给出的一个或多个参数来`调用`一个函数。

```javascript
console.log(animal.getType.call(corgi));
// output: dog
```
[MDN文档 call](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Function/bind)

### apply
**apply()** 方法调用一个具有给定this值的函数，以及作为一个数组（或类似数组对象）提供的参数。  
与`call()` 类似,不过`apply()` 是以数组形式传递参数 
  
```javascript
console.log(animal.getType.apply(corgi, [...params]));
// output: dog
```
[MDN文档 apply](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Function/apply)