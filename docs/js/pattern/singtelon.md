---
title: "单例模式"
---
# 单例模式 (singleton pattern)
[[toc]]
## 什么是单例模式
产生一个类的**唯一**实例。  
**确保只有一个实例，并提供全局访问。**

## 好处 
> - 1.确保所有的对象都访问同一个实例
> - 2.更好的控制唯一实例
> - 3.降低全局变量带来的命名污染
> - 4.减少创建对象的开销
> - ...

## 缺点
>- 1.没有抽象层，拓展较为困难
>- 2.职责过重，违背了“单一原则”
>- ...

## 代码实现
> 静态属性实现
```js
function Preson() {
    if (Preson.instance) {        // 判断是否已经有单例了
        return Preson.instance;
    }
    Preson.instance = this;
    return this;
}
var personA = new Preson();
var personB = new Preson();
console.log(personA === personB); // true
```
> 闭包实现
```js
// 创建单例
let createSingleton = function(func) {
    let instance;
    return function() {
        return instance || (instance = func.apply(this,arguments));
    }
};

function Person(name) {
    this.name = name;
    return this;
}

let createPerson = createSingleton(function(name){
    return new Person(name);
})


let personA = createPerson('张三');
console.log(personA); // Person {name: "张三"}
let personB = createPerson('李四');
console.log(personB); // Person {name: "张三"}
console.log(personA === personB); // true
```
> ES6实现
```
class Person {
    constructor(name) {
        this.name = name;
        this.instance = null;
    }

    getInstance(name) {
        if(!this.instance) {
            return this.instance = new Person(name);
        }
        return this.instance;
    }
}
let person = new Person();
console.log(person.getInstance('张三'));
console.log(person.getInstance('李四'));
// Person {name: "张三", instance: null}
// Person {name: "张三", instance: null}
```

## 实际场景
场景一：登录弹窗  
需求： 多次点击只能弹一次窗口，并且关闭后再次打开不重新创建dom节点

<popup>点击</popup>


> 相关代码
``` vue
<template>
  <div>
      <button @click="openPopup">
          <slot></slot>
      </button>
  </div>
</template>

<script>
// 单例模式
let createSingleton = function(func) {
    let instance;
    return function() {
        return instance || (instance = func.apply(this,arguments));
    }
};
let createPopup = createSingleton(() => {
    let div = document.createElement('div');
    div.className = 'popup-shade-box';
    div.innerHTML = '登录弹窗';
    let closeNode = document.createElement('i');
    closeNode.className = 'popup-close';
    closeNode.innerHTML = 'X';
    div.appendChild(closeNode);
    document.body.appendChild(div);
    closeNode.addEventListener('click', () => {
        div.style.display = 'none';
    })
    return div;
});

export default {
    methods: {
        openPopup() {
           createPopup().style.display='block';
        }
    }
}
</script>

<style>
@keyframes move-in {
    0% {top: 150px}
    50% {top: 120px}
}
@keyframes move-out {
    0% {top: 150px}
    50% {top: 120px}
}
.popup-shade-box {
    z-index: 999;
    position: fixed;
    left:0;
    right:0;
    top: 120px;
    width: 500px;
    height: 300px;
    border-radius: 5px;
    margin: 0 auto;
    text-align: center;
    line-height: 30px;
    color: #fff;
    background: rgba(0,0,0, 0.8);
    animation: move-in .5s ease;
}
.popup-close{
    position: absolute;
    right: 5px;
    border: 5px solid transparent;
    cursor: pointer;
}
</style>
```