const heightText = document.getElementById("heightText");
const height = document.getElementById("height");

const weightText = document.getElementById("weightText");
const weightPlus = document.getElementById("weightPlus");
const weightMinus = document.getElementById("weightMinus");

const ageText = document.getElementById("ageText");
const agePlus = document.getElementById("agePlus");
const ageMinus = document.getElementById("ageMinus");

const stats = document.getElementById("stats");
const statsFinal = document.getElementById("statsFinal");
const statsWeight = document.getElementById("statsWeight");

const submitButton = document.getElementById("submitButton");

const Male = document.getElementById("Male");
const Female = document.getElementById("Female");

const error = document.getElementById("error");
const errorTitle = document.getElementById("errorTitle");
const errorDescription = document.getElementById("errorDescription");
const errorButton = document.getElementById("errorButton");

let Count = 0;
Male.addEventListener("click", () => {
  if (Count == 0) {
    Female.classList.remove("checked");
    Male.classList.add("checked");
    Count = 1;
  }
  if (Count == 1) {
    Female.classList.remove("checked");
    Male.classList.add("checked");
    Count = 0;
  }
});

Female.addEventListener("click", () => {
  if (Count == 0) {
    Male.classList.remove("checked");
    Female.classList.add("checked");
    Count = 1;
  }
  if (Count == 1) {
    Male.classList.remove("checked");
    Female.classList.add("checked");
    Count = 0;
  }
});

errorButton.addEventListener("click", () => {
  error.style.visibility = "hidden";
  error.style.opacity = "0";
});

submitButton.addEventListener("click", () => {
  let heightValue = parseInt(heightText.innerHTML);
  let weightValue = parseInt(weightText.innerHTML);

  if (Male.classList.contains("checked")) {
    finalBMI();
  } else if (Female.classList.contains("checked")) {
    finalBMI();
  } else {
    error.style.visibility = "visible";
    error.style.opacity = "1";
    errorTitle.innerHTML = "Error occured!";
    errorDescription.innerHTML = "Enter your gender.";
  }

  function finalBMI() {
    if (weightValue > 0) {
      stats.style.visibility = "visible";
      stats.style.opacity = "1";

      let final = (weightValue / Math.pow(heightValue / 100, 2)).toFixed(1);

      statsFinal.innerHTML = final;

      if (final < 18.5) {
        statsWeight.style.color = "#E35F5F";
        statsWeight.innerHTML = "Underweight";
      } else if (final >= 18.5 && final <= 24.9) {
        statsWeight.style.color = "#56D463";
        statsWeight.innerHTML = "Correct";
      } else if (final >= 25 && final <= 29.9) {
        statsWeight.style.color = "#5689D4";
        statsWeight.innerHTML = "Overweight";
      } else {
        statsWeight.style.color = "#D45656";
        statsWeight.innerHTML = "Obese";
      }
    } else {
      error.style.visibility = "visible";
      error.style.opacity = "1";
      errorTitle.innerHTML = "Error occured!";
      errorDescription.innerHTML = "The correct weight value is not given.";
    }
  }
});
