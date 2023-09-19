const gallery = document.querySelector(".gallery");
const central = document.querySelector(".central");
const un = document.querySelector(".un");
const deux = document.querySelector(".deux");
const nav = document.querySelector("nav");
const social = document.querySelector(".social-wrapper");
console.log(social);

//faire defiler le pseudo element lors du scroll
const before = document.querySelector(".wrapper");
const beforeStyle = window.getComputedStyle(before, "::before");
beforeStyle.getPropertyValue("background-color");
document.addEventListener("scroll", () => {
  let scrollHeight = document.documentElement.scrollTop;
  // console.log(scrollHeight);
  before.style.setProperty("--height-before", `${scrollHeight / 2}px`);
  before.style.setProperty("--height-after", `${scrollHeight}px`);
  if (scrollHeight > 6000) {
    nav.classList.add("toshow");
    central.classList.add("tobright");
    social.classList.add("toshow");
  } else {
    nav.classList.remove("toshow");
    central.classList.remove("tobright");
    social.classList.remove("toshow");
  }
});

const handleIntersection = (entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      gallery.style.position = "fixed";
      document.addEventListener("scroll", () => {
        let scrollHeight = document.documentElement.scrollTop;
        if (scrollHeight < 713) {
          gallery.style.position = "relative";
        }
        let widthOriginal = 323.9;
        let heightOriginal = 500;
        central.style.width = widthOriginal + scrollHeight / 5 + "px";
        central.style.height = heightOriginal + scrollHeight / 30 + "px";
        un.style.left = 350 - scrollHeight / 5 + "px";
        deux.style.right = 350 - scrollHeight / 5 + "px";
      });
    }
  });
};

// Créer un observer pour surveiller l'élément avec la classe "observer"
const boxElement = document.querySelector(".observer");
const options = {
  root: null, // L'élément racine de la zone d'observation (null signifie la fenêtre)
  rootMargin: "0px", // Marge autour de la zone d'observation (peut être utilisée pour "déclencher" l'observation plus tôt ou plus tard)
  threshold: 1, // Le pourcentage de l'élément visible nécessaire pour déclencher l'observation
};
const observer = new IntersectionObserver(handleIntersection, options);
// Commencer à observer l'élément
observer.observe(boxElement);
