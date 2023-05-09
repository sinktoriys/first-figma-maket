let productCountEl = document.getElementById("products-count");
let addToCardBtns = document.querySelectorAll(".btn-add-to-card");
console.log(addToCardBtns);
// for (let i = 0; i < addToCardBtns.length; i++) {
//   addToCardBtns[i].addEventListener("click", function () {
//     // console.log("clicked");
//     let prevProductsCount = +productsCountEl.textContent;
//     // console.log(prevProductsCount);
//     productCountEl.textContent = prevProductsCount + 1;
//   });
// }
addToCardBtns.forEach((item) => {
  item.addEventListener("click", function () {
    productCountEl.textContent = +productCountEl.textContent + 1;
  });
});

let classLike = document.querySelectorAll(".like");
console.log(classLike);
classLike.forEach((item) => {
  item.addEventListener("click", function () {
    console.log("test");
  });
});
classLike[0].addEventListener("click", function () {
  console.log("test");
});
classLike.forEach((item) => {
  item.addEventListener("click", function () {
    if (item.classList.contains("liked")) {
      item.classList.remove("liked");
    } else {
      item.classList.add("liked");
    }
  });
});
console.log("bla-bla");
//натискаємо на кнопку та з'являється модальне вікно
let moreDetailsBtns = document.querySelectorAll(".btn-more-details");
let closeBtn = document.querySelector(".btn-close");
let modal = document.querySelector(".modal");
moreDetailsBtns.forEach((item) => {
  item.addEventListener("click", function () {
    modal.classList.add("show");
    modal.classList.remove("hide");
  });
});
//натискаємо на хрестик та зникає модальне вікно
closeBtn.addEventListener("click", closeModal);
function closeModal() {
  modal.classList.remove("show");
  modal.classList.add("hide");
}
//щоб модальне вікно зачинялося при натисканні поряд з хрестиком
modal.addEventListener("click", function (e) {
  if (e.target === modal) {
    closeModal();
  }
});
//slick
$(".slider").slick();
// // slick
// $(".slider").slick({
//     dots: true,
// });
