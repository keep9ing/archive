'use strict';

// Array 🍏🍐 🍊 🍋🍉 🍇 🍓 🫐🥭 🍍 🥥 🥝 🍅 🍆 🥑🍒

// 1. Declaration
const arr1 = new Array();
const arr2 = [1, 2];

// Index Position
const fruits = ['🍎', '🍌',];
console.log(fruits);
console.log(fruits.length);
console.log(fruits[0]);
console.log(fruits[1]);
console.log(fruits[2]);
// 배열의 마지막 아이템을 찾을 때
console.log(fruits[fruits.length - 1]);

// console.clear();
// 3. Looping over an array
// print all fruits
// a. for
for (let i = 0; i < fruits.length; i++) {
  console.log(fruits[i]);
}

// b. for of
for (let fruit of fruits) {
  console.log(fruit);
}
console.log('---');
// c. forEach
fruits.forEach(function(fruit, index) {
  console.log(fruit, index);
});
console.log('---간략히');
fruits.forEach((fruit) => console.log(fruit));

// 4. Addtion, delation, copy 
// push: add an item to 
fruits.push('🍉','🍇');
console.log(fruits);

// pop: remove an item from the end
fruits.pop();
console.log(fruits);

// unshift: add an item to the beginning
fruits.unshift('1','2');
console.log(fruits);

// shift: remove an item from the beginning
fruits.shift();
console.log(fruits);

// note!! shift, unshift are slower than pop, push
// splice: remove an item by index position
fruits.push('','','');
console.log(fruits);
fruits.splice(1, 1);
console.log(fruits);
fruits.splice(1, 1, '🥑', '🍒');
console.log(fruits);

// combine two arrays
const fruits2 = ['🍓','🍍'];
const newFruits = fruits.concat(fruits2);
console.log(newFruits);

// 5. Searching
// find the index
console.clear();
console.log(fruits);
console.log(fruits.indexOf('2'));
console.log(fruits.includes('2'));
console.log(fruits.lastIndexOf('2'));