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
function debounce(func,wait,immediate) {
    let timeout;

    return function () {
        let context = this;
        let args = arguments;

        if (timeout) clearTimeout(timeout);
        if (immediate) {
            var callNow = !timeout;
            timeout = setTimeout(() => {
                timeout = null;
            }, wait)
            if (callNow) func.apply(context, args)
        }
        else {
            timeout = setTimeout(function(){
                func.apply(context, args)
            }, wait);
        }
    }
}
```

#### 小例子
<debounce></debounce>

### 节流(throttle)

#### 什么是节流
当持续触发事件时，保证一段时间内只调用一次事件处理函数.

#### 实现思路
- 时间戳实现
```
function throttle() {
    
}
```
#### 代码实现