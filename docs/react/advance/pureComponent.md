---
title: PureComponent 
---

# PureComponent 
&emsp;`Pure  [pjʊə(r)]  纯的;纯净的;`  

&emsp;所以`PureComponent`可以理解为react中的`纯组件`。  

&emsp;在react应用中，`shouldComponentUpdate`函数可以手动控制组件的更新渲染，是优化react组件渲染最直接的方式 。PureComponent原理shou就是利用shouldComponentUpdate对组件的封装。

## 原理
&emsp;利用在`shouldComponentUpdate`函数中`浅比较`state和nextState、props和nextProps控制是否更新渲染。

> 源代码部分代码
```javascript
if (this._compositeType === CompositeTypes.PureClass) {
  shouldUpdate = !shallowEqual(prevProps, nextProps)
  || !shallowEqual(inst.state, nextState);
}
```

## 使用场景
- PureComponent一般用于展示组件，以减少更新渲染。
- 优化渲染，不必重写`shouldComponentUpdate`达到减少渲染次数的目的。

## 注意点
&emsp;PureComponent原理是浅比较，所以当state或props数据是`引用数据`变动时，并不会触发更新render.

## 例子
```javascript
import React, { PureComponent, Component } from 'react';

class ChildPage extends PureComponent{
    constructor() {
        super();
    }

    render() {
        return (<div>children component</div>);
    }
}

class ParentPage extends Component{
  constructor() {
    super();
    this.state = {
      isShow: false
    };
  }
  changeState = () => {
    this.setState({
      isShow: true
    })
  };
  render() {
    console.log('parent render');
    return (
      <div>
        <button onClick={this.changeState}>点击</button>
        <div>{this.state.isShow.toString()}</div>
        <ChildPage />
      </div>
    );
  }
}
// LOG: parent render

// 当父组件点击,子组件不会重新渲染
// 在ChildPage组件中,state和props并没有发生改变, 
// 故shouldComponentUpdate浅比较返回false，不执行更新render.
```