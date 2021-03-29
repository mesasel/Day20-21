let textarea = document.getElementById("textarea");
let str = "";
let value = "";
let shift = false;
let capsTorF = false;

if (document.getElementById("caps_lock").clicked == true) {
  alert("Uključen CAPS LOCK");
}

function clickNaDugme(id) {
  value = document.getElementById(id).innerHTML;
  if (capsTorF == true) {
    if (shift == true) {
      textarea.innerHTML += value;
      shift = false;
    } else {
      textarea.innerHTML += value.toUpperCase();
    }
  } else {
    if (shift == true) {
      textarea.innerHTML += value.toUpperCase();
      shift = false;
    } else {
      textarea.innerHTML += value;
      
    }
  }

  str = textarea.innerHTML;
}

function capsLock() {
  if (capsTorF == false) {
    capsTorF = true;
    caps_lock.innerHTML = "Caps Lock (ON)";
  } else {
    capsTorF = false;
    caps_lock.innerHTML = "Caps Lock (OFF)";
  }
}

function shiftTorF() {
    if (shift == false) shift = true;
}

function dugmeOK() {
  alert(textarea.innerHTML);
}

function backSpace() {
  let newStr = "";
  for (let i = 0; i < str.length - 1; i++) {
    newStr += str[i];
  }
  str = newStr;
  textarea.innerHTML = "";
  textarea.innerHTML = newStr;
}

function space() {
  textarea.innerHTML += " ";
}

function dugmeEnter() {
    textarea.innerHTML += "\n";
}