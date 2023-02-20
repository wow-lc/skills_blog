(window.webpackJsonp=window.webpackJsonp||[]).push([[26],{320:function(a,s,t){"use strict";t.r(s);var r=t(14),e=Object(r.a)({},(function(){var a=this,s=a._self._c;return s("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[s("h3",{attrs:{id:"闭包-closure"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#闭包-closure"}},[a._v("#")]),a._v(" 闭包(Closure)")]),a._v(" "),s("h2",{attrs:{id:"函数作用域"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#函数作用域"}},[a._v("#")]),a._v(" 函数作用域")]),a._v(" "),s("br"),a._v(" "),s("p",[a._v("作用域可以理解是一个封闭的空间(可以理解成"),s("code",[a._v("代码块")]),a._v(")。在Js中，一个函数在执行的时候会在内存中创建一个私有作用域。函数执行完成后，这个私有作用域就会被销毁。")]),a._v(" "),s("blockquote",[s("p",[s("strong",[a._v("注：“闭包”情况下，因为有对函数内部的引用，所以私有作用域不会自动销毁，需要手动销毁")])])]),a._v(" "),s("h2",{attrs:{id:"什么是闭包"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#什么是闭包"}},[a._v("#")]),a._v(" 什么是闭包")]),a._v(" "),s("br"),a._v(" "),s("p",[a._v("简单来说，闭包是有权访问另一个函数作用域中变量的函数。")]),a._v(" "),s("blockquote",[s("p",[a._v("函数和对其周围状态（lexical environment，词法环境）的引用捆绑在一起构成闭包（closure）。也就是说，闭包可以让你从内部函数访问外部函数作用域。  在 JavaScript 中，每当函数被创建，就会在函数生成时生成闭包。\n")]),s("p",{staticStyle:{"text-align":"right"}},[a._v("--引用"),s("a",{attrs:{href:"https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Closures",target:"_blank",rel:"noopener noreferrer"}},[a._v("MDN"),s("OutboundLink")],1)]),s("p")]),a._v(" "),s("h2",{attrs:{id:"如何使用闭包"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#如何使用闭包"}},[a._v("#")]),a._v(" 如何使用闭包")]),a._v(" "),s("br"),a._v(" "),s("p",[a._v("在一个函数中返回有对其作用域的变量引用的函数。")]),a._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("function makeAdder(x) {\n  return function(y) {\n    return x + y;\n  };\n}\n\nvar add5 = makeAdder(5);\nvar add10 = makeAdder(10);\n\nconsole.log(add5(2));  // 7\nconsole.log(add10(2)); // 12\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br"),s("span",{staticClass:"line-number"},[a._v("2")]),s("br"),s("span",{staticClass:"line-number"},[a._v("3")]),s("br"),s("span",{staticClass:"line-number"},[a._v("4")]),s("br"),s("span",{staticClass:"line-number"},[a._v("5")]),s("br"),s("span",{staticClass:"line-number"},[a._v("6")]),s("br"),s("span",{staticClass:"line-number"},[a._v("7")]),s("br"),s("span",{staticClass:"line-number"},[a._v("8")]),s("br"),s("span",{staticClass:"line-number"},[a._v("9")]),s("br"),s("span",{staticClass:"line-number"},[a._v("10")]),s("br"),s("span",{staticClass:"line-number"},[a._v("11")]),s("br")])]),s("h2",{attrs:{id:"为什么要使用闭包"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#为什么要使用闭包"}},[a._v("#")]),a._v(" 为什么要使用闭包")])])}),[],!1,null,null,null);s.default=e.exports}}]);