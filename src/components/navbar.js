import { htmlComponent, appendElements } from "../scripts/htmlComponents.js";
import {
  hamburger,
  ytLogo,
  search,
  mic,
  create,
  notification,
} from "../assets/icons.js";
import { onNavigate } from "../scripts/router.js";
import { User } from "./user.js";
import { Logout } from "./logout.js";

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
        {
          attribute: "innerText",
          value: "IN",
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
        {
          attribute: "event",
          value: {
            eventType: "click",
            callback: () => {
              onNavigate("/upload");
            },
          },
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
          value: "user-wrapper",
        },
      ],
    },
  ]);
  appendElements([User(), Logout()], rightIconsWrapperContent[2]);
  appendElements([rightIconsWrapperContent], navbarContent[2]);
  appendElements([navbarContent], navbar[0]);
  console.log(navbar);
  return navbar;
};

// const hamburger = document.querySelector("#hamburger");
// const aside = document.querySelector(".sidebar-default-state");
// let isOpen = true;
// hamburger.addEventListener("click", () => {
//   if (isOpen) {
//     isOpen = !isOpen;
//     aside.removeAttribute("id");
//     return;
//   }
//   isOpen = !isOpen;
//   aside.setAttribute("id", "sidebar");
// });
