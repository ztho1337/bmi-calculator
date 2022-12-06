height.addEventListener("input", () => {
  let rangeValue = height.value;

  heightText.innerHTML = rangeValue;
});

weightPlus.addEventListener("click", () => {
  let weightValue = parseInt(weightText.innerHTML);

  weightText.innerHTML = weightValue + 1;
});

weightMinus.addEventListener("click", () => {
  let weightValue = parseInt(weightText.innerHTML);

  weightText.innerHTML = weightValue - 1;
});

agePlus.addEventListener("click", () => {
  let ageValue = parseInt(ageText.innerHTML);

  ageText.innerHTML = ageValue + 1;
});

ageMinus.addEventListener("click", () => {
  let ageValue = parseInt(ageText.innerHTML);

  ageText.innerHTML = ageValue - 1;
});
