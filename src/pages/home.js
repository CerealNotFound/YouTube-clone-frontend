import { htmlComponent, appendElements } from "../scripts/htmlComponents.js";
import { Header } from "../components/header.js";
import { User } from "../components/user.js";
import { Menu } from "../components/menu.js";
import { Sidebar } from "../components/sidebar.js";
import { Videos } from "../components/videos.js";

export const Home = () => {
  const page = htmlComponent([{ typeOfElement: "div" }]);
  const main = htmlComponent([{ typeOfElement: "main" }]);
  const header = htmlComponent([{ typeOfElement: "header" }]);
  header[0].innerHTML = Header();
  console.log(User());
  // appendElements([User()], document.getElementById("#right-icons-wrapper"));
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
  // console.log(videos);
  const section = htmlComponent([{ typeOfElement: "section" }]);
  console.log(Menu(), Videos());
  appendElements([Menu(), Videos()], section[0]);
  appendElements([sidebar, section], main[0]);
  appendElements([Sidebar()], sidebar[0]);
  appendElements([header, main], page[0]);

  return page;
};
