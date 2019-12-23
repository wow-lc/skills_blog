module.exports = {
  title: "个人博客",
  description: "技术总结",
  base: "/skills_blog/",
  themeConfig: {
    displayAllHeaders: true,
    locales: {
      "/": {
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
              { text: "React", link: "/react/" }
            ]
          },
          { text: "Github", link: "https://github.com/sleepq123" }
        ], // 外部链接
        sidebar: {
          "/js": [
            {
              title: "基础篇",
              children: [["/js/base/variable", "数据类型"]]
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
        }
      },
      "/_en/": {
        selectText: "Languages",
        label: "English",
        ariaLabel: "Languages",
        editLinkText: "Edit this page on GitHub",
        serviceWorker: {
          updatePopup: {
            message: "New content is available.",
            buttonText: "Refresh"
          }
        },
        algolia: {},
        nav: [
            { text: "Home", link: "/" }, // 根路径
            { text: "Js", link: "/_en/js/" },
            {
              text: "Frame",
              items: [
                { text: "Vue", link: "/_en/vue/" },
                { text: "React", link: "/_en/react/" }
              ]
            },
            { text: "Github", link: "https://github.com/sleepq123" }
          ], // 外部链接
        sidebar: {
          "/_en/js": [
            {
              title: "基础篇",
              children: [["/js/base/variable", "数据类型"]]
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
        }
      }
    }
  },
  locales: {
    // 键名是该语言所属的子路径
    // 作为特例，默认语言可以使用 '/' 作为其路径。
    "/": {
      lang: "zh-CN", // 将会被设置为 <html> 的 lang 属性
      title: "博 客",
      description: "我的博客"
    },
    "/_en/": {
      lang: "en-US",
      title: "BLOG",
      description: "Mine Blog"
    }
  }
};