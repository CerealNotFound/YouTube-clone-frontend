import { appendElements, htmlComponent } from "../scripts/htmlComponents.js";
import { addUser } from "../scripts/fetchUser.js";

export const User = () => {
  addUser();

  const user = JSON.parse(localStorage.getItem("user"));

  const userAvatarWrapper = htmlComponent([
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

  appendElements([userAvatar], userAvatarWrapper[0]);

  return userAvatarWrapper;
};
