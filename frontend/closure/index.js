function outerFunction() {
  var a = 1;
  function innerFunction() {
    console.log(a);
  }
  return innerFunction;
}

const innerFunction = outerFunction();
innerFunction();
// outerFunction은 a와 innerFunction을 선언하고 종료되었다.
// 이 때, outerFunction은 비록 종료되었지만, innerFunction을 실행할 때 a의 값인 1에 접근할 수 있다.
// 왜냐하면, innerFunction함수가 선언된 렉시컬 환경을 기억하고 있기 때문이다.

function Counter() {
  var counter = 0;
  return {
    increase: function () {
      return ++counter;
    },
    decrease: function () {
      return --counter;
    },
    counter: function () {
      console.log("couter에 접근!");
      return counter;
    },
  };
}

var c = Counter();

console.log(c.increase());
console.log(c.increase());
console.log(c.increase());
console.log(c.decrease());
console.log(c.counter());
