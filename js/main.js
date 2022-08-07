const div = document.querySelector("aside");

document.querySelector(".hide").addEventListener("click", () => {
  div.classList.add("aside_hide");
});

document.querySelector(".show").addEventListener("click", () => {
  div.classList.remove("aside_hide");
});