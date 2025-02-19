---
id: changes
title: Changes object - helps detecting differences and reduces copy-cosuming
sidebar_label: Changes object
---

## Update UI from State

In subscribing the state and binding UI, it's most important to reduce the meaningless time to update UI.

What things are the meaningless? that is the update UI which contains no updates.

Basically, we can do this like followings

```swift
func updateUI(newState: State) {
  if self.label.text != newState.name {
    self.label.text = newState.name
  }
}
```

Although, this approach make the code a little bit complicated by increasing the code to update UI.

## Update UI when only the state changed

Store provides `Changes<State>` object.
It provides some functions to get the value from state with condition.

```swift
let store: Store<MyState, Never>

let changes: Changes<MyState> = store.changes

changes.ifChanged(\.name) { name in
  // called only name changed
}
```

## Subscribing the state

```swift
class ViewController: UIViewController {

  var subscriptions = Set<UntilDeinitCancellable>()

  let store: MyStore<MyState, MyActivity>

  override func viewDidLoad() {

    super.viewDidLoad()

    store.sinkChanges { [weak self] (changes) in
      // it will be called on the thread which committed
      self?.update(changes: changes)
    }
    .store(in: &subscriptions)
  }

  private func update(changes: Changes<MyState> {
    changes.ifChanged(\.name) { name in
      // called only name changed
    }
    ...
  }

}
```

## Make Changes object the first-time value

If you have a `Changes` from anywhere, it might have previous value,  
Using `ifChanged` might return false because compared with the previous one.  
You can create the Changed object that always returns true from `ifChanged` with followings:

```swift
let changes: Changes<State>

let firstTimeChanges: Changes<State> = changes.droppedPrevious()
```
