const u = 230;
const i = 2;
const t = 0.2;

let resistance = u / i;
let power = u * i;
let frequency = 1 / t;

const output = `
  ================================================================================
  Formula Electricity
  ================================================================================
  The resistance of the resistor: R = U / I => R = ${u} / ${i} = ${resistance} Ohm
  The power: P = U * I => P = ${u} * ${i} = ${power} Watt
  The frequention: f = 1 / T => f = 1 / ${t} = ${frequency} Hz
  ================================================================================
`

console.log(output);

