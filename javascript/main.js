// 1. 변수
// number, string, boolean, null, undefined

// let number = 2;
// let num = '2';

// let number2 = number;
// console.log(number);
// console.log(number2);

// number2 = 3;
// console.log(number);
// console.log(number2);

// object
// 값 자체가 아니라 ref...어딘가에 할당되고 그 주소를 레퍼런스라고 함. 
// let obj = {
//   name: 'jane',
//   age: 5,
// };
// console.log(obj.name);

// let obj2 = obj;
// console.log(obj2.name);

// obj.name = 'jay';
// console.log('---');
// console.log(obj.name);
// console.log(obj2.name);

// 2. 함수
// const num = 1;
// const num2 = 2;
// const result = num + num2;
// console.log(result);

// const num3 = 1;
// const num4 = 2;
// const result2 = num3 + num4;
// console.log(result2);

// function add(num1, num2) {
//   return num1 + num2;
// }

// const sum = add(3, 4);
// console.log(sum);

// const doSomething = add;

// const result3 = doSomething(2, 3);
// console.log(result3);
// const result4 = add(2, 3);
// console.log(result4);

// function print(name, age) {
//   console.log('print');
//   console.log(`${name}, ${age}`);
// }

// function divide(num1, num2) {
//   return num1 / num2;
// }

// function surprise(callback) {
//   const result = callback(2, 3); 
//   // add(2, 3)
//   // divide(2, 3)
//   console.log(result);
// }

// surprise(add);
// surprise(divide);


// false : 0, -0, '', null, undefined
// true : -1, 'hello'
// let num; // undefined
// let obj = {
//   name: 'jane'
// }
// if(obj) {
//   console.log(obj.name);
// }

// obj && console.log(obj.name);
  

class Counter {
  constructor(runEveryFiveTimes) {
    this.counter = 0;
    this.callback = runEveryFiveTimes;
  }
  // 클래스에서 함수를 선언할 땐 function이라 안 써도 됨
  increase() {
    this.counter++;
    console.log(this.counter);
    // 1..
    if(this.counter % 5 === 0) {
      // runIf5Times(this.counter);

      this.callback && this.callback(this.counter);
      // if(this.callback) {
      //   this.callback(this.counter);
      // }
    }
  }
}

function printSomthing(num) {
  console.log(`yo! ${num}!`)
}
function alertNum(num) {
  alert(`Wow! ${num}`);
}

// const coolCounter = new Counter(printSomthing);
// const coolCounter = new Counter(alertNum);
// 만약 callback 함수를 전달하지 않는다면?
// -> callback 타입에러 발생 ... undefined
const coolCounter = new Counter();

const printCounter = new Counter(printSomthing);
const alertCounter = new Counter(alertNum);

coolCounter.increase();
coolCounter.increase();
coolCounter.increase();
coolCounter.increase();
coolCounter.increase();

coolCounter.increase();
coolCounter.increase();
coolCounter.increase();
coolCounter.increase();
coolCounter.increase();