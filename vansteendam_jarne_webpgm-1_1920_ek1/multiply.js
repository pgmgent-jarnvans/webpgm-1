const generateArrayBasedOnAmountAndMultiplication = (amount, multiplication) => {
  const result = [];
  let output = '';

  for(let i = 0; i < amount; i++) {
    result.push(i * multiplication)
  }

  output =  `
    ============================================================================================================
    Array generator based on amount and multiplication
    ============================================================================================================
    The amount: ${amount}
    The multiplication: ${multiplication}
    ------------------------------------------------------------------------------------------------------------
    The resulting array: [${result}]
    ============================================================================================================
  `

  return output;
}

console.log(generateArrayBasedOnAmountAndMultiplication(23, 3));
console.log(generateArrayBasedOnAmountAndMultiplication(14, '8'));

