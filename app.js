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

$(".slider").slick({
  dots: true,
});
//counter
let incrementBtns = document.querySelectorAll(".increment-button");
let decrementBtns = document.querySelectorAll(".decrement-button");
let inputFields = document.querySelectorAll(".counter-input");

function Counter(incrementBtn, decrementBtn, inputField) {
  this.domRefs = {
    incrementBtn,
    decrementBtn,
    inputField,
  };
  this.toggleButtonState = function () {
    let count = +this.domRefs.inputField.value;
    this.domRefs.decrementBtn.disabled = count <= 1;
    this.domRefs.incrementBtn.disabled = count >= 10;
  };
  this.toggleButtonState();
  this.increment = function () {
    this.domRefs.inputField.value = +this.domRefs.inputField.value + 1;
    this.toggleButtonState();
  };
  this.decrement = function () {
    this.domRefs.inputField.value = +this.domRefs.inputField.value - 1;
    this.toggleButtonState();
  };
  this.domRefs.incrementBtn.addEventListener(
    "click",
    this.increment.bind(this)
  );
  this.domRefs.decrementBtn.addEventListener(
    "click",
    this.decrement.bind(this)
  );
}
// console.log(this);
// let counter = new Counter(
//   document.querySelectorAll(".increment-button")[0],
//   document.querySelectorAll(".decrement-button")[0],
//   document.querySelectorAll(".counter-input")[0]
// );
// console.log(counter);
let counters = [];
inputFields.forEach(
  (item, i) =>
    (counters[i] = new Counter(incrementBtns[i], decrementBtns[i], item))
);
