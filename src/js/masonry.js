// selector string as first argument
var colc = new Colcade(".grid", {
  columns: ".grid-col",
  items: ".grid-item",
});

//modal scripts
const imgs = document.querySelectorAll(".image");
let modal = document.querySelector(".img-modal");
let modalImg = document.querySelector(".img-modal-content");

imgs.forEach((img) => {
  img.addEventListener("click", (e) => {
    modalImg.src = e.target.src;
    modal.classList.toggle("open");
  });
});

modal.addEventListener("click", (e) => {
  if (e.target.classList.contains("img-modal")) {
    modal.classList.toggle("open");
  }
});
