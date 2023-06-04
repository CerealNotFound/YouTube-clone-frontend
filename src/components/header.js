import { appendElements, htmlComponent } from "../scripts/htmlComponents.js";
import { addUser } from "../scripts/fetchUser.js";

const searchBar = document.querySelector("#search-bar");
const searchIcon = document.querySelector(".search-icon-wrapper");
searchBar.addEventListener("focus", () => {
  searchIcon.classList.remove("none");
  searchIcon.classList.add("inline-flex");
});
searchBar.addEventListener("blur", () => {
  searchIcon.classList.add("none");
  searchIcon.classList.remove("inline-flex");
});

const hamburger = document.querySelector("#hamburger");
const aside = document.querySelector(".sidebar-default-state");
let isOpen = true;
hamburger.addEventListener("click", () => {
  if (isOpen) {
    isOpen = !isOpen;
    aside.removeAttribute("id");
    return;
  }
  isOpen = !isOpen;
  aside.setAttribute("id", "sidebar");
});

addUser();

const user = JSON.parse(localStorage.getItem("user"));

const userAvatarWrapper = document.querySelector("#user-avatar-wrapper");

const userAvatar = htmlComponent([
  {
    typeOfElement: "img",
    attributes: [
      {
        attribute: "id",
        value: "user-avatar",
      },
      {
        attribute: "src",
        value: user.avatar,
      },
    ],
  },
]);

appendElements([userAvatar], userAvatarWrapper);
