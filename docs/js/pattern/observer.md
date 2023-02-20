---
title: "观察者模式"
---

# 观察者模式（Observer Pattern）

观察者模式（Observer Pattern）是一种行为型设计模式，它定义了一种一对多的依赖关系，让多个观察者对象同时监听一个主题对象，当主题对象状态发生变化时，所有观察者都会自动收到通知并进行相应的更新操作。在观察者模式中，观察者直接订阅主题对象，主题对象持有观察者列表，并在状态发生改变时主动通知观察者。

> 代码实例

```js
// 主题对象
class Subject {
  constructor() {
    this.observers = []; // 观察者列表
  }
  // 添加观察者
  addObserver(observer) {
    this.observers.push(observer);
  }
  // 删除观察者
  removeObserver(observer) {
    const index = this.observers.indexOf(observer);
    if (index !== -1) {
      this.observers.splice(index, 1);
    }
  }
  // 通知所有观察者
  notify() {
    this.observers.forEach((observer) => observer.update());
  }
}

// 观察者对象
class Observer {
  constructor(name) {
    this.name = name;
  }
  // 更新操作
  update() {
    console.log(`${this.name} received update notification`);
  }
}

// 创建主题对象和观察者对象
const subject = new Subject();
const observer1 = new Observer("Observer 1");
const observer2 = new Observer("Observer 2");
const observer3 = new Observer("Observer 3");

// 将观察者对象添加到主题对象的观察者列表中
subject.addObserver(observer1);
subject.addObserver(observer2);
subject.addObserver(observer3);

// 主题对象状态发生变化，通知所有观察者
subject.notify();
```
