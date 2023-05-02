function parseAndDisplayName(myName) {
  const getSpacePos = myName.indexOf(" ");
  const firstName = myName.substring(0, getSpacePos);
  const lastName = myName.substring(getSpacePos + 1);

  console.log(`Name: ${myName}`);
  console.log(`First name: ${firstName}`);
  console.log(`Last name: ${lastName}`);
}

parseAndDisplayName("Dillon Coe");
