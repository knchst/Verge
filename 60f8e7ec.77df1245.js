(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{151:function(t,e,n){"use strict";n.r(e),n.d(e,"frontMatter",(function(){return i})),n.d(e,"metadata",(function(){return c})),n.d(e,"rightToc",(function(){return s})),n.d(e,"default",(function(){return p}));var a=n(2),r=n(9),o=(n(0),n(170)),i={id:"mutation",title:"Mutation - updates the state of the store",sidebar_label:"Mutation"},c={id:"VergeStore/mutation",isDocsHomePage:!1,title:"Mutation - updates the state of the store",description:"What Mutation is",source:"@site/docs/VergeStore/mutation.md",permalink:"/Verge/docs/VergeStore/mutation",editUrl:"https://github.com/VergeGroup/Verge/docs/docs/VergeStore/mutation.md",sidebar_label:"Mutation",sidebar:"docs",previous:{title:"Store - a storage of the state",permalink:"/Verge/docs/VergeStore/store"},next:{title:"State - a data describes the current state of the app",permalink:"/Verge/docs/VergeStore/state"}},s=[{value:"What Mutation is",id:"what-mutation-is",children:[{value:"Define mutations in the Store",id:"define-mutations-in-the-store",children:[]},{value:"Run Mutation",id:"run-mutation",children:[]}]},{value:"Perform batch commits",id:"perform-batch-commits",children:[]}],u={rightToc:s};function p(t){var e=t.components,n=Object(r.a)(t,["components"]);return Object(o.b)("wrapper",Object(a.a)({},u,n,{components:e,mdxType:"MDXLayout"}),Object(o.b)("h2",{id:"what-mutation-is"},"What Mutation is"),Object(o.b)("p",null,"The only way to actually change state in a Store is by committing a mutation.\nDefine a function that returns Mutation object.\nThat expresses that function is Mutation"),Object(o.b)("div",{className:"admonition admonition-caution alert alert--warning"},Object(o.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-heading"}),Object(o.b)("h5",{parentName:"div"},Object(o.b)("span",Object(a.a)({parentName:"h5"},{className:"admonition-icon"}),Object(o.b)("svg",Object(a.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"}),Object(o.b)("path",Object(a.a)({parentName:"svg"},{fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"})))),"caution")),Object(o.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-content"}),Object(o.b)("p",{parentName:"div"},"Mutation does ",Object(o.b)("strong",{parentName:"p"},"NOT")," allow to run asynchronous operation."))),Object(o.b)("h3",{id:"define-mutations-in-the-store"},"Define mutations in the Store"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-swift"}),"struct MyState {\n  var todos: [TODO] = []\n}\n\nclass MyStore: Store<MyState, Never> {\n\n  func addNewTodo(title: String) {\n    commit { (state: inout MyState) in\n      state.todos.append(Todo(title: title, hasCompleted: false))\n    }\n  }\n\n}\n")),Object(o.b)("h3",{id:"run-mutation"},"Run Mutation"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-swift"}),'let store = MyStore()\nstore.addNewTodo(title: "Create SwiftUI App")\n\nprint(store.state.todos)\n// store.state.todos => [Todo(title: "Create SwiftUI App", hasCompleted: false)]\n')),Object(o.b)("h2",{id:"perform-batch-commits"},"Perform batch commits"),Object(o.b)("p",null,"In a case that commits multiple mutations that can't be integrated, it will dispatch multiple updated events to each subscriber.",Object(o.b)("br",{parentName:"p"}),"\n","It means the application performance might be decreased."),Object(o.b)("p",null,"Like the following operation:"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-swift"}),"class MyStore: Store<MyState, Never> {\n\n  func myMutation() {\n    if ... {\n      commit {\n        ...\n      }\n      // emits updated event\n    }\n\n    if ... {\n      commit {\n        ...\n      }\n      // emits updated event\n    }\n\n    if ... {\n      commit {\n        ...\n      }\n      // emits updated event\n    }\n  }\n\n}\n")),Object(o.b)("p",null,"We can brush up with batching mutation feature.",Object(o.b)("br",{parentName:"p"}),"\n",Object(o.b)("inlineCode",{parentName:"p"},"batchCommit")," method groups multiple mutations then it applies at once.",Object(o.b)("br",{parentName:"p"}),"\n","If ",Object(o.b)("inlineCode",{parentName:"p"},"batchCommit")," has no operations, it happens nothing."),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-swift"}),"class MyStore: Store<MyState, Never> {\n\n  func myMutation() {\n    batchCommit { context in\n\n      if ... {\n        commit {\n          ...\n        }\n      }\n\n      if ... {\n        commit {\n          ...\n        }\n      }\n\n      if ... {\n        commit {\n          ...\n        }\n      }\n\n    }\n  }\n}\n")))}p.isMDXComponent=!0},170:function(t,e,n){"use strict";n.d(e,"a",(function(){return m})),n.d(e,"b",(function(){return d}));var a=n(0),r=n.n(a);function o(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function i(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function c(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?i(Object(n),!0).forEach((function(e){o(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function s(t,e){if(null==t)return{};var n,a,r=function(t,e){if(null==t)return{};var n,a,r={},o=Object.keys(t);for(a=0;a<o.length;a++)n=o[a],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(a=0;a<o.length;a++)n=o[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}var u=r.a.createContext({}),p=function(t){var e=r.a.useContext(u),n=e;return t&&(n="function"==typeof t?t(e):c(c({},e),t)),n},m=function(t){var e=p(t.components);return r.a.createElement(u.Provider,{value:e},t.children)},l={inlineCode:"code",wrapper:function(t){var e=t.children;return r.a.createElement(r.a.Fragment,{},e)}},b=r.a.forwardRef((function(t,e){var n=t.components,a=t.mdxType,o=t.originalType,i=t.parentName,u=s(t,["components","mdxType","originalType","parentName"]),m=p(n),b=a,d=m["".concat(i,".").concat(b)]||m[b]||l[b]||o;return n?r.a.createElement(d,c(c({ref:e},u),{},{components:n})):r.a.createElement(d,c({ref:e},u))}));function d(t,e){var n=arguments,a=e&&e.mdxType;if("string"==typeof t||a){var o=n.length,i=new Array(o);i[0]=b;var c={};for(var s in e)hasOwnProperty.call(e,s)&&(c[s]=e[s]);c.originalType=t,c.mdxType="string"==typeof t?t:a,i[1]=c;for(var u=2;u<o;u++)i[u]=n[u];return r.a.createElement.apply(null,i)}return r.a.createElement.apply(null,n)}b.displayName="MDXCreateElement"}}]);