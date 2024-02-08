const navbar = document.querySelector(".navbar");
const btn = document.querySelector(".burger");

btn.addEventListener("click", () => {
  navbar.classList.toggle("active");
  navbar.classList.toggle("close");
});
