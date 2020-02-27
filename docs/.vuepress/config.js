const locales = require("./locales");

module.exports = {
  title: "个人博客",
  description: "技术总结",
  base: "/skills_blog/",
  themeConfig: {
    displayAllHeaders: true,
    locales: {
      "/": locales.local_zh,
      "/_en/": locales.local_en,
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
    // TODO 暂时 注释掉英文
    // "/_en/": {
    //   lang: "en-US",
    //   title: "BLOG",
    //   description: "Mine Blog"
    // }
  }
};
