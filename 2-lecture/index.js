const name = '8';
const num = '42';

console.log(Number(name) + Number(num));

console.log(String(123));
console.log(String(-12.3));
console.log(String(null));
console.log(String(undefined));
console.log(String(true));
console.log(String({name: 'John'}));

console.log(String('' + 123));
console.log(`${123}`);

//Into Boolean
console.log(Boolean(''));
console.log(Boolean('0'));
console.log(Boolean(0));
console.log(Boolean(NaN));
console.log(Boolean({}));
console.log(Boolean({name:'John'}));

//7 false value
console.log(Boolean(''));
console.log(Boolean(0));
console.log(Boolean(-0));
console.log(Boolean(NaN));
console.log(Boolean(false));
console.log(Boolean(null));
console.log(Boolean(undefined));

//Into Number
console.log(Number(null));
console.log(Number(undefined));
console.log(Number(true));
console.log(Number(false));
console.log(Number('3'));
console.log(Number(''));

console.log(Number(''));
console.log(Number(''));

isNaN();
Number.isNaN();

//&&

console.log(true && true);
console.log(false && true);
console.log(true && false);
console.log(false && false);

console.log(true && 'Hello World');
console.log(42 && 'Hello World');

//||
console.log(true || true);
console.log(false || true);
console.log(true || false);
console.log(false || false);

console.log(1 || false);
console.log(false || 1);
console.log(true || 1);

//!
console.log(!42);

//!!
Boolean()

//if


