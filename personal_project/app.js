let displayValue = "";

function appendNumber(num) {
  displayValue += num;
  document.getElementById("display").value = displayValue;
}

function clearDisplay() {
  displayValue = "";
  document.getElementById("display").value = "";
}

function deleteNumber() {
  displayValue = displayValue.slice(0, -1);
  document.getElementById("display").value = displayValue;
}

function calculate() {
  try {
    const result = eval(displayValue);
    displayValue = result.toString();
    document.getElementById("display").value = displayValue;
  } catch (error) {
    alert("Invalid expression");
    clearDisplay();
  }
}
