console.log("anim3");
const circle = document.querySelectorAll(".circle");
console.log(circle);
circle[0].style.background = "white";
document.addEventListener("scroll", () => {
  let scrollHeight = document.documentElement.scrollTop;
  console.log(scrollHeight);
  if (scrollHeight < screen.height) {
    console.log("changement d image");
    circle[0].style.background = "white";
    circle[1].style.background = "none";
    circle[2].style.background = "none";
  }
  if (scrollHeight > screen.height / 2.5) {
    console.log("changement d image");
    circle[0].style.background = "none";
    circle[1].style.background = "white";
    circle[2].style.background = "none";
  }
  if (scrollHeight > screen.height * 1.5) {
    console.log("changement d image");
    circle[0].style.background = "none";
    circle[1].style.background = "none";
    circle[2].style.background = "white";
  }
});
