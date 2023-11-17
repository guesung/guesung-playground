const func = function () {
  let a = 1;
  function innerFunc() {
    console.log(a);
  }
  return innerFunc;
};

const innerFunc = func();
innerFunc();
