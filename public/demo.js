console.log("hello demo");

const b = document.getElementById("no_btn")

b.addEventListener("mouseover", () => {
  const i = Math.floor(Math.random() * 500) + 1;
  const j = Math.floor(Math.random() * 500) + 1;

  b.style.left = i + "px";
  b.style.top = j + "px";
});