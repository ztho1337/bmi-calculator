const preloader = document.getElementById("preloader");

window.addEventListener("load", () => {
  setTimeout(() => {
    preloader.style.visibility = "hidden";
    preloader.style.opacity = "0";
  }, 1000);
});

//
