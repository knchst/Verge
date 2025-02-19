
import Foundation

import XCTest
@testable import VergeStore

/**
 Store's state contains a huge dictionary.
 This test-case tests to commit mutations:
 1. Mutates property beside of huge dictionary.
 2. Mutates a huge dictionary.
 It compares that performance.
 It would be good if the first 1 test-case is fast without unaffected from a huge dictionary.
 */
class PerformanceTests: XCTestCase {

  func testMutationOnAnotherPropertyWithHugeDictionary() {

    let store = DemoStore()
    store.setDictionaryLargeItems()

    measure {
      store.increment()
    }

  }

  func testMutationOnAnotherProperty() {

    let store = DemoStore()

    measure {
      store.increment()
    }

  }

  func testInsertItemToLargeItems() {

    let store = DemoStore()
    store.setDictionaryLargeItems()

    measure {
      store.insertDictionaryLargeItems()
    }

  }
}
