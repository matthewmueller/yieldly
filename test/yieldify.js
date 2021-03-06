/**
 * Module Dependencies
 */

var assert = require('assert');
var yieldly = require('..');

/**
 * Tests
 */

describe('yieldly', function() {

  it('should pass through async calls', function(done) {
    var yieldable = yieldly(function(a, b, fn) {
      assert('d' == this.d);
      assert('a' == a);
      assert('b' == b);
      fn('c');
    });

    yieldable.call({ d: 'd' }, 'a', 'b', function(c) {
      assert('c' == c);
      done();
    })
  })

  it('should allow generators', function *() {
    var yieldable = yieldly(function(a, b, fn) {
      assert('d' == this.d);
      assert('a' == a);
      assert('b' == b);
      fn(null, 'c');
    });

    var c = yield yieldable.call({ d: 'd' }, 'a', 'b');
    assert('c' == c);
  })
})
