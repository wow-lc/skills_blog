---
title: 闭包
---
### 闭包(Closure)

## 函数作用域
<br/>

作用域可以理解是一个封闭的空间(可以理解成`代码块`)。在Js中，一个函数在执行的时候会在内存中创建一个私有作用域。函数执行完成后，这个私有作用域就会被销毁。
  
> **注：“闭包”情况下，因为有对函数内部的引用，所以私有作用域不会自动销毁，需要手动销毁**

## 什么是闭包
<br/>

简单来说，闭包是有权访问另一个函数作用域中变量的函数。
> 函数和对其周围状态（lexical environment，词法环境）的引用捆绑在一起构成闭包（closure）。也就是说，闭包可以让你从内部函数访问外部函数作用域。  在 JavaScript 中，每当函数被创建，就会在函数生成时生成闭包。
<p style="text-align: right">--引用[MDN](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Closures)</p>

## 如何使用闭包
<br/>

在一个函数中返回有对其作用域的变量引用的函数。
```
function makeAdder(x) {
  return function(y) {
    return x + y;
  };
}

var add5 = makeAdder(5);
var add10 = makeAdder(10);

console.log(add5(2));  // 7
console.log(add10(2)); // 12
```
## 为什么要使用闭包

