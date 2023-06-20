import {
  htmlComponent,
  appendElements,
  divComponent,
} from "../scripts/htmlComponents.js";
import { logoutHandler } from "../scripts/logoutHandler.js";
import { onNavigate } from "../scripts/router.js";

export const Logout = () => {
  const logout = htmlComponent([divComponent("logout-modal-hidden")]);
  const logoutContent = htmlComponent([
    {
      typeOfElement: "input",
      attributes: [
        {
          attribute: "id",
          value: "logout-button",
        },
        {
          attribute: "type",
          value: "button",
        },
        {
          attribute: "value",
          value: "Logout",
        },
        {
          attribute: "event",
          value: {
            eventType: "click",
            callback: () => {
              console.log("logout clicked");
              logoutHandler();
              localStorage.removeItem("loggedInCred");
              onNavigate("/login");
            },
          },
        },
      ],
    },
  ]);
  appendElements([logoutContent], logout[0]);

  return logout;
};
