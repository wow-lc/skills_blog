---
title: 水平垂直居中
---
# 水平垂直居中的居中方式

## 水平居中

+ 内联元素或inline-*(如：文本、a标签)
在父元素设置`text-align: center;`

+ 块级元素(如：div)
设置`margin:0 auto;`

+ 多个块级元素
```css
/** flex实现 */
.parent{
    display: flex;
    justify-content: center;
}

/** inline-block */
.parent{
    text-align: center;
}
.children{
    display: inline-block;
}
```

## 垂直居中

+ 内联元素或inline-*(如：文本、a标签)  
> + 单行
```css
/** padding实现*/
.link {
    padding-top: 30px;
    padding-bottom: 30px;
}

/** line-height实现*/
.link {
    height: 60px;
    line-height: 60px;
}
```
> + 多行
```css
/** flex */
.flex-center-vertically {
  display: flex;
  justify-content: center;
  flex-direction: column;
}
/** table实现 */
.center-table{
    display: table;
}
.center-table-cell{
    vertical-align: middle;
}
```


[文章：css-tricks-centering-css-complete-guide](https://css-tricks.com/centering-css-complete-guide/)