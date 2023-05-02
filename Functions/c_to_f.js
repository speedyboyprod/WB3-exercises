function convertCtoF(currentTemp) {
  const fahTemp = (currentTemp * 9) / 5 + 32;
  return fahTemp;
}

const a = convertCtoF(100);
const b = convertCtoF(45);
const c = convertCtoF(19);
const d = convertCtoF(0);
const e = convertCtoF(-7);
const f = convertCtoF(-40);
console.log(a);
console.log(b);
console.log(c);
console.log(d);
console.log(e);
console.log(f);
