---
title: "发布订阅模式"
---

# 发布订阅模式（Publish-Subscribe Pattern）

发布订阅模式（Publish-Subscribe Pattern）也是一种行为型设计模式，它是观察者模式的一种变体，它通过解耦发布者和订阅者之间的关系，使它们可以独立地演化。在发布订阅模式中，发布者不会直接发送通知给订阅者，而是把消息发布到一个消息中心（也称为主题），订阅者从消息中心订阅消息，当消息中心收到新消息时，会把消息广播给所有订阅者。

> 代码实例

```js
// 消息中心对象
class MessageCenter {
  constructor() {
    this.subscribers = {}; // 订阅者列表
  }
  // 添加订阅者
  subscribe(topic, subscriber) {
    if (!this.subscribers[topic]) {
      this.subscribers[topic] = [];
    }
    this.subscribers[topic].push(subscriber);
  }
  // 删除订阅者
  unsubscribe(topic, subscriber) {
    if (!this.subscribers[topic]) {
      return;
    }
    const index = this.subscribers[topic].indexOf(subscriber);
    if (index !== -1) {
      this.subscribers[topic].splice(index, 1);
    }
  }
  // 发布消息
  publish(topic, message) {
    if (!this.subscribers[topic]) {
      return;
    }
    this.subscribers[topic].forEach((subscriber) => subscriber(message));
  }
}

// 订阅者函数
const subscriber1 = (message) => {
  console.log(`Subscriber 1 received message: ${message}`);
};
const subscriber2 = (message) => {
  console.log(`Subscriber 2 received message: ${message}`);
};

// 创建消息中心对象
const messageCenter = new MessageCenter();

// 将订阅者函数订阅到消息中心的主题上
messageCenter.subscribe("topic1", subscriber1);
messageCenter.subscribe("topic1", subscriber2);

// 发布消息到主题
messageCenter.publish("topic1", "Hello World");
```

## 观察者模式和发布订阅模式的有什么区别?

> 观察者模式和发布订阅模式都是用于实现组件之间的解耦和通信，但观察者模式更加紧密地绑定了观察者和主题对象之间的关系，而发布订阅模式则更加灵活，发布者和订阅者之间通过消息中心进行通信
