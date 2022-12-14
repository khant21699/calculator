var display = document.getElementById("display");
function dplnum(num) {
  if (num == "bo") {
    num = "(";
    display.innerHTML += num;
  } else if (num == "bc") {
    num = ")";
    display.innerHTML += num;
  } else {
    display.innerHTML += num;
  }
}

function operate(opt) {
  if (opt == "=") {
    document.getElementById("display").innerHTML = eval(
      document.getElementById("display").innerHTML
    );
  } else if (opt == "C") {
    document.getElementById("display").innerHTML = "";
  } else if (opt == "<") {
    let dpl = document.getElementById("display").innerHTML.toString();
    document.getElementById("display").innerHTML = dpl.substring(
      0,
      dpl.length - 1
    );
  } else if (opt !== "=") {
    document.getElementById("display").innerHTML += opt;
  }
}
