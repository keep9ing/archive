// 1. String concatenation
console.log('my' + 'cat');
console.log('1' + 2);
console.log(`string literals:
 ...
 1 + 2 = ${1 + 2}`);

 console.log("jane's \n\tbook");

 // 2. Numeric oprators
 console.log(1 + 1); // add
 console.log(1 - 1); // subtract
 console.log(1 / 1); // devide
 console.log(1 * 1); // multiply
 console.log(5 % 2); // remainder
 console.log(2 ** 3); // exponentiation

 // 3. Increment ++ and decrement -- operatrors
 let counter = 2;
 const preIncrement = ++counter;
 // counter = counter + 1;
 // preIncrement = counter;
 console.log(`preIncrement: ${preIncrement}, counter: ${counter}`);
 
 const postIncrement = counter++;
 // postIncrement = counter;
 // counter = counter + 1;
 console.log(`postIncrement: ${preIncrement}, counter: ${counter}`);


 const preDecrement = ++counter;
 // counter = counter + 1;
 // preDecrement = counter;
 console.log(`preDecrement: ${preDecrement}, counter: ${counter}`);
 
 const postDecrement = counter--;
 // postDecrement = counter;
 // counter = counter + 1;
 console.log(`postDecrement: ${postDecrement}, counter: ${counter}`);

 // 4. Assignment operators(할당 연산자)
 let x = 3;
 let y = 6;
 x += y; // x = x + y;
 x -= y;
 x *= y;
 x /= y;

 // 5. Comparison operators
 console.log(10 < 6); // less than
 console.log(10 <= 6); // less than or equal
 console.log(10 > 6); // greater than
 console.log(10 >= 6); // greater than or equal

 // 6. Logical operators : || (or), && (and), ! (not)
 const value1 = false;
 const value2 = 4 < 2; 

 // || (or), finds the first truthy value
 // value1 이 true 이면 true 를 반환하고 끝남.. expression이나 연산이 많이 필요한 함수는 마지막에 호출할 것
 console.log(`or : ${value1 || value2 || check()}`);

 // && (and), finds the first falsy value
console.log(`and: ${value1 && value2 && check()}`);

// often uset to compress long if-statement
// nullableObject && nullableObject.something
// if (nullableObject != null) {
//   nullableObject.somthing;
// }

 function check() {
  for (let i = 0; i < 10; i++) {
    // wasting time
    console.log('omg');
  }
  return true;
 }

 // ! (not)
 console.log(!value1);

 // 7. Equality
 const stringFive = '5';
 const numberFive = 5;

 // == losse equality, with type conversion
 console.log(stringFive == numberFive);
 console.log(stringFive != numberFive);

// === strict equality, no type conversion
console.log(stringFive === numberFive);
console.log(stringFive !== numberFive);
console.log('----')

// object equality by reference
const jane1 = { name: 'jane' };
const jane2 = { name: 'jane' };
const jane3 = jane1;
console.log(jane1 == jane2);
console.log(jane1 === jane2);
console.log(jane1 === jane3);

// equality - puzzler
console.log('----')
console.log(0 == false); // true
console.log(0 === false); // false
console.log('' == false); // true
console.log('' === false); // false
console.log(null == undefined); // true
console.log(null === undefined); // false

// 8. Conditional operators : if
// if, else if, else
const name = 'coder';
if(name === 'jane') {
  console.log('Welcome, jame!');
} else if (name === 'coder') {
  console.log('You are amazing coder');
} else {
  console.log('unkwnon');
}

// 9. Ternary operator : ?
// condition ? value1 : value2;
console.log(name === 'jane' ? 'yes' : 'no');

// 10. Switch statement
// use for multiple if checks
// use for enum-like value check
// user for multiple type checks in TS
const browser = 'IE';
switch (browser) {
  case 'IE':
    console.log('go away');
    break;
  case 'Chrome':
  case 'Firefox':
    console.log('love you');
    break;
  default:
    console.log('same all!');
    break;
}

// 11. Loops
// while loop, while the conditon in truethy,
// body code is executed.
let i = 3;
while (i > 0) {
  console.log(`while: ${i}`);
  i--;
}

// do while loop, body code is executed first.
// then check the condition.
do {
  console.log(`do while: ${i}`);
  i--;
} while (i > 0);

// for loop, for(begin; condition; step)
// 기존에 존재하는 변수에 값을 할당할 수 있
for (i = 3; i > 0; i--) {
  console.log(`for : ${i}`);
}

for (let i = 3; i > 0; i = 1 - 2 ) {
  // inline variable declaration ..let 지역변수 i 를 선언해서 사용하기도
  console.log(`inline variable for :${i}`);
}

// nested loops
for (let i = 0; i < 10; i++) {
  for (let j =0; j < 10; j++) {
    console.log(`i: ${i}, j: ${j}`);
  }
}

// break, continue
// Q1. iterate from 0 to 10 and print only even numbers (use continue)
for (let i = 0; i < 11; i++) {
  if (i % 2 == 0) {
    console.log(`even number ${i}`)
  } else continue;
}

for (let i = 0; i < 11; i++) {
  if (i % 2 !== 0) {
    continue;
  } 
  console.log(`even number ${i}`)
}

// Q2. interate from 0 to 10 and print numbers until reaching 8 (use break)

for (let i = 0; i <= 10; i++) {
  if (i > 4) break;
  console.log(`under 4 : ${i}`)
}
 