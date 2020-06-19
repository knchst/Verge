(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{148:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return i})),r.d(t,"metadata",(function(){return c})),r.d(t,"rightToc",(function(){return l})),r.d(t,"default",(function(){return u}));var n=r(2),o=r(9),a=(r(0),r(168)),i={id:"motivation",title:"Motivation",sidebar_label:"Motivation"},c={id:"motivation",isDocsHomePage:!1,title:"Motivation",description:"Verge focuses use-cases in the real-world",source:"@site/docs/Motivation.md",permalink:"/docs/motivation",editUrl:"https://github.com/VergeGroup/Verge/docs/docs/Motivation.md",sidebar_label:"Motivation",sidebar:"docs",next:{title:"Overview - focusing on faster performance",permalink:"/docs/"}},l=[{value:"Verge focuses use-cases in the real-world",id:"verge-focuses-use-cases-in-the-real-world",children:[]},{value:"Does flux architecture have a good performance?",id:"does-flux-architecture-have-a-good-performance",children:[]},{value:"Verge is designed for use from small and supports to scale.",id:"verge-is-designed-for-use-from-small-and-supports-to-scale",children:[]}],s={rightToc:l};function u(e){var t=e.components,r=Object(o.a)(e,["components"]);return Object(a.b)("wrapper",Object(n.a)({},s,r,{components:t,mdxType:"MDXLayout"}),Object(a.b)("h2",{id:"verge-focuses-use-cases-in-the-real-world"},"Verge focuses use-cases in the real-world"),Object(a.b)("p",null,"Recently, we could say the unidirectional data flow is a popular architecture such as flux."),Object(a.b)("h2",{id:"does-flux-architecture-have-a-good-performance"},"Does flux architecture have a good performance?"),Object(a.b)("p",null,"It depends.\nThe performance will be the worst depends on how it is used."),Object(a.b)("p",null,"However, most of the cases, we don't know the app we're creating how it will grow and scales.",Object(a.b)("br",{parentName:"p"}),"\n","While the application is scaling up, the performance might decrease by getting complexity.",Object(a.b)("br",{parentName:"p"}),"\n","To keep performance, we need to tune it up with several approaches.",Object(a.b)("br",{parentName:"p"}),"\n","Considering the performance takes time from the beginning.",Object(a.b)("br",{parentName:"p"}),"\n","it will make us be annoying to use flux architecture."),Object(a.b)("h2",{id:"verge-is-designed-for-use-from-small-and-supports-to-scale"},"Verge is designed for use from small and supports to scale."),Object(a.b)("p",null,"Setting Verge up quickly, and tune-up when we need it."),Object(a.b)("p",null,"Verge automatically tune-up and shows us what makes performance badly while development from Xcode's documentation."),Object(a.b)("p",null,"For example, Verge provides these stuff to tune performance up."),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"Derived (Similar to ",Object(a.b)("a",Object(n.a)({parentName:"li"},{href:"https://github.com/facebookexperimental/Recoil"}),"facebookexperimental/Recoil"),"'s Selector)"),Object(a.b)("li",{parentName:"ul"},"ORM")))}u.isMDXComponent=!0},168:function(e,t,r){"use strict";r.d(t,"a",(function(){return p})),r.d(t,"b",(function(){return b}));var n=r(0),o=r.n(n);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var s=o.a.createContext({}),u=function(e){var t=o.a.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},p=function(e){var t=u(e.components);return o.a.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},f=o.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,a=e.originalType,i=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),p=u(r),f=n,b=p["".concat(i,".").concat(f)]||p[f]||d[f]||a;return r?o.a.createElement(b,c(c({ref:t},s),{},{components:r})):o.a.createElement(b,c({ref:t},s))}));function b(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=r.length,i=new Array(a);i[0]=f;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:n,i[1]=c;for(var s=2;s<a;s++)i[s]=r[s];return o.a.createElement.apply(null,i)}return o.a.createElement.apply(null,r)}f.displayName="MDXCreateElement"}}]);