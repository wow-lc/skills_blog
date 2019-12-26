module.exports = {
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