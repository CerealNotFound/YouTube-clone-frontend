import { onNavigate } from "./router.js";

const checkAuth = () => {
  if (localStorage.getItem("loggedInCred")) {
    onNavigate("/home");
  } else {
    onNavigate("/login");
  }
  return;
};

checkAuth();

//Searchbar
// const searchBar = document.querySelector("#search-bar");
// const searchIcon = document.querySelector(".search-icon-wrapper");
// if (searchIcon) {
//   searchIcon.classList.add("none");
// }
// searchBar.addEventListener("focus", () => {
//   searchIcon.classList.remove("none");
//   searchIcon.classList.add("inline-flex");
// });
// searchBar.addEventListener("blur", () => {
//   searchIcon.classList.add("none");
//   searchIcon.classList.remove("inline-flex");
// });

//Navbar
// const createIcon = document.querySelector("#create-icon");
// createIcon.addEventListener("click", () => {
//   onNavigate("/login");
// });
