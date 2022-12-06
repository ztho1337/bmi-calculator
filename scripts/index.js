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

submitButton.addEventListener("click", () => {
  let heightValue = parseInt(heightText.innerHTML);
  let weightValue = parseInt(weightText.innerHTML);

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
      statsWeight.innerHTML = "Correctly";
    } else if (final >= 25 && final <= 29.9) {
      statsWeight.style.color = "#5689D4";
      statsWeight.innerHTML = "Overweight";
    } else {
      statsWeight.style.color = "#D45656";
      statsWeight.innerHTML = "Obese";
    }
  } else {
    // TODO: zrobić custom error.
    console.log("Error");
  }
});
