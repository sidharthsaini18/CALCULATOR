let currentDisplay = "";
document.getElementById("display").value = currentDisplay;

function C() {
  currentDisplay = "";
  document.getElementById("display").value = currentDisplay;
}
function One() {
  currentDisplay = currentDisplay + "1";
  document.getElementById("display").value = currentDisplay;
}

function Two() {
  currentDisplay = currentDisplay + "2";
  document.getElementById("display").value = currentDisplay;
}

function Plus() {
  currentDisplay = currentDisplay + "+";
  document.getElementById("display").value = currentDisplay;
}

function Three() {
  currentDisplay = currentDisplay + "3";
  document.getElementById("display").value = currentDisplay;
}

function Four() {
  currentDisplay = currentDisplay + "4";
  document.getElementById("display").value = currentDisplay;
}

function Sub() {
  currentDisplay = currentDisplay + "-";
  document.getElementById("display").value = currentDisplay;
}

function Five() {
  currentDisplay = currentDisplay + "5";
  document.getElementById("display").value = currentDisplay;
}

function Six() {
  currentDisplay = currentDisplay + "6";
  document.getElementById("display").value = currentDisplay;
}

function Multiply() {
  currentDisplay = currentDisplay + "*";
  document.getElementById("display").value = currentDisplay;
}

function Seven() {
  currentDisplay = currentDisplay + "7";
  document.getElementById("display").value = currentDisplay;
}

function Eight() {
  currentDisplay = currentDisplay + "8";
  document.getElementById("display").value = currentDisplay;
}

function Divide() {
  currentDisplay = currentDisplay + "/";
  document.getElementById("display").value = currentDisplay;
}

function Zero() {
  currentDisplay = currentDisplay + "0";
  document.getElementById("display").value = currentDisplay;
}

function Nine() {
  currentDisplay = currentDisplay + "9";
  document.getElementById("display").value = currentDisplay;
}

function Dot() {
  currentDisplay = currentDisplay + ".";
  document.getElementById("display").value = currentDisplay;
}

function Equal() {
  currentDisplay = eval(currentDisplay);
  document.getElementById("display").value = currentDisplay;
}
