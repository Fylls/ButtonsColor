// Challenge 4: Change The Colors of All Butons

const ButtonsArray = document.getElementsByTagName("button");

//  duplicating all buttons
const copyButtonsArray = [];

for (let i = 0; i < ButtonsArray.length; i++) {
  copyButtonsArray.push(ButtonsArray[i].classList[1]);
}

//  changing colors

const colorChoices = [
  "btn-primary",
  "btn-danger",
  "btn-success",
  "btn-warning",
  "btn-dark",
  "btn-link",
];

// this f() starts when onChange in the form/select tag is called
function ChangeColor(buttonData) {
  const colorSetting = buttonData.value;

  if (colorSetting === "Random") {
    buttonsColorRANDOM();
  } else if (colorSetting === "Reset") {
    buttonsColorRESET();
  } else if (colorSetting === "Red") {
    buttonsColorRED();
  } else if (colorSetting === "Green") {
    buttonsColorGREEN();
  } else if (colorSetting === "Blue") {
    buttonsColorBLUE();
  }
}

function buttonsColorRED() {
  for (let i = 0; i < ButtonsArray.length; i++) {
    const colorClass = ButtonsArray[i].classList[1];
    ButtonsArray[i].classList.remove(colorClass);
    ButtonsArray[i].classList.add("btn-danger");
  }
}

function buttonsColorGREEN() {
  for (let i = 0; i < ButtonsArray.length; i++) {
    const colorClass = ButtonsArray[i].classList[1];
    ButtonsArray[i].classList.remove(colorClass);
    ButtonsArray[i].classList.add("btn-success");
  }
}

function buttonsColorBLUE() {
  for (let i = 0; i < ButtonsArray.length; i++) {
    const colorClass = ButtonsArray[i].classList[1];
    ButtonsArray[i].classList.remove(colorClass);
    ButtonsArray[i].classList.add("btn-primary");
  }
}

function buttonsColorRESET() {
  for (let i = 0; i < ButtonsArray.length; i++) {
    const colorClass = ButtonsArray[i].classList[1];
    ButtonsArray[i].classList.remove(colorClass);
    ButtonsArray[i].classList.add(copyButtonsArray[i]);
  }
}

function buttonsColorRANDOM() {
  for (let i = 0; i < ButtonsArray.length; i++) {
    const colorClass = ButtonsArray[i].classList[1];

    const rndmNum = Math.floor(Math.random() * 9);
    const newColor = colorChoices[rndmNum];

    ButtonsArray[i].classList.remove(colorClass);
    ButtonsArray[i].classList.add(newColor);
  }
}
