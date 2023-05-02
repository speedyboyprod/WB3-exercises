function convertFtoC(currentTemp) {
  const celTemp = (+currentTemp - 32) * (5 / 9);
  return celTemp;
}

const a = convertFtoC(212);
const b = convertFtoC(90).toFixed(3);
const c = convertFtoC(72).toFixed(3);
const d = convertFtoC(32);
const e = convertFtoC(0).toFixed(3);
const f = convertFtoC(-40);
console.log(a);
console.log(b);
console.log(c);
console.log(d);
console.log(e);
console.log(f);
