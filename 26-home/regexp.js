// function isPattern(userInput) { // 'xxx-xxx-xxxx'
//   if (typeof userInput !== 'string' || userInput.length !== 12) {
//     return false;
//   }
//   for (let i = 0; i < userInput.length; i++) {
//     let c = userInput[i];
//     switch (i) {
//       case 0:
//       case 1:
//       case 2:
//       case 4:
//       case 5:
//       case 6:
//       case 8:
//       case 9:
//       case 10:
//       case 11:
//         if (c < 0 || c > 9) return false;
//         break;
//       case 3:
//       case 7:
//         if (c !== '-') return false;
//         break;
//     }
//   }
//   return true;
// }

// function isPattern(userInput) {
//   return /^\d{3}-\d{3}-\d{4}$/.test(userInput);
// }

// console.log(isPattern('333-444-5555')) // true
// console.log(isPattern('aaa-444-5555')) // false

// const str = 'Hello World!';
//
// const re = RegExp(`Hello`);
// const re2 = /World/;
//
// console.log( re2.test(str) ) // true

// const str = 'abc AA abc bb 889 abc';
// const str2 = 'ABC AA abc bb 889';
// const str3 = 'ABCx889';

// ^
// $

// const re = /abc/;
// const re = /^abc/;
// const re = /^ABC/;
// const re = /889$/;
// const re = /^ABC889$/;
// const re = /^ABC...........889$/;
// const re = /^ABC.+889$/;
// const re = /^ABC.*889$/;

// +, *, ?, {}

// console.log( re.test(str3) ) // false

// console.log(/^ABC.+889$/.test('ABC889')) // false
// console.log(/^ABC.+889$/.test('ABCa889')) // true
// console.log(/^ABC.+889$/.test('ABCaaaaaaaaaaaabbbbccccdddddddd889')) // true
// console.log(/^ABC.*889$/.test('ABC889'))
// console.log(/^ABC.*889$/.test('ABC-qweqwesdfsdfsdf-889'))
// console.log(/^ABC.?889$/.test('ABC889')) // true
// console.log(/^ABC.?889$/.test('ABC#889')) // true
// console.log(/^ABC.?889$/.test('ABCj889')) // true
// console.log(/^ABC.?889$/.test('ABCxx889')) // false
// console.log(/^ABC.{3}889$/.test('ABCx889')) // false
// console.log(/^ABC.{3}889$/.test('ABCxxx889')) // true
// console.log(/^ABC.{3,5}889$/.test('ABCxxxx889')) // true
// console.log(/^ABC.{3,5}889$/.test('ABCabcde889')) // true
// console.log(/^ABC.{3,5}889$/.test('ABCabcdef889')) // false
// console.log(/^ABC.{5,}889$/.test('ABCabcdef889')) // true // + on steroids
// console.log(/^ABC.{,5}889$/.test('ABCabcdef889')) // false
// console.log(/^ABC.{0,5}889$/.test('ABCabcd889')) // true

// []

// console.log(/^ABC-[0-9]{0,5}-889$/.test('ABC-12345-889')) // true
// console.log(/^ABC-[0-9]{0,5}-889$/.test('ABC-123456-889')) // true
// console.log(/^ABC-[a-z]+-889$/.test('ABC-hello-889')) // true
// console.log(/^ABC-[a-z]+-889$/.test('ABC-Hello-889')) // false
// console.log(/^ABC-[a-zA-Z]+-889$/.test('ABC-Hello-889')) // true
// console.log(/^ABC-[a-zA-Z0-9]+-889$/.test('ABC-567Hello56745-889')) // true
// console.log(/^ABC-[a-zA-Z0-9]+-889$/.test('ABC-567Hello567.45-889')) // false
// console.log(/^ABC-[a-zA-Z0-9.,@#\[\] ]+-889$/.test('ABC-567He[llo,5]67.45-889')) // true
// console.log(/^hello$/.test('HELLO')) // false

// i, g

// console.log(/^hello$/i.test('HELLO')) // true
// console.log(/^hello$/i.test('HELLO')) // true
// console.log('qwehello world hello'.match(/hello/))
// console.log('hello world hello'.match(/hello/g))

// \d \s \w
// console.log(/^ABC-[a-zA-Z\d]+-889$/.test('ABC-567Hello56745-889')) // true
// console.log(/^ABC-[0-9]+-889$/.test('ABC-45646-889')) // true
// console.log(/^ABC-\d+-889$/.test('ABC-45646-889')) // true
// console.log(/^ABC-[ ]+-889$/.test('ABC-    -889')) // true
// console.log(/^ABC-\s+-889$/.test('ABC-    -889')) // true
// console.log(/^ABC-\w+-889$/.test('ABC-aaaAAA345__-889')) // true

// \D \S \W
// console.log(/^ABC-\D+-889$/.test('ABC-sdaf^%$^-889')) // true
// console.log(/^ABC-\D+-889$/.test('ABC-3465456-889')) // false

// console.log(/^ABC-[^a-zA-Z0-9]+-889$/.test('ABC-%#$#$%*&-889')) // true
// console.log(/^ABC-[^a-zA-Z0-9]+-889$/.test('ABC-345-889')) // fasle

// ()

// console.log('Phone number: 234-567-8989'.match(/\d{3}-\d{3}-\d{4}/))
// console.log('Phone number: 234-567-8989'.match(/(\d{3})-(\d{3})-(\d{4})/))
// console.log(/^aaa\s(apple)|(orange)\sbbb$/.test('aaa apple bbb')) // true
// console.log(/^aaa\s(apple)|(orange)\sbbb$/.test('aaa orange bbb')) // true
// console.log(/^aaa\s(apple)|(orange)\sbbb$/.test('aaa plum bbb')) // false
console.log(/^aaa\s(apple){2}|(orange)\sbbb$/.test('aaa apple bbb')) // false
console.log(/^aaa\s(apple){2}|(orange)\sbbb$/.test('aaa appleapple bbb')) // true