/** @format */

module.exports = {
  // 多语言下拉菜单的标题
  selectText: "选择语言",
  // 该语言在下拉菜单中的标签
  label: "简体中文",
  // 编辑链接文字
  editLinkText: "在 GitHub 上编辑此页",
  // Service Worker 的配置
  serviceWorker: {
    updatePopup: {
      message: "发现新内容可用.",
      buttonText: "刷新",
    },
  },
  // 当前 locale 的 algolia docsearch 选项
  algolia: {},
  nav: [
    { text: "主页", link: "/" }, // 根路径
    { text: "Js", link: "/js/" },
    { text: "Css", link: "/css/" },    
    {
      text: "Frame",
      items: [
        { text: "Vue", link: "/vue/" },
        { text: "React", link: "/react/" },
        { text: "react native", link: "/rn/" },
      ],
    },
    { text: "微前端", link: "/micro_frontend/" },
    { text: "资源/收藏", link: "/resource/" },
    { text: "Github", link: "https://github.com/sleepq123" },
  ], // 外部链接
  sidebar: {
    "/js/": [
      {
        title: "基础篇",
        children: [
          ["base/variable", "数据类型"],
          ["base/otherKill", "其他js技巧"],
        ],
      },
      {
        title: "进阶篇",
        children: [
          ["advance/debounce_throttle", "防抖/节流"],
          ["advance/bind_call_apply", "bind、call、apply"],
        ],
      },
      {
        title: "设计模式",
        children: [["pattern/singtelon", "单例模式"]],
      },
      {
        title: "资源",
        path: "resouce",
      },
    ],
    "/css": [
      {
        title: "基础篇",
        children: [
          ["/css/base/name", "命名规范"],
          ["/css/base/pixel", "设计稿像素还原"],
          ["/css/base/worth", "值得去学习的Css技巧"],
          ["/css/base/center", "水平垂直居中的集中方式"],
        ],
      },
    ],
    "/micro_frontend/": [
      {
        title: "微前端",
        children: [
          ["/micro_frontend/introduce", "介绍"],
          ["/micro_frontend/main", "主题架构"],
        ],
      },
    ],
    "/rn": [
      {
        title: "认知",
        path: "/rn/cognition",
      },
      {
        title: "基础篇",
        children: [
          ["/rn/base/react-navigation", "导航栏"],
          ["/rn/base/swiper", "轮播banner"],
        ],
      },
      {
        title: "进阶篇",
        children: [
          ["/rn/advance/offline-caching","离线缓存"]
        ],
      },
      {
        title: "资源",
        children: [
          /* ... */
        ],
      },
    ],
    "/react": [{
      title: "进阶篇",
      children: [
        ["/react/advance/pureComponent","PureComponent优化react渲染"]
      ],
    },],
  },
};
