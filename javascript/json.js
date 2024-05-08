// JSON
// JavaScript Object Notation

// 1. Objesct to JSON
// stringify(obj)
let json = JSON.stringify(true);
console.log(json);

// stringify 라는 이름의 함수가 두개 있고
// 전달되는 매개변수가 약간 다른데, 이런 걸 오버로딩(Overloading) 이라 함

json = JSON.stringify(['apple','banana']);
console.log(json);

const rabbit = {
  name: 'jenny',
  color: 'white',
  size: null,
  birthDate: new Date(),
  // symbole: Symbol("id"), << 포함되지 않음
  jump: () => {
    console.log(`${this.name} can jump!`)
  },
};

json = JSON.stringify(rabbit);
console.log(json);

// 해당하는 프로퍼티만 json 이 된다
json = JSON.stringify(rabbit, ['name']);
console.log(json);
console.log('---');

json = JSON.stringify(rabbit, (key, value) => {
  console.log(`key: ${key} , value: ${value}`)
  return value;
});
console.log(json);



// 2. JSON to Object
// parse(json)


