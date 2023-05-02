"use strict";

const dateBtnEl = document.getElementById("dateButton");
dateBtnEl.onclick = onDateBtnClick;

function onDateBtnClick() {
  const dateEl = document.getElementById("currentDate");
  const userdate = new Date(currentDate.value);
  const dateTimeEl = document.getElementById("textDate");
  dateTimeEl.innerHTML = userdate.toUTCString();
}
