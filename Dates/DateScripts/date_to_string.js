const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];
let d = new Date();
let monthName = months[d.getMonth(4)];
d.getDate(2);
d.getFullYear(2023);

console.log(d.toString());
console.log(d.toDateString());
console.log(d.toUTCString());
console.log(d.toLocaleString());
