var o = ['a', 'b', 'c'];
console.log(o.constructor === Array);	// true
console.log(o instanceof Array);		// true
var p = Object.getPrototypeOf(o);		// get o.__proto__
console.log(o);
console.log(p);

// -------------------------------------------------------------

function Foo(name) {
	this.name = name;
}

var a = new Foo('a');
var b = new Foo('b');
b.say = function() {
	console.log('Hi from ' + this.whoAmI());
}

console.log(a.__proto__ === Foo.prototype);	// true
console.log(a.__proto__ === b.__proto__);	// true

// -------------------------------------------------------------

/**
 *	Cat.prototype = new Animal();
 *	// It will properly follow the prototype chain through the inheritance hierarchy.
 *	Cat.prototype = Animal.prototype
 *	// Any runtime changes to the Cat prototype would also affect the Animal.
 */

function Foo(y) {
	this.y = y;
}

Foo.prototype.x = 10;
Foo.prototype.calculate = function(z) {
	return this.x + this.y + z;
};

let o = new Foo(2);
console.log(o);
console.log(o.calculate(30));	// 42
console.log(
	o.__proto__ === Foo.prototype,						// true
 	o.__proto__.calculate === Foo.prototype.calculate,	// true
 	o.__proto__.calculate === o.calculate,				// true
 	Foo === o.constructor,								// true
 	Foo === Foo.prototype.constructor,					// true
 	o.prototype === undefined							// true
);

// -------------------------------------------------------------

/**
 * use strict
 */

class Polygon {
	constructor(heigth, width) {
		this.heigth = heigth;
		this.width = width;
	}
}

class Square extends Polygon {
	constructor(sideLength) {
		super(sideLength, sideLength);
	}
	get area() {
		return this.heigth * this.width;
	}
	set sideLength(newLength) {
		this.heigth = newLength;
		this.width = newLength;
	}
}

var square = new Square(2);
console.log(square.)
