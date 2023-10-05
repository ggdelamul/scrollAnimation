console.log("coucou app2.js");

const item2 = document.querySelector(".item_2");
const item3 = document.querySelector(".item_3");
const item4 = document.querySelector(".item_4");
const item5 = document.querySelector(".item_5");
console.log(item2);
document.addEventListener("scroll", () => {
  let scrollHeight = document.documentElement.scrollTop;
  console.log(scrollHeight, "👍");
  if (scrollHeight < 211) {
    item2.style.transform = `translateX(-${scrollHeight}px)`;
    item3.style.transform = `translateX(-${scrollHeight}px)`;
    item4.style.transform = `translateX(-${scrollHeight}px)`;
    item5.style.transform = `translateX(-${scrollHeight}px)`;
  }
  if (scrollHeight < 422) {
    item3.style.transform = `translateX(-${scrollHeight}px)`;
    item4.style.transform = `translateX(-${scrollHeight}px)`;
    item5.style.transform = `translateX(-${scrollHeight}px)`;
  }
  if (scrollHeight < 633) {
    item4.style.transform = `translateX(-${scrollHeight}px)`;
    item5.style.transform = `translateX(-${scrollHeight}px)`;
  }
  if (scrollHeight < 844) {
    item5.style.transform = `translateX(-${scrollHeight}px)`;
  }
});
