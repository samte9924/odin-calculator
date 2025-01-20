let calculator = document.querySelector(".calculator");

assignButtonsClickEvents();

function assignButtonsClickEvents() {
  let rows = calculator.querySelectorAll(".row");
  for(let row of rows) {
    let buttons = row.querySelectorAll("button");
    for(let button of buttons) {
      button.addEventListener("click", () => logOperation(button.innerHTML));
    }
  }
}

function logOperation(value) {
  console.log(value);
}