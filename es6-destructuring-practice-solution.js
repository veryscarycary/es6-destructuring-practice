// spread operator

// rest parameters

// variable destructuring

// array destructuring

let [a, b] = [10, 20];

console.log(a);
console.log(b);

let c, d, rest;

[c, d, ...rest] = [10, 20, 30, 40, 50];

console.log(c);
console.log(d);
console.log(rest);


// object / import destructuring

var o = {p: 42, q: true};
var {p, q} = o;

console.log(p); // 42
console.log(q); // true

let x = [1, 2, 3, 4, 5];
let [y, z] = x;
console.log(y); // 1
console.log(z); // 2


var a = 1;
var b = 3;

[a, b] = [b, a];
console.log(a); // 3
console.log(b); // 1

function f() {
  return [1, 2, 3];
}

var [a, , b] = f();
console.log(a); // 1
console.log(b); // 3

[,,] = f();

var [a, ...b,] = [1, 2, 3];
// SyntaxError: rest element may not have a trailing comma


const testies = (a, b, ...rest) => {
  console.log(a)
  console.log(b)
  console.log(rest)
  // console.log(props)
}

testies('pie', 2, 'cat', [true, false, 'read'], ['test'], [2,3,4,5]);

//pie
//2
//[cat,true,false,read,test,2,3,4,5]


// A variable can be assigned its value with destructuring separate from its declaration.
// but it needs to have parenthesis to denote it as an expression. Without parenthesis or
// a declaration, the left-hand side {} is considered a block and not an object literal.

var a, b;

({a, b} = {a: 1, b: 2});
({ c, d } = { c: 50, d: 100 });

console.log(c); // 10
console.log(d); // 20

// { c, d } = { a: 10, b: 20 };

// Assigning new variable names when unpacking

var o = {p: 42, q: true};
var {p: foo, q: bar} = o;

console.log(foo); // 42
console.log(bar); // true

// A variable can be assigned a default, in the case that the value unpacked from the object is undefined.

var {a = 10, b = 5} = {a: 3};

console.log(a); // 3
console.log(b); // 5

let a, b;

[a=5, b=7] = [1];
console.log(a); // 1
console.log(b); // 7

// Assigning to new variables names AND providing default values
// A property can be both 1) unpacked from an object and assigned to a variable with a different name and 2) assigned a default value in case the unpacked value is undefined.

var {a: aa = 10, b: bb = 5} = {a: 3};

console.log(aa); // 3
console.log(bb); // 5


function drawES2015Chart({size = 'big', cords = {x: 0, y: 0}, radius = 25} = {}) {
  console.log(size, cords, radius);
  // do some chart drawing
}

drawES2015Chart({
  cords: {x: 18, y: 30},
  radius: 30
});

/*
In the function signature for drawES2015Chart above, the destructured left-hand
side is assigned to an empty object literal on the right-hand side:
{size = 'big', cords = {x: 0, y: 0}, radius = 25} = {}. You could have
also written the function without the right-hand side assignment. However,
if you leave out the right-hand side assignment, the function will look for
at least one argument to be supplied when invoked, whereas in its current
form, you can simply call drawES2015Chart() without supplying any
parameters. The current design is useful if you want to be able to call
the function without supplying any parameters, the other can be useful
when you want to ensure an object is passed to the function.
*/


// Nested object and array destructuring

var metadata = {
    title: 'Scratchpad',
    translations: [
       {
        locale: 'de',
        localization_tags: [],
        last_edit: '2014-04-14T08:43:37',
        url: '/de/docs/Tools/Scratchpad',
        title: 'JavaScript-Umgebung'
       }
    ],
    url: '/en-US/docs/Tools/Scratchpad'
};

var {title: englishTitle, translations: [{title: localeTitle}]} = metadata;

console.log(englishTitle); // "Scratchpad"
console.log(localeTitle);  // "JavaScript-Umgebung"

// For of iteration and destructuring

var people = [
  {
    name: 'Mike Smith',
    family: {
      mother: 'Jane Smith',
      father: 'Harry Smith',
      sister: 'Samantha Smith'
    },
    age: 35
  },
  {
    name: 'Tom Jones',
    family: {
      mother: 'Norah Jones',
      father: 'Richard Jones',
      brother: 'Howard Jones'
    },
    age: 25
  }
];

for (var {name: n, family: {father: f}} of people) {
  console.log('Name: ' + n + ', Father: ' + f);
}

// "Name: Mike Smith, Father: Harry Smith"
// "Name: Tom Jones, Father: Richard Jones"

// Unpacking fields from objects passed as function parameter
function userId({id}) {
  return id;
}

function whois({displayName, fullName: {firstName: name}}) {
  console.log(displayName + ' is ' + name);
}

var user = {
  id: 42,
  displayName: 'jdoe',
  fullName: {
      firstName: 'John',
      lastName: 'Doe'
  }
};

console.log('userId: ' + userId(user)); // "userId: 42"
whois(user); // "jdoe is John"

// Invalid JavaScript identifier as a property nameSection
// Destructuring can be used with property names that are not valid JavaScript
// identifiers by providing an alternative identifer that is valid.

const foo = { 'fizz-buzz': true };
const { 'fizz-buzz': fizzBuzz } = foo;

console.log(fizzBuzz); // "true"
