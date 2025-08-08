const topBtn = document.getElementById("topBtn");
const openNav = document.querySelector(".open-nav");
const closeNav = document.querySelector(".close-nav");
const nav = document.querySelector("#navbar > ul");

openNav.addEventListener("click", () => {
  nav.style.right = 0;
});
closeNav.addEventListener("click", () => {
  nav.style.right = "-300px";
});
Array.from(document.querySelectorAll("#navbar ul li a")).forEach(
  (navlink) =>
    (navlink.onclick = () => {
      nav.style.right = "-300px";
    })
);

topBtn.addEventListener("click", () => window.scrollTo(0, 0));
document.addEventListener("scroll", () => {
  if (window.pageYOffset >= 72) {
    topBtn.classList.add("active");
  } else {
    topBtn.classList.remove("active");
  }
});
