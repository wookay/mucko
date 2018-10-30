// muck test_primitives.js

var muck = require("../index.js")
var Test = muck.Test
var string = muck.string


Test.test_undefined = function() {
  assert_equal(undefined, undefined)
}

Test.test_number = function() {
  assert_equal(3, 1+2)
  assert_equal(3.14, 3.14)
}

Test.test_string = function() {
  assert_equal("abc", "a" + "b" + "c")
  assert_equal("abc", string("a", "b", "c"))
  assert_equal(3, "abc".length)
}

Test.test_array = function() {
  assert_equal([], [])
  assert_equal([1,2,3], [1,2,3])
  assert_equal(3, [1,2,3].length)
}

Test.test_hash = function() {
  assert_equal({}, {})
  assert_equal({a:2}, {a:2})
}

Test.test_function = function() {
  var f = function() { }
  assert_equal(f, f)
}