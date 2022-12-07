//sidebar--header-logo

const burger1 = document.querySelector(".menu--1-target");
const burger2 = document.querySelector(".menu--2-target");
const burger3 = document.querySelector(".menu--3-target");
const burgerMenu = document.querySelector(".sidebar--hamburger-menu");

const container = document.querySelector(".container--contains");

const sidebarContainer = document.querySelector(".sidebar--container");
const sidebar = document.querySelector(".sidebar");
const sidebarJs = document.querySelector(".sidebar--js");

const text = document.querySelector(".sidebar--header-text");
const span = document.querySelector(".sidebar--header-span");
const pera = document.querySelector(".sidebar--header-heading");
const heading = document.querySelector(".sidebar--students-heading");
const logo = document.querySelector(".sideber--header-logo");
const svg = document.querySelector("graduation-cap");
let menuButton = false;

burgerMenu.addEventListener("click", function (e) {
  e.preventDefault();
  if (!menuButton) {
    menuButton = true;

    burger1.classList.remove("menu-1");
    burger2.classList.remove("menu-2");
    burger3.classList.remove("menu-3");

    burger1.classList.add("menu-1-js");
    burger2.classList.add("menu-2-js");
    burger3.classList.add("menu-3-js");

    container.classList.remove("container");
    container.classList.add("container-dom");

    // logo.classList.add("non-display");

    text.classList.add("non-display");
    span.classList.add("non-display");
    pera.classList.add("non-display");
    heading.classList.add("non-display");
    svg.classList.add("non-display");

    console.log(menuButton);
  } else {
    menuButton = false;

    burger1.classList.remove("menu-1-js");
    burger2.classList.remove("menu-2-js");
    burger3.classList.remove("menu-3-js");
    burger1.classList.add("menu-1");
    burger2.classList.add("menu-2");
    burger3.classList.add("menu-3");

    container.classList.remove("container-dom");
    container.classList.add("container");

    // logo.classList.remove("non-display");

    text.classList.remove("non-display");
    span.classList.remove("non-display");
    pera.classList.remove("non-display");
    heading.classList.remove("non-display");
    svg.classList.remove("non-display");

    console.log(menuButton);
  }
  console.log(menuButton);
});

console.log(menuButton);
// burgerMenu.addEventListener("click", function () {
//   burger1.classList.remove("menu-1-js");
//   burger2.classList.remove("menu-2-js");
//   burger3.classList.remove("menu-3-js");
//   burger1.classList.add("menu-1");
//   burger2.classList.add("menu-2");
//   burger3.classList.add("menu-3");
// });

const html = `
<div class="sidebar sidebar--js">
<header class="sidebar--header">
    <div class="sidebar--hamburger-menu">
        <div class="menu--1-target menu-1"></div>
        <div class="menu--2-target menu-2"></div>
        <div class="menu--3-target menu-3"></div>
    </div>
</header>

<!-- Dashboard -->
<div class="div-svg div--svg-js sidebar--dashboard">
    <svg class="dashboard">
        <use href="./sprite.svg#icon-meter"></use>
    </svg>
</div>

<!-- students -->
<div class="div-svg div--svg-js sidebar--students">
    <img src="img/children-solid.svg" alt="" class="students">
</div>
<!-- Teachers -->
<div class="div-svg div--svg-js sidebar--teachers">
    <svg class="teachers">
        <use href="./sprite.svg#icon-group"></use>
    </svg>
</div>
<!-- Parents -->
<div class="div-svg div--svg-js sidebar--parents">
    <svg class="parents">
        <use href="./sprite.svg#icon-users1"></use>
    </svg>
</div>
<!-- Library -->
<div class="div-svg div--svg-js sidebar--library">
    <svg class="library">
        <use href="./sprite.svg#icon-books"></use>
    </svg>
</div>
<!-- Account -->
<div class="div-svg div--svg-js sidebar--account">
    <svg class="account">
        <use href="./sprite.svg#icon-file-text2"></use>
    </svg>
</div>
<!-- Class -->
<div class="div-svg div--svg-js sidebar--class">
    <img src="img/pen-solid.svg" alt="" class="class">
</div>
<!-- Subject -->
<div class="div-svg div--svg-js sidebar--subject">
    <svg class="subject">
        <use href="./sprite.svg#icon-book"></use>
    </svg>
</div>
<!-- class Routine -->
<div class="div-svg div--svg-js sidebar--routine">
    <svg class="routine">
        <use href="./sprite.svg#icon-calendar"></use>
    </svg>
</div>
<!-- Attendence -->
<div class="div-svg div--svg-js sidebar--attendence">
    <svg class="attendence">
        <use href="./sprite.svg#icon-clipboard"></use>
    </svg>
</div>
<!-- Exam -->
<div class="div-svg div--svg-js sidebar--exam">
    <svg class="exam">
        <use href="./sprite.svg#icon-file-text"></use>
    </svg>
</div>
<!-- Transport -->
<div class="div-svg div--svg-js sidebar--transport">
    <img src="img/van-shuttle-solid.svg" alt="" class="transport">
</div>
<!-- Hostel -->
<div class="div-svg div--svg-js sidebar--hostel">
    <img src="img/bed-solid.svg" alt="" class="hostel">
</div>
<!-- Notice -->
<div class="div-svg div--svg-js sidebar--notice">
    <svg class="notice">
        <use href="./sprite.svg#icon-insert-template"></use>
    </svg>
</div>
<!-- Message -->
<div class="div-svg div--svg-js sidebar--message">
    <svg class="message">
        <use href="./sprite.svg#icon-bubbles"></use>
    </svg>
</div>
<!-- UI Elements -->
<div class="div-svg div--svg-js sidebar--elements">
    <svg class="elements">
        <use href="./sprite.svg#icon-"></use>
    </svg>
</div>
<!-- Map -->
<div class="div-svg div--svg-js sidebar--map">
    <svg class="map">
        <use href="./sprite.svg#icon-compass"></use>
    </svg>
</div>
<!-- Account -->
<div class="div-svg div--svg-js  sidebar--account">
    <svg class="account">
        <use href="./sprite.svg#icon-cogs"></use>
    </svg>
</div>
</div>
`;
