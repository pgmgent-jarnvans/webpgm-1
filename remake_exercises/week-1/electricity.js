const v = 230;
const i = 2.85;
const t = 0.02;
const r = v / i;
const p = v * i;
const f = 1 / t;

const message = `
  ========================================================
  Formula Electricity
  ========================================================
  The resistance: R = V / I => R = ${v} / ${i} = ${r} Ohm
  The power: P = V * I => P = ${v} * ${i} = ${p} Watt
  The frequency: f = 1 / t => f = 1 / ${t} = ${f} Hz
  ========================================================
`;

console.log(message);
