(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{147:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return i})),a.d(t,"metadata",(function(){return c})),a.d(t,"rightToc",(function(){return s})),a.d(t,"default",(function(){return l}));var n=a(2),r=a(9),o=(a(0),a(168)),i={id:"Overview",title:"Overview",sidebar_label:"Overview"},c={id:"VergeORM/Overview",isDocsHomePage:!1,title:"Overview",description:"It provides the function that manages performant many entity objects.",source:"@site/docs/VergeORM/Overview.md",permalink:"/docs/VergeORM/Overview",editUrl:"https://github.com/VergeGroup/Verge/docs/docs/VergeORM/Overview.md",sidebar_label:"Overview",sidebar:"docs",previous:{title:"Migrate from VergeClassic",permalink:"/docs/VergeStore/migrate-from-classic"},next:{title:"Index",permalink:"/docs/VergeORM/index-table"}},s=[{value:"Stores data with normalization",id:"stores-data-with-normalization",children:[]},{value:"Create Database struct",id:"create-database-struct",children:[]},{value:"Add DatabaseType protocol to your database struct",id:"add-databasetype-protocol-to-your-database-struct",children:[]},{value:"Register EntityTable",id:"register-entitytable",children:[]},{value:"Update Database",id:"update-database",children:[]}],b={rightToc:s};function l(e){var t=e.components,a=Object(r.a)(e,["components"]);return Object(o.b)("wrapper",Object(n.a)({},b,a,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"It provides the function that manages performant many entity objects.",Object(o.b)("br",null),"\nTechnically, using Normalization."),Object(o.b)("p",null,"In the application that uses many entity objects, we sure highly recommend using such as ORM using Normalization."),Object(o.b)("p",null,"About more detail,\n",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"https://redux.js.org/recipes/structuring-reducers/normalizing-state-shape"}),"https://redux.js.org/recipes/structuring-reducers/normalizing-state-shape")),Object(o.b)("h1",{id:"vergeorm-core-concepts"},"VergeORM Core Concepts"),Object(o.b)("p",null,"VergeORM is a library to manage Object-Relational Mapping in the value-type struct."),Object(o.b)("p",null,"It provides to store with Normalization and accessing easier way.\nBasically, If we do Normalization without any tool, accessing would be complicated."),Object(o.b)("p",null,"The datastore can be stored anywhere because it's built by struct type.\nIt allows that to adapt to state-shape already exists."),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-swift"}),"struct YourAppState {\n\n  // VergeORM's datastore\n  struct Database: DatabaseType {\n\n    ...\n    // We will explain this later.\n  }\n\n  // Put Database anywhere you'd like\n  var db: Database = .init()\n\n  ... other states\n}\n")),Object(o.b)("h2",{id:"stores-data-with-normalization"},"Stores data with normalization"),Object(o.b)("p",null,"Many applications manage a lot of entities. Single state-tree requires work similar to creating database schema. The state shape is most important, otherwise performance issue will appear when your application grows."),Object(o.b)("p",null,"\u200c\nTo avoid this, we should do ",Object(o.b)("strong",{parentName:"p"},"Normalize")," the State Shape. About Normalizing state shape, ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"https://redux.js.org/recipes/structuring-reducers/normalizing-state-shape"}),"Redux documentation")," explains it so good. VergeORM provides several helper methods to normalize state shape."),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"Supports find, insert, delete with easy plain implementations."),Object(o.b)("li",{parentName:"ul"},"Supports batch update with context, anywhere it can abort and revert to current state.")),Object(o.b)("h1",{id:"getting-started"},"Getting Started"),Object(o.b)("h2",{id:"create-database-struct"},"Create Database struct"),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Database struct")," contains the tables for each Entity. As a struct object, that allows to manage history and it can be embedded on the state that application uses.\n\u200c"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"Database struct",Object(o.b)("ul",{parentName:"li"},Object(o.b)("li",{parentName:"ul"},"Book entity"),Object(o.b)("li",{parentName:"ul"},"Author entity")))),Object(o.b)("h2",{id:"add-databasetype-protocol-to-your-database-struct"},"Add DatabaseType protocol to your database struct"),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-swift"}),"struct Database: DatabaseType {\n}\n")),Object(o.b)("p",null,Object(o.b)("inlineCode",{parentName:"p"},"DatabaseType")," protocol has several constraints and provides functions with that. To satisfy those constraints, make it like following"),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-swift"}),"struct Database: DatabaseType {\n\n  struct Schema: EntitySchemaType {\n\n  }\n\n  struct Indexes: IndexesType {\n\n  }\n\n  var _backingStorage: BackingStorage = .init()\n}\n")),Object(o.b)("h2",{id:"register-entitytable"},"Register EntityTable"),Object(o.b)("p",null,"As an example, suppose we have Book and Author entities."),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-swift"}),"struct Book: EntityType {\n\n  typealias IdentifierType = String\n\n  var entityID: EntityID {\n    .init(rawID)\n  }\n\n  let rawID: String\n}\n\nstruct Author: EntityType {\n\n  typealias IdentifierType = String\n\n  var entityID: EntityID {\n    .init(rawID)\n  }\n\n  let rawID: String\n}\n")),Object(o.b)("p",null,"By conforming to ",Object(o.b)("inlineCode",{parentName:"p"},"EntityType")," protocol, it can be used by Database as Entity. It needs ",Object(o.b)("inlineCode",{parentName:"p"},"rawID")," and you can set whatever type your Entity needs."),Object(o.b)("p",null,"And then, add these entities to Schema object."),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-swift"}),"struct Database: DatabaseType {\n\n  struct Schema: EntitySchemaType {\n    let book = Book.EntityTableKey()\n    let author = Book.EntityTableKey()\n  }\n\n  struct Indexes: IndexesType {\n    // In this time, we don't touch here.\n  }\n\n  var _backingStorage: BackingStorage = .init()\n}\n")),Object(o.b)("p",null,"Finally, you can use Database object like this."),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-swift"}),"let db = RootState.Database()\n\nlet bookEntityTable: EntityTable<Book, Read> = db.entities.book\n")),Object(o.b)("p",null,"You can get aEntityTable object for Book.\nAnd then you can use these methods."),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-swift"}),"bookEntityTable.all()\nbookEntityTable.find(by: <#T##VergeTypedIdentifier<Book>#>)\nbookEntityTable.find(in: <#T##Sequence#>)\n")),Object(o.b)("blockquote",null,Object(o.b)("p",{parentName:"blockquote"},"\ud83d\udca1\nThese syntax are realized by Swift's dynamicMemberLookup. If you have curiosity, please check out the source-code.")),Object(o.b)("h2",{id:"update-database"},"Update Database"),Object(o.b)("p",null,"To update Database object(Insert, Update, Delete), use ",Object(o.b)("inlineCode",{parentName:"p"},"performbatchUpdates")," method."),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-swift"}),"db.performBatchUpdates { (context) in\n  // Put the updating code here\n}\n")),Object(o.b)("p",null,"Example:"),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-swift"}),'db.performBatchUpdates { (context) in\n  let book = Book(rawID: "some")\n  context.book.insert(book)\n}\n\n// db.entities.book.count == 1\n')))}l.isMDXComponent=!0},168:function(e,t,a){"use strict";a.d(t,"a",(function(){return p})),a.d(t,"b",(function(){return m}));var n=a(0),r=a.n(n);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function c(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var b=r.a.createContext({}),l=function(e){var t=r.a.useContext(b),a=t;return e&&(a="function"==typeof e?e(t):c(c({},t),e)),a},p=function(e){var t=l(e.components);return r.a.createElement(b.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},d=r.a.forwardRef((function(e,t){var a=e.components,n=e.mdxType,o=e.originalType,i=e.parentName,b=s(e,["components","mdxType","originalType","parentName"]),p=l(a),d=n,m=p["".concat(i,".").concat(d)]||p[d]||u[d]||o;return a?r.a.createElement(m,c(c({ref:t},b),{},{components:a})):r.a.createElement(m,c({ref:t},b))}));function m(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=a.length,i=new Array(o);i[0]=d;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:n,i[1]=c;for(var b=2;b<o;b++)i[b]=a[b];return r.a.createElement.apply(null,i)}return r.a.createElement.apply(null,a)}d.displayName="MDXCreateElement"}}]);