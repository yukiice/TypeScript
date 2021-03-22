var obj = {
    prop: function() {},
    foo: 'bar'
  };
  
  // 可以添加新的属性
  // 可以更改或删除现有的属性
  obj.foo = 'baz';
  obj.lumpy = 'woof';
  delete obj.prop;
  
  var o = Object.seal(obj);
  
  o === obj; // true
  Object.isSealed(obj); // === true
  
  // 仍然可以修改密封对象的属性值
  obj.foo = 'quux';
  
  
  // 但是你不能将属性重新定义成为访问器属性
  // 反之亦然
  Object.defineProperty(obj, 'foo', {
    get: function() { return 'g'; }
  }); // throws a TypeError
  
  // 除了属性值以外的任何变化，都会失败.
  obj.quaxxor = 'the friendly duck';
  // 添加属性将会失败
  delete obj.foo;
  // 删除属性将会失败
  
  // 在严格模式下，这样的尝试将会抛出错误
  function fail() {
    'use strict';
    delete obj.foo; // throws a TypeError
    obj.sparky = 'arf'; // throws a TypeError
  }
  fail();
  
  // 通过Object.defineProperty添加属性将会报错
  Object.defineProperty(obj, 'ohai', {
    value: 17
  }); // throws a TypeError
  Object.defineProperty(obj, 'foo', {
    value: 'eit'
  }); // 通过Object.defineProperty修改属性值

  export {}