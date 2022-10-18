function calc() {
  // Declare values
  var valueA = parseInt(document.querySelector("#value1").value);
  var valueB = parseInt(document.querySelector("#value2").value);
  var op = document.querySelector("#operator").value;
  var calculate;
  //-----------
  // Calculate Stuff
  if (op == "add") {
    calculate = valueA + valueB
  } else if (op == "sub") {
    calculate = valueA - valueB;
  } else if (op == "div") {
    calculate = valueA / valueB;
  } else if (op == "mul") {
    calculate = valueA * valueB;
  }
  else if (op == "exp") {
    calculate = Math.pow(valueA,valueB);
  }
  document.getElementById("result").innerHTML = calculate;
}
