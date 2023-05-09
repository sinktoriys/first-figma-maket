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
// let likeClickEl = document.getElementById("like-click1");
// console.log(likeClickEl);
// likeClickEl.style.background = "blue";
// console.log(likeClickEl.getAttribute("url"));
// let backgroundImageLike = document.querySelectorAll("backgroundImage");
// console.log(backgroundImageLike);
// function changeBackgroundImageUrl(){
// }
// let classLike = document.querySelectorAll(".like");
// console.log(classLike);
// console.log(classLike.getAttribute("url"));
// function handleClickLike() {
//   console.log("click");
// }
// likeClickEl.addEventListener("click", handleClickLike);
// likeClickEl.addEventListener("click", function () {
//   console.log("click");
// });
// let likeClickEl = document.getElementById("like-click1");
// console.log(likeClickEl);
// let moreDetails = document.querySelectorAll(".btn-more-details");
// console.log(moreDetails);
// moreDetails.addEventListener("click", function () {
//   console.log("click");
// });
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
