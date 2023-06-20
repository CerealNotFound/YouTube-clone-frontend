import { htmlComponent, appendElements } from "../scripts/htmlComponents.js";
import { Navbar } from "../components/navbar.js";
import { Menu } from "../components/menu.js";
import { Sidebar } from "../components/sidebar.js";
import { Videos } from "../components/videos.js";

export const Home = () => {
  const page = htmlComponent([
    {
      typeOfElement: "div",
      attributes: [
        {
          attribute: "id",
          value: "home-page",
        },
      ],
    },
  ]);
  const main = htmlComponent([{ typeOfElement: "main" }]);
  const header = htmlComponent([{ typeOfElement: "header" }]);
  appendElements([Navbar()], header[0]);
  const sidebar = htmlComponent([
    {
      typeOfElement: "div",
      attributes: [
        {
          attribute: "id",
          value: "sidebar",
        },
      ],
    },
  ]);
  const section = htmlComponent([
    {
      typeOfElement: "section",
    },
  ]);
  console.log(Menu(), Videos());
  appendElements([Menu(), Videos()], section[0]);
  appendElements([sidebar, section], main[0]);
  appendElements([Sidebar()], sidebar[0]);
  appendElements([header, main], page[0]);

  return page;
};
