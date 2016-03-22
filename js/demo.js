'use strict';
/*let f;
{
  let a = 'secret';
  f = function () {
    console.log(a); 
  }
}
f()*/
/*var a = 'string';
console.log(window.a);
let b = 1;
console.log(window.b);*/

//Destructuring
/*let [a, [b], d] = [1, [2, 3], 4];
console.log(a);
console.log(b);
console.log(d);*/

/*let [x = 1, y = x] = [2];
console.log(x);
console.log(y);*/

//string unicode
/*var str1 = '\u20BB7';
console.log(str1);
let str2 = '\u{20BB7}';
console.log(str2);

function is32Bit(c) {
  console.log(c.codePointAt(0) > 0xFFFF);
}

is32Bit('𠮷');
is32Bit('a');*/

/*for (let codePoint of 'hello') {
  console.log(codePoint);
}*/

/*console.log('abc'.charAt(0));
console.log('𠮷'.charAt(0));
console.log('abc'.at(0));
console.log('𠮷'.at(0));*/

/*function Foo() {
    getName = function () { alert (1); };
    console.log(this);
    return this;
}
Foo.getName = function () { alert (2);};
Foo.prototype.getName = function () { alert (3);};
var getName = function () { alert (4);};
function getName() { alert (5);}

var obj = {0:'first', 1:'second'};
console.log(Array.prototype.slice.call(obj))*/

/*class Point {

  constructor(x, y) {
    this.x = x;
    this.y = y;
  }

  toString() {
    return '('+this.x+', '+this.y+')';
  }

}

var point = new Point(2, 3);

console.log(point.toString()); // (2, 3)

console.log(point.hasOwnProperty('x')); // true
console.log(point.hasOwnProperty('y')); // true
console.log(point.hasOwnProperty('toString')); // false
console.log(point.__proto__.hasOwnProperty('toString')); // true*/

/*let person = new class {
  constructor(name) {
    this.name = name;
  }

  sayName() {
    console.log(this.name);
  }
}('Squall');

person.sayName();*/

/*class Point {

}

class ColorPoint extends Point {
  constructor() {
  	//super();
  }
}

let cp = new ColorPoint();*/

/*function es5Array() {
  Array.apply(this, arguments);
}

es5Array.prototype = Object.create(Array.prototype, {
  constructor: {
    value: es5Array,
    writable: true,
    configurable: true,
    enumerable: true
  }
});

var colors = new es5Array();
colors[0] = "red";
console.log(colors.length)  // 0

colors.length = 0;
console.log(colors[0])  // "red"

class es6Array extends Array {
  constructor(...args) {
    super(...args);
  }
}

var arr = new es6Array();
arr[0] = 12;
console.log(arr.length) // 1

arr.length = 0;
console.log(arr[0]) // undefined*/

/*class VersionedArray extends Array {
  constructor() {
    super();
    this.history = [[]];
  }
  commit() {
    this.history.push(this.slice());
  }
  revert() {
    this.splice(0, this.length, ...this.history[this.history.length - 1]);
  }
}

var x = new VersionedArray();

x.push(1);
x.push(2);
console.log(x) // [1, 2]
console.log(x.history) // [[]]

x.commit();
console.log(x.history) // [[], [1, 2]]
x.push(3);
console.log(x) // [1, 2, 3]

x.revert();
console.log(x) // [1, 2]*/

/*class CustomHTMLElement {
  constructor(element) {
    this.element = element;
  }

  get html() {
    return this.element.innerHTML;
  }

  set html(value) {
    this.element.innerHTML = value;
  }
}

var descriptor = Object.getOwnPropertyDescriptor(
  CustomHTMLElement.prototype, "html");
console.log("get" in descriptor)  // true
console.log("set" in descriptor) // true*/

/*class Foo {
  constructor(...args) {
    this.args = args;
  }
  * [Symbol.iterator]() {
    for (let arg of this.args) {
      yield arg;
    }
  }
}

for (let x of new Foo('hello', 'world')) {
  console.log(x);
}
*/

/*class Foo {
  static classMethod() {
    console.log('hello');
  }
}

Foo.classMethod() // 'hello'

var foo = new Foo();
foo.classMethod()
// TypeError: undefined is not a function*/

/*class MyClass {
  myProp = 42;

  constructor() {
    console.log(this.myProp); // 42
  }
}*/

/*// 老写法
class Foo {
}
Foo.prop = 1;

// 新写法
class Foo {
  static prop = 1;
}*/

/*function Person(name) {
  if (new.target === Person) {
    this.name = name;
  } else {
    throw new Error('必须使用new生成实例');
  }
}

var person = new Person('张三'); // 正确
var notAPerson = Person.call(person, '张三');  // 报错*/

class Shape {
  constructor() {
    if (new.target === Shape) {
      throw new Error('本类不能实例化');
    }
  }
}

class Rectangle extends Shape {
  constructor(length, width) {
    super();
    // ...
  }
}

var x = new Shape();  // 报错
var y = new Rectangle(3, 4);  // 正确