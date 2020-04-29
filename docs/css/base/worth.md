---
title: 值得去学习的Css技巧
---
# 值得去学习的Css技巧
[[toc]]

## :not()伪类
用来匹配不符合一组选择器的元素。由于它的作用是防止特定的元素被选中，它也被称为反选伪类（negation pseudo-class）。

#### 实际运用场景
导航栏中俩边边框不展示
```css
/** before */
.li {
    border-right: 1px solid black;
}

.li:last-child{
    border: none; 
}

/** after */
li:not(:last-child) {
    border-right: 1px solid black;
}
```

