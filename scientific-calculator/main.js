let calculator_buttons = [
  {
    name: "rad",
    symbol: "Rad",
    formula: false,
    type: "key"
  },
  {
    name: "deg",
    symbol: "Deg",
    formula: false,
    type: "key"
  },
  {
    name: "square-root",
    symbol: "√",
    formula: "Math.sqrt",
    type: "math_function"
  },
  {
    name: "square",
    symbol: "x²",
    formula: POWER,
    type: "math_function"
  },
  {
    name: "open-parenthesis",
    symbol: "(",
    formula: "(",
    type: "number"
  },
  {
    name: "close-parenthesis",
    symbol: ")",
    formula: ")",
    type: "number"
  },
  {
    name: "clear",
    symbol: "C",
    formula: false,
    type: "key"
  },
  {
    name: "delete",
    symbol: "⌫",
    formula: false,
    type: "key"
  },
  {
    name: "pi",
    symbol: "π",
    formula: "Math.PI",
    type: "number"
  },
  {
    name: "cos",
    symbol: "cos",
    formula: "trigo(Math.cos,",
    type: "trigo_function"
  }, {
    name: "sin",
    symbol: "sin",
    formula: "trigo(Math.sin,",
    type: "trigo_function"
  }, {
    name: "tan",
    symbol: "tan",
    formula: "trigo(Math.tan,",
    type: "trigo_function"
  }, {
    name: "7",
    symbol: 7,
    formula: 7,
    type: "number"
  }, {
    name: "8",
    symbol: 8,
    formula: 8,
    type: "number"
  }, {
    name: "9",
    symbol: 9,
    formula: 9,
    type: "number"
  },
  {
    name: "division",
    symbol: "÷",
    formula: "/",
    type: "operator"
  },
  {
    name: "e",
    symbol: "e",
    formula: "Math.E",
    type: "number"
  },
  {
    name: "acos",
    symbol: "acos",
    formula: "inv_trigo(Math.acos,",
    type: "trigo_function"
  }, {
    name: "asin",
    symbol: "asin",
    formula: "inv_trigo(Math.asin,",
    type: "trigo_function"
  }, {
    name: "atan",
    symbol: "atan",
    formula: "inv_trigo(Math.atan,",
    type: "trigo_function"
  },
  {
    name: "4",
    symbol: 4,
    formula: 4,
    type: "number"
  }, {
    name: "5",
    symbol: 5,
    formula: 5,
    type: "number"
  }, {
    name: "6",
    symbol: 6,
    formula: 6,
    type: "number"
  }, {
    name: "multiplication",
    symbol: "×",
    formula: "*",
    type: "operator"
  }, {
    name: "factorial",
    symbol: "×!",
    formula: FACTORIAL,
    type: "math_function"
  }, {
    name: "exp",
    symbol: "exp",
    formula: "Math.exp",
    type: "math_function"
  }, {
    name: "ln",
    symbol: "ln",
    formula: "Math.log",
    type: "math_function"
  }, {
    name: "log",
    symbol: "log",
    formula: "Math.log10",
    type: "math_function"
  }, {
    name: "1",
    symbol: 1,
    formula: 1,
    type: "number"
  }, {
    name: "2",
    symbol: 2,
    formula: 2,
    type: "number"
  }, {
    name: "3",
    symbol: 3,
    formula: 3,
    type: "number"
  }, {
    name: "subtraction",
    symbol: "–",
    formula: "-",
    type: "operator"
  }, {
    name: "power",
    symbol: "x<span>y</span>",
    formula: POWER,
    type: "math_function"
  }, {
    name: "ANS",
    symbol: "ANS",
    formula: "ans",
    type: "number"
  }, {
    name: "percent",
    symbol: "%",
    formula: "/100",
    type: "number"
  }, {
    name: "comma",
    symbol: ".",
    formula: ".",
    type: "number"
  }, {
    name: "0",
    symbol: 0,
    formula: 0,
    type: "number"
  }, {
    name: "calculate",
    symbol: "=",
    formula: "=",
    type: "calculate"
  }, {
    name: "addition",
    symbol: "+",
    formula: "+",
    type: "operator"
  }
];
/* 
const input_element = document.querySelector('.input')

const btns_per_row = 8;
let added_btns = 0;
calculator_buttons.forEach(button => {
  if (added_btns % btns_per_row === 0) {
    input_element.innerHTML += `<div class="row"></div>`;
  }
  let row = document.querySelector('.row:last-child');
  row.innerHTML += `<button id="${button.name}">${button.symbol}</button>`;
});

input_element.addEventListener('click', event => {
  const target_btn = event.target;
  calculator_buttons.forEach(button => {
      if(button.name == target_btn.id) calculator(button);
  });
}); */