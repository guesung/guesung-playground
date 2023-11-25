// 1.1 var은 재선언 가능
var a = 5;
var a = 10;
var a = 15;
console.log(a); // 10

// 1.2 let은 재선언 불가능
let b = 5;
// let b = 10;
// let b = 15;
console.log(b); // SyntaxError: Identifier 'b' has already been declared

// 2.1 var은 함수 스코프
var c = 5;
{
  var c = 10;
}
console.log(c); // 10

// 2.2 let은 블록 스코프
let d = 5;
{
  let d = 10;
}
console.log(d); // 5

// 3.1 var은 호이스팅
console.log(e); // undefined
var e = 5;

// 3.2 let은 호이스팅 안됨
// console.log(f); // ReferenceError: Cannot access 'f' before initialization
let f = 5;
