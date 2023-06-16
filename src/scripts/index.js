import { onNavigate } from "./router.js";

const checkAuth = () => {
  //   if (localStorage.getItem("session")) {
  onNavigate("/home");
  //   } else {
  // onNavigate("/login");
  //   }
};

checkAuth();

// document
//   .querySelector("#create-account")
//   .addEventListener("click", onNavigate("/home"));
