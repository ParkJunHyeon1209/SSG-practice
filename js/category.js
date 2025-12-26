window.addEventListener("load", function () {
  let allcategory = this.document.querySelectorAll(".all-category");
  let categoryItems = this.document.querySelectorAll(".category-list>li>ul");
  allcategory.addEventListener("click", function (event) {
    categoryItems.style.display = "black";
  });
});
