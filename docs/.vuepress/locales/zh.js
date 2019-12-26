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
      buttonText: "刷新"
    }
  },
  // 当前 locale 的 algolia docsearch 选项
  algolia: {},
  nav: [
    { text: "主页", link: "/" }, // 根路径
    { text: "Js", link: "/js/" },
    {
      text: "frame",
      items: [
        { text: "Vue", link: "/vue/" },
        { text: "React", link: "/react/" },
        { text: "react native", link: "/rn/" }
      ]
    },

    { text: "Github", link: "https://github.com/sleepq123" }
  ], // 外部链接
  sidebar: {
    "/js": [
      {
        title: "基础篇",
        children: [
          ["/js/base/variable", "数据类型"],
          ["/js/base/otherKill", "其他js技巧"]
        ]
      },
      {
        title: "进阶篇",
        children: [
          /* ... */
        ]
      },
      {
        title: "资源",
        children: [
          /* ... */
        ]
      }
    ],
    "/rn": [
        {
          title: "基础篇",
          children: [
            ["/rn/base/react-navigation", "导航栏"],
            ["/rn/base/swiper", "轮播banner"]
          ]
        },
        {
          title: "进阶篇",
          children: [
            /* ... */
          ]
        },
        {
          title: "资源",
          children: [
            /* ... */
          ]
        }
      ]
  },
};