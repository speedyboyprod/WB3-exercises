function displayMailingLabel(name, address, city, state, zip) {
  console.log(name);
  console.log(address);
  console.log(`${city} ${state} ${zip}`);
}

displayMailingLabel("Dillon Coe", "1811 Belcher Pl", "Austell,", "GA", "30168");
displayMailingLabel("Joe Schmo", "420 Blvd", "city", "state", "zip");

function addNum(num1, num2) {
  const sum = num1 + num2;
  console.log(`${num1} + ${num2} = ${sum}`);
}

addNum(5, 9);
addNum(22, 55);

function displayReceipt(totalDue, amountPaid) {
  const changeDue = totalDue - amountPaid;

  console.log(`Total Due: ${totalDue}`);
  console.log(`Amount Paid: ${amountPaid}`);

  if (changeDue <= 0) {
    console.log(`Change Due: ${Math.abs(changeDue).toFixed(2)}`);
  } else {
    console.log(`Owed Amount: ${Math.abs(changeDue).toFixed(2)}`);
  }
}
