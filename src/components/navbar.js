import { htmlComponent, appendElements } from "../scripts/htmlComponents.js";
import {
  hamburger,
  ytLogo,
  search,
  mic,
  create,
  notification,
} from "../assets/icons.js";

export const Navbar = () => {
  const navbar = htmlComponent([{ typeOfElement: "nav" }]);

  const navbarContent = htmlComponent([
    {
      typeOfElement: "div",
      attributes: [
        {
          attribute: "id",
          value: "hamburger-logo-wrapper",
        },
      ],
    },
    {
      typeOfElement: "div",
      attributes: [
        {
          attribute: "id",
          value: "search-wrapper",
        },
      ],
    },
    {
      typeOfElement: "div",
      attributes: [
        {
          attribute: "id",
          value: "right-icons-wrapper",
        },
      ],
    },
  ]);

  const hamburgerIcon = htmlComponent([
    {
      typeOfElement: "div",
      attributes: [
        {
          attribute: "id",
          value: "hamburger",
        },
        {
          attribute: "innerHTML",
          value: hamburger,
        },
      ],
    },
  ]);

  const logo = htmlComponent([
    {
      typeOfElement: "div",
      attributes: [
        {
          attribute: "id",
          value: "logo",
        },
      ],
    },
  ]);

  const logoContent = htmlComponent([
    {
      typeOfElement: "div",
      attributes: [
        {
          attribute: "id",
          value: "logo-svg-wrapper",
        },
        {
          attribute: "innerHTML",
          value: ytLogo,
        },
      ],
    },
    {
      typeOfElement: "span",
      attributes: [
        {
          attribute: "id",
          value: "sup-wrapper",
        },
      ],
    },
  ]);
  appendElements([logoContent], logo[0]);
  appendElements([hamburgerIcon, logo], navbarContent[0]);

  const searchWrapperContent = htmlComponent([
    {
      typeOfElement: "div",
      attributes: [
        {
          attribute: "id",
          value: "search-bar-wrapper",
        },
      ],
    },
    {
      typeOfElement: "span",
      attributes: [
        {
          attribute: "id",
          value: "icon-searchbar",
        },
        {
          attribute: "innerHTML",
          value: search,
        },
      ],
    },
    {
      typeOfElement: "div",
      attributes: [
        {
          attribute: "id",
          value: "mic",
        },
        {
          attribute: "innerHTML",
          value: mic,
        },
      ],
    },
  ]);

  const searchBarWrapperContent = htmlComponent([
    {
      typeOfElement: "span",
      attributes: [
        {
          attribute: "class",
          value: "search-icon-wrapper",
        },
        {
          attribute: "innerHTML",
          value: search,
        },
      ],
    },
    {
      typeOfElement: "input",
      attributes: [
        {
          attribute: "id",
          value: "search-bar",
        },
        {
          attribute: "type",
          value: "text",
        },
        {
          attribute: "placeholder",
          value: "Search",
        },
      ],
    },
  ]);
  appendElements([searchBarWrapperContent], searchWrapperContent[0]);
  appendElements([searchWrapperContent], navbarContent[1]);

  const rightIconsWrapperContent = htmlComponent([
    {
      typeOfElement: "a",
      attributes: [
        {
          attribute: "id",
          value: "create-icon",
        },
        {
          attribute: "innerHTML",
          value: create,
        },
      ],
    },
    {
      typeOfElement: "div",
      attributes: [
        {
          attribute: "id",
          value: "notifications",
        },
        {
          attribute: "innerHTML",
          value: notification,
        },
      ],
    },
    {
      typeOfElement: "div",
      attributes: [
        {
          attribute: "id",
          value: "user-avatar-wrapper",
        },
      ],
    },
  ]);
  appendElements([rightIconsWrapperContent], navbarContent[2]);
  appendElements([navbarContent], navbar[0]);
  console.log(navbar);
  return navbar;
};

// export const Header = () => {
//   return `
//       <nav>
//         <div id="right-icons-wrapper">
//           <div id="create-icon">
//             <a href="./uploadVideo.html">
//               create()
//             </a>
//           </div>
//           <div id="notifications">
//             notification()
//           </div>
//           <div id="user-avatar-wrapper"></div>
//         </div>
//       </nav>`;
// };

// // const searchBar = document.querySelector("#search-bar");
// // const searchIcon = document.querySelector(".search-icon-wrapper");
// // searchBar.addEventListener("focus", () => {
// //   searchIcon.classList.remove("none");
// //   searchIcon.classList.add("inline-flex");
// // });
// // searchBar.addEventListener("blur", () => {
// //   searchIcon.classList.add("none");
// //   searchIcon.classList.remove("inline-flex");
// // });

// // const hamburger = document.querySelector("#hamburger");
// // const aside = document.querySelector(".sidebar-default-state");
// // let isOpen = true;
// // hamburger.addEventListener("click", () => {
// //   if (isOpen) {
// //     isOpen = !isOpen;
// //     aside.removeAttribute("id");
// //     return;
// //   }
// //   isOpen = !isOpen;
// //   aside.setAttribute("id", "sidebar");
// // });

//         <div id="hamburger-logo-wrapper">
//           <div id="hamburger">
//             hamburger()
//           </div>
//           <div id="logo">
//             <div id="logo-svg-wrapper">
//               ytLogo()
//             </div>
//             <span id="sup-wrapper"><sup>IN</sup></span>
//           </div>
//         </div>
