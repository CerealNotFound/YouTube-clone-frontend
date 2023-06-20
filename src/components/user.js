import { appendElements, htmlComponent } from "../scripts/htmlComponents.js";

export const User = () => {
  const userSession = JSON.parse(localStorage.getItem("loggedInCred"));
  const user = userSession.session.user.user_metadata;
  console.log(user);

  const userAvatarWrapper = htmlComponent([
    {
      typeOfElement: "div",
      attributes: [
        {
          attribute: "id",
          value: "user-avatar-wrapper",
        },
        {
          attribute: "event",
          value: {
            eventType: "click",
            callback: () => {
              let modalHidden = document.querySelector(".logout-modal-hidden");
              let modal = document.querySelector(".logout-modal");
              if (modalHidden) {
                modalHidden.classList.remove("logout-modal-hidden");
                modalHidden.classList.add("logout-modal");
              } else {
                modal.classList.add("logout-modal-hidden");
                modal.classList.remove("logout-modal");
              }
            },
          },
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
