module.exports = function check(str, bracketsConfig) {
  // [['(', ')'], ['{', '}']]
  const OPEN_BRACKETS = [];

  for (let i = 0; i < bracketsConfig.length; i++) {
    OPEN_BRACKETS.push(bracketsConfig[i][0]);
  }

  const BRACKETS_PAIR = bracketsConfig.reduce((obj, bracketArr) => {
    obj[bracketArr[1]] = bracketArr[0];
    return obj;
  }, {});

  console.log(BRACKETS_PAIR);

  const stack = [];

  for (let i = 0; i < str.length; i++) {
    let currentChar = str[i]; // '(', ')'

    if (OPEN_BRACKETS.includes(currentChar)) {
      stack.push(currentChar);
    } else {
      if (stack.length === 0) {
        return false;
      }

      let lastChar = stack[stack.length - 1];

      if (BRACKETS_PAIR[currentChar] === lastChar) {
        stack.pop();
      } else {
        return false;
      }
    }
  }
  return stack.length === 0;
};
