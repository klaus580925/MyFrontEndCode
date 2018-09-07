function Person(name, age) {
	this.name = name;
  this.age = age;
}

Person.prototype.toString = function() {
	return '[' + this.name + ', ' + this.age + ']';
};

var p1 = new Person('Klaus', 12);
console.log(p1.toString());
console.log(p1 instanceof Person);
console.log(Person.prototype === Object.getPrototypeOf(p1));

// -------------------------------------------------------------

function Some() {}
console.log(Some.prototype.data);			// undefined
console.log(Some.prototype.constructor);	// Function: Some
Some.prototype.data = 10;

var s = new Some();
console.log(s.data);

s.data = 20;
console.log(s.data);
console.log(Some.prototype.data);

Object.prototype.xyz = 15;
console.log(s.xyz);
console.log(Object.getPrototypeOf(s) === Some.prototype);	// true
console.log(Object.getPrototypeOf(s) === Object.prototype);	// false

// -------------------------------------------------------------

// Object.create part 1 start
var arrayLike = Object.create(Array.prototype, {
	'0' : { value : 10 },
	'1' : { value : 20 },
	'2' : { value : 30 },
	length : { value : 3 }
});

// The map() method creates a new array with the results of calling a provided function on every element in the calling array.
arrayLike
	.map(function(element){ return element * 10 })
	.forEach(function(element){ console.log(element) });

// Object.create part 2 start
function Person(name, age) {
	this.name = name;
  this.age = age;
}

Person.prototype.toString = function() {
	return '[' + this.name + ', ' + this.age + ']';
};

var p2 = Object.create(Person.prototype);
Person.call(p2, 'Tom', 21);
console.log(p2.toString);
console.log(p2 instanceof Person);