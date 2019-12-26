import "./public/styles/basic.css";

function integrateGitalk(router) {
  const linkGitalk = document.createElement("link");
  linkGitalk.href = "https://cdn.jsdelivr.net/npm/gitalk@1/dist/gitalk.css";
  linkGitalk.rel = "stylesheet";
  document.body.appendChild(linkGitalk);
  const scriptGitalk = document.createElement("script");
  scriptGitalk.src = "https://cdn.jsdelivr.net/npm/gitalk@1/dist/gitalk.min.js";
  document.body.appendChild(scriptGitalk);

  router.afterEach(to => {
    if (scriptGitalk.onload) {
      loadGitalk(to);
    } else {
      scriptGitalk.onload = () => {
        loadGitalk(to);
      };
    }
  });

  function loadGitalk(to) {
    let commentsContainer = document.getElementById("gitalk-container");
    if (!commentsContainer) {
      commentsContainer = document.createElement("div");
      commentsContainer.id = "gitalk-container";
      commentsContainer.classList.add("content");
    }
    const $page = document.querySelector(".page");
    if ($page) {
      $page.appendChild(commentsContainer);
      if (typeof Gitalk !== "undefined" && Gitalk instanceof Function) {
        renderGitalk(to.fullPath);
      }
    }
  }
  function renderGitalk(fullPath) {
    const gitalk = new Gitalk({
      clientID: "0a956349e354264be4c4",
      clientSecret: "2973b89cbc6925b0701fe6775d127205c06bfc7a", // come from github development
      repo: "skills_blog",
      owner: "sleepq123",
      admin: ["sleepq123"],
      id: "comment",
      distractionFreeMode: false,
      language: "zh-CN"
    });
    gitalk.render("gitalk-container");
  }
}

export default ({
  Vue, // VuePress 正在使用的 Vue 构造函数
  options, // 附加到根实例的一些选项
  router, // 当前应用的路由实例
  siteData // 站点元数据
}) => {
  try {
    document && integrateGitalk(router);
  } catch (e) {
    console.error(e.message);
  }
};
