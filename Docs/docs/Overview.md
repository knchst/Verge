---
id: Overview
title: Overview
sidebar_label: Overview
---

## Verge supports small start and scaling up

Verge is a state management library for iOS (UIKit / SwiftUI).  
Mostly it's based on Flux architecture.  
Flux architecture is so beautiful and simplified thinking.  
Although, we need to do several tuning to bring it into a real product.  
In fact, Flux needs to consider about computing resources.

Verge contains several ideas to do this from Web technologies such as Redux, Vuex, and Recoil.  
They have very useful techniques to be successful in real-world productions based on the core-concept of Flux.

Verge can be setting it up quickly, and tune performance up when we need it.  
Verge automatically tune-up as possible and shows us what makes performance badly while development from Xcode's documentation.

## At a glance

```swift
struct MyState {
  var text: String = ""
}

enum MyActivity {
  case somethingHappen
}

class MyStore: Store<MyState, MyActivity> {

  func myAction() {
    commit {
      $0.name = "Hello, Verge"
    }
  }
}
```

### SwiftUI

```swift
struct MyView: View {

  let store: MyStore

  var body: some View {
    UseState(store) { state in
      Text(state.name)
      Button(action: {
        self.store.myAction()
      }) {
        Text("Action")
      }
    }
  }
}
```

### UIKit

```swift
class ViewController: UIViewController {

  ...

  let store: MyStore

  ...

  func updateUI(by state: Changes<MyStore.State>) {

    changes.ifChanged(\.name) { (name) in
      nameLabel.text = name
    }

  }
}
```

## Prepare moving to SwiftUI from now with Verge

SwiftUI's concept is similar to the concept of React, Vue, and Elm.  
Therefore, the concept of state management will become to be similar as well.

That is Redux or Vuex and more.

Now, almost of iOS Applications are developed on top of UIKit.  
And We can't say SwiftUI is ready for top production.  
However, it would change.

It's better to use the state management that fits SwiftUI from now. It's not only for that, current UIKit based applications can get more productivity as well.

## Questions?

We accept your questions about usage of Verge and something else in GitHub Issues.

日本語での質問も大丈夫です
