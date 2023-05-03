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
const days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
const d = new Date();
const monthName = months[d.getMonth()];
const dayName = days[d.getDay()];
const date = d.getDate();
const year = d.getFullYear();

console.log(`${date}-${monthName}-${year}(${dayName})`);
