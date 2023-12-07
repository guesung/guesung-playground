for (var i = 0; i < 5; i++) {
  setTimeout(function () {
    console.log(i);
  }, 100);
}

for (let i = 0; i < 5; i++) {
  setTimeout(function () {
    console.log(i);
  }, 100);
}

for (var i = 0; i < 5; i++) {
  setTimeout(
    (function (sec) {
      return function () {
        console.log(sec);
      };
    })(i),
    100
  );
}
