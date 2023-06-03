import {
  htmlComponent,
  appendElements,
  divComponent,
} from "../scripts/htmlComponents.js";

import { postData } from "../scripts/postingData.js";

const filters = [
  {
    id: 1,
    filter: "All",
  },
  {
    id: 2,
    filter: "Gaming",
  },
  {
    id: 3,
    filter: "Music",
  },
  {
    id: 4,
    filter: "Live",
  },
  {
    id: 5,
    filter: "Comedy",
  },
  {
    id: 6,
    filter: "Mixes",
  },
  {
    id: 7,
    filter: "Podcast",
  },
  {
    id: 8,
    filter: "Motivation",
  },
  {
    id: 9,
    filter: "Biology",
  },
  {
    id: 10,
    filter: "Computer Programming",
  },
  {
    id: 11,
    filter: "Tools",
  },
];

const endpoint = "https://youtube-clone-server.onrender.com/api/filters";

// filters.map((filter) => {
//   postData(filter, endpoint);
// });

fetch(endpoint)
  .then((response) => response.json())
  .then((res) => {
    filtersHandler(res);
    console.log("res", res);
  })
  .catch((err) => console.log("err", err));

const menuWrapper = document.querySelector("#menu-wrapper");

const filtersHandler = (categories) => {
  const sortedCategories = categories.sort((a, b) => a.id - b.id);
  sortedCategories.map((category) => {
    console.log(category);
    const menuCategory = htmlComponent([
      divComponent("menu-category", category.filter),
    ]);

    appendElements([menuCategory], menuWrapper);
  });
};
