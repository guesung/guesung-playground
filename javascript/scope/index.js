// 1. 렉시컬 스코프 : 어디서 호출했는지가 아니라 어디에 선언되었는지에 따라 상위 스코프를 결정한다.
var x = 1;

function foo() {
  var x = 10;
  bar();
}

function bar() {
  console.log(x);
}

foo(); // 1
bar(); // 1

// 2. 암묵적 전역 : var 키워드 없이 변수를 선언하면 전역 변수가 된다.

var y = 10; // 전역 변수

function boo() {
  // 선언하지 않은 식별자
  z = 20;
  console.log(y + z);
}

boo(); // 30
