function closureFunc() {
  let cnt = 1;
  return {
    add: () => {
      cnt++;
    },
    minus: () => {
      cnt--;
    },
    getCnt: () => cnt,
  };
}

const func = closureFunc();

func.add();
func.add();
func.add();

console.log(func.getCnt());
