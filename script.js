"use strict";

const display = document.getElementById("calculatorDisplay");
const clear = document.querySelector(".clear");

let shouldClearDisplay = false;

function addToDisplay(value) {
  console.log(display.value);

  shouldClearDisplay ? clea(value) : (display.value += value);
  // display.value += value;
  clear.textContent = "C";
}

// function calculate() {
//   try {
//     display.value = eval(display.value);
//   } catch (error) {
//     display.value = "Error";
//   }
// }

function calculate() {
  let expression = display.value;
  let result = eval(expression);
  display.value = result;
  shouldClearDisplay = true; // set flag to clear display on next input
  console.log(shouldClearDisplay);
}

function clearDisplay() {
  display.value = "";
  shouldClearDisplay = false;
  clear.textContent = "AC";
}

function clea(value) {
  // console.log(value);
  display.value = "";
  display.value = value;
  shouldClearDisplay = false;
}

document.addEventListener("keydown", function (event) {
  if (event.key >= 0 && event.key <= 9) {
    // number keys
    console.log(shouldClearDisplay);
    console.log(typeof event.key);
    // if (shouldClearDisplay) {
    //   console.log(event.key);
    //   clea(event.key);

    // }
    if (typeof event.key !== "string") {
      prompt("Invalid");
    }

    shouldClearDisplay ? clea(event.key) : (display.value += event.key);

    // display.value += event.key;
  } else if (event.key === "+") {
    // addition operator
    shouldClearDisplay = false;
    display.value += "+";
  } else if (event.key === "-") {
    // subtraction operator
    shouldClearDisplay = false;
    display.value += "-";
  } else if (event.key === "*") {
    // multiplication operator
    shouldClearDisplay = false;
    display.value += "*";
  } else if (event.key === "/") {
    // division operator
    shouldClearDisplay = false;
    display.value += "/";
  } else if (event.key === ".") {
    // decimal point
    shouldClearDisplay = false;
    display.value += ".";
  } else if (event.key === "Enter") {
    // equals sign
    calculate();
    shouldClearDisplay = true;
  } else if (event.key === "Backspace") {
    // clear button
    clearDisplay();
    shouldClearDisplay = false;
  }
});
