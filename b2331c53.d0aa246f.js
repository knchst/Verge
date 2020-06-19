(window.webpackJsonp=window.webpackJsonp||[]).push([[21],{159:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return o})),n.d(t,"rightToc",(function(){return l})),n.d(t,"default",(function(){return b}));var a=n(2),r=n(9),c=(n(0),n(168)),i={id:"BasicUsage",title:"BasicUsage",sidebar_label:"BasicUsage"},o={id:"VergeStore/BasicUsage",isDocsHomePage:!1,title:"BasicUsage",description:"\ud83c\udf50 Basic Usage",source:"@site/docs/VergeStore/BasicUsage.md",permalink:"/docs/VergeStore/BasicUsage",editUrl:"https://github.com/VergeGroup/Verge/docs/docs/VergeStore/BasicUsage.md",sidebar_label:"BasicUsage",sidebar:"docs",previous:{title:"Overview - focusing on faster performance",permalink:"/docs/"},next:{title:"Advanced usage",permalink:"/docs/VergeStore/advanced-usage"}},l=[{value:"\ud83c\udf50 Basic Usage",id:"-basic-usage",children:[]}],s={rightToc:l};function b(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(c.b)("wrapper",Object(a.a)({},s,n,{components:t,mdxType:"MDXLayout"}),Object(c.b)("h2",{id:"-basic-usage"},"\ud83c\udf50 Basic Usage"),Object(c.b)("p",null,"To start to use Verge in our app, we use these domains:"),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},Object(c.b)("p",{parentName:"li"},Object(c.b)("strong",{parentName:"p"},"State")),Object(c.b)("ul",{parentName:"li"},Object(c.b)("li",{parentName:"ul"},"A type of state-tree that describes the data our feature needs."))),Object(c.b)("li",{parentName:"ul"},Object(c.b)("p",{parentName:"li"},Object(c.b)("strong",{parentName:"p"},"Activity")),Object(c.b)("ul",{parentName:"li"},Object(c.b)("li",{parentName:"ul"},"A type that describes an activity that happens during performs the action."),Object(c.b)("li",{parentName:"ul"},"This instance won't be stored in anywhere. It would help us to perform something by event-driven."),Object(c.b)("li",{parentName:"ul"},"Consider to use this depends on that if can be represented as a state."),Object(c.b)("li",{parentName:"ul"},"For example, to present alert or notifcitaions by the action."))),Object(c.b)("li",{parentName:"ul"},Object(c.b)("p",{parentName:"li"},Object(c.b)("strong",{parentName:"p"},"Action")),Object(c.b)("ul",{parentName:"li"},Object(c.b)("li",{parentName:"ul"},"Just a method that a store or dispatcher defines."))),Object(c.b)("li",{parentName:"ul"},Object(c.b)("p",{parentName:"li"},Object(c.b)("strong",{parentName:"p"},"Store")),Object(c.b)("ul",{parentName:"li"},Object(c.b)("li",{parentName:"ul"},"A storage object to manage a state and emit activities by the action."),Object(c.b)("li",{parentName:"ul"},"Store can dispatch actions to itself."))),Object(c.b)("li",{parentName:"ul"},Object(c.b)("p",{parentName:"li"},Object(c.b)("strong",{parentName:"p"},"Dispatcher (Optional)")),Object(c.b)("ul",{parentName:"li"},Object(c.b)("li",{parentName:"ul"},"A type to dispatch an action to specific store."),Object(c.b)("li",{parentName:"ul"},"For a large application, to separate the logics each domain.")))),Object(c.b)("p",null,Object(c.b)("strong",{parentName:"p"},"Setup a Store")),Object(c.b)("p",null,"Define a state"),Object(c.b)("pre",null,Object(c.b)("code",Object(a.a)({parentName:"pre"},{className:"language-swift"}),"struct MyState {\n  var count = 0\n}\n")),Object(c.b)("p",null,"Define an activity"),Object(c.b)("pre",null,Object(c.b)("code",Object(a.a)({parentName:"pre"},{className:"language-swift"}),"enum MyActivity {\n  case countWasIncremented\n}\n")),Object(c.b)("p",null,"Define a store that uses defined state and activity"),Object(c.b)("pre",null,Object(c.b)("code",Object(a.a)({parentName:"pre"},{className:"language-swift"}),"class MyStore: Store<MyState, MyActivity> {\n\n  init(dependency: Dependency) {\n    super.init(initialState: .init(), logger: nil)\n  }\n\n}\n")),Object(c.b)("p",null,"We can create an instance from ",Object(c.b)("inlineCode",{parentName:"p"},"Store")," but we can put some dependencies (e.g. API client) with creating a sub-class of ",Object(c.b)("inlineCode",{parentName:"p"},"Store"),"."),Object(c.b)("p",null,"(If you don't need Activity, you can set ",Object(c.b)("inlineCode",{parentName:"p"},"Never")," there.)"),Object(c.b)("p",null,"And then, add an action in the store"),Object(c.b)("pre",null,Object(c.b)("code",Object(a.a)({parentName:"pre"},{className:"language-swift"}),"class MyStore: Store<MyState, MyActivity> {\n\n  init(dependency: Dependency) {\n    super.init(initialState: .init(), logger: nil)\n  }\n\n  func incrementCount() {\n    commit {\n      $0.count += 1\n    }\n  }\n}\n")),Object(c.b)("p",null,"Yes, this point is most different with Redux. it's close to Vuex.",Object(c.b)("br",null),"\nStore knows what the application's needs."),Object(c.b)("p",null,"For example, call that action."),Object(c.b)("pre",null,Object(c.b)("code",Object(a.a)({parentName:"pre"},{className:"language-swift"}),"let store = MyStore(...)\nstore.incrementCount()\n")),Object(c.b)("p",null,"There are some advantages:"),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},Object(c.b)("p",{parentName:"li"},Object(c.b)("strong",{parentName:"p"},"Better Performance")),Object(c.b)("ul",{parentName:"li"},Object(c.b)("li",{parentName:"ul"},"Swift can perform this action with Swift's method dispatching instead switch-case computing."))),Object(c.b)("li",{parentName:"ul"},Object(c.b)("p",{parentName:"li"},Object(c.b)("strong",{parentName:"p"},"Returns anything we need")),Object(c.b)("ul",{parentName:"li"},Object(c.b)("li",{parentName:"ul"},"the action can return anything from that action (e.g. state or result)"),Object(c.b)("li",{parentName:"ul"},"If that action dispatch async operation, it can return ",Object(c.b)("inlineCode",{parentName:"li"},"Future")," object. (such as Vuex action)")))),Object(c.b)("p",null,"Perform a commit asynchronously"),Object(c.b)("pre",null,Object(c.b)("code",Object(a.a)({parentName:"pre"},{className:"language-swift"}),"func incrementCount() {\n  DispatchQueue.main.async {\n    commit {\n      $0.count += 1\n    }\n  }\n}\n")),Object(c.b)("p",null,"Send an activity from the action"),Object(c.b)("pre",null,Object(c.b)("code",Object(a.a)({parentName:"pre"},{className:"language-swift"}),"func incrementCount() {\n  commit {\n    $0.count += 1\n  }\n  send(.countWasIncremented)\n}\n")),Object(c.b)("p",null,Object(c.b)("strong",{parentName:"p"},"Use the store in SwiftUI")),Object(c.b)("p",null,"(Currently, Verge's development is focusing on UIKit.)"),Object(c.b)("pre",null,Object(c.b)("code",Object(a.a)({parentName:"pre"},{className:"language-swift"}),"struct MyView: View {\n\n  @EnvironmentObject var store: MyStore\n\n  var body: some View {\n    Group {\n      Text(store.state.name)\n      Text(store.state.age)\n    }\n    .onReceive(session.store.activityPublisher) { (activity) in\n      ...\n    }\n  }\n}\n")),Object(c.b)("p",null,Object(c.b)("strong",{parentName:"p"},"Use the store in UIKit")),Object(c.b)("p",null,"In UIKit, UIKit doesn't work with differentiating.",Object(c.b)("br",null),"\nTo keep better performance, we need to set a value if it's changed."),Object(c.b)("p",null,"Verge publishes an object that contains previous state and latest state, Changes object would be so helpful to check if a value changed."),Object(c.b)("pre",null,Object(c.b)("code",Object(a.a)({parentName:"pre"},{className:"language-swift"}),"class ViewController: UIViewController {\n\n  let store: MyStore\n\n  var cancellable: VergeAnyCancellable?\n\n  init(store: MyStore) {\n    ...\n\n    self.cancellable = store.sinkChanges { [weak self] changes in\n      self?.update(changes: changes)\n    }\n\n  }\n\n  private func update(changes: Changes<MyStore.State>) {\n\n    changes.ifChanged(\\.name) { (name) in\n      nameLabel.text = name\n    }\n\n    changes.ifChanged(\\.age) { (age) in\n      ageLabel.text = age.description\n    }\n\n  }\n}\n")))}b.isMDXComponent=!0},168:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return O}));var a=n(0),r=n.n(a);function c(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){c(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},c=Object.keys(e);for(a=0;a<c.length;a++)n=c[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(a=0;a<c.length;a++)n=c[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=r.a.createContext({}),b=function(e){var t=r.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=b(e.components);return r.a.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},m=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,c=e.originalType,i=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),p=b(n),m=a,O=p["".concat(i,".").concat(m)]||p[m]||u[m]||c;return n?r.a.createElement(O,o(o({ref:t},s),{},{components:n})):r.a.createElement(O,o({ref:t},s))}));function O(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var c=n.length,i=new Array(c);i[0]=m;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o.mdxType="string"==typeof e?e:a,i[1]=o;for(var s=2;s<c;s++)i[s]=n[s];return r.a.createElement.apply(null,i)}return r.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"}}]);