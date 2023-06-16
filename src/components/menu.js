import {
  htmlComponent,
  appendElements,
  divComponent,
} from "../scripts/htmlComponents.js";

import { postData } from "../scripts/postingData.js";

export const Menu = () => {
  const endpoint = "https://youtube-clone-server.onrender.com/api/filters";

  // filters.map((filter) => {
  //   postData(filter, endpoint);
  // });

  fetch(endpoint)
    .then((response) => response.json())
    .then((res) => {
      filtersHandler(res);
    })
    .catch((err) => console.log("err", err));
  const menuWrapper = htmlComponent([
    {
      typeOfElement: "menu",
      attributes: [
        {
          attribute: "id",
          value: "menu-wrapper",
        },
      ],
    },
  ]);

  const filtersHandler = (categories) => {
    const sortedCategories = categories.sort((a, b) => a.id - b.id);
    sortedCategories.map((category) => {
      const menuCategory = htmlComponent([
        divComponent("menu-category", category.filter),
      ]);

      appendElements([menuCategory], menuWrapper[0]);
    });
  };
  return menuWrapper;
};
