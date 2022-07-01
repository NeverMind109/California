const menuDropdown = document.querySelector(".nav__link-caret");
const navDropdownMenu = document.querySelector(".nav__caret");

menuDropdown.addEventListener("click", function () {
  navDropdownMenu.classList.toggle("nav__caret--active");
  menuDropdown.classList.toggle("nav__link-caret--active");
});
