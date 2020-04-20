---
title: 防抖/节流
---
### 防抖(debounce)
#### 什么是防抖？
当持续触发事件时，一定时间段内没有再触发事件，事件处理函数才会执行一次，如果设定的时间到来之前，又一次触发了事件，就重新开始延时。  

#### 实现思路
- 1.当触发事件时，执行**setTimeout**方法进行延迟执行。
- 2.在**延迟执行时间段内**再次触发事件，**清除定时器**，重新执行上步动作。

#### 代码实现
```javascript
/**
 * @desc 函数防抖
 * @param func 函数
 * @param wait 延迟执行毫秒数
 * @param immediate true 表立即执行，false 表非立即执行
 */
function debounce(fn, wait, immediate) {
    let timer;
    
    return function() {
        let context = this;
        let args = arguments;
        
        if(immediate && !timer) {
            fn.apply(context, args); 
        }
        if(timer){
            timer = clearTimeout(timer);
        }
        timer = setTimeout(() => {
            fn.apply(context, args); 
            timer = clearTimeout(timer);
        },wait);
    }
};
```

#### 小例子
<debounce></debounce>

### 节流(throttle)

#### 什么是节流
当持续触发事件时，保证一段时间内只调用一次事件处理函数.

#### 实现思路
**通过时间戳实现**
- 1.保存当前时间
- 2.根据（当前时间 - 上次保存时间）是否大于设置dely时间,若大于执行，反之不执行fn 
```javascript
function throttle(fn, dely) {
    let start = 0;
    return function() {
        let context = this;
        let args = arguments;
        let now = Date.now();
        if(now - start > dely) {
            fn.apply(context, args);
        }
    }
}
```
**通过定时器实现**
- 1.首次执行调用定时器
- 2.再次执行会判断是否存在未执行完的定时器.若有,跳过不执行；反之,重新执行定时器
```javascript
function throttle(fn, dely){
    let timer;
    return function() {
        let context = this;
        let args = arguments;
        if(!timer) {
            timer =  setTimeout(() => {
                timer = null;
                fn.apply(context,args);
            }, dely);
        }
    }
}
```
#### 小例子
<throttle></throttle>