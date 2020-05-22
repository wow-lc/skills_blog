---
title: 离线缓存
---
# 离线缓存

[[toc]]

##  作用
&emsp;将上次获取的数据放到本地, 当网络不佳或网络请求前去展示本地的数据。

## 离线缓存策略
&emsp;以缓存展示优先，请求成功数据做覆盖。

## 如何实现
  
&emsp;在rn中利用`AsyncStorage`实现rn离线框架

![离线缓存实现](../../.vuepress/assets/exhabitions/cache.png)

