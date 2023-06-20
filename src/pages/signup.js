import { htmlComponent, appendElements } from "../scripts/htmlComponents.js";
import { signupForm } from "../components/signupForm.js";
import { googleLogo } from "../assets/googleLogo.js";

export const Signup = () => {
  const loginWrapper = htmlComponent([
    {
      typeOfElement: "div",
      attributes: [
        {
          attribute: "id",
          value: "login-wrapper",
        },
        {
          attribute: "innerHTML",
          value: googleLogo,
        },
      ],
    },
  ]);

  const loginWrapperContent = htmlComponent([
    {
      typeOfElement: "h2",
      attributes: [
        {
          attribute: "class",
          value: "login-wrapper-text",
        },
        {
          attribute: "innerText",
          value: "Create a Google Account",
        },
      ],
    },
    {
      typeOfElement: "p",
      attributes: [
        {
          attribute: "class",
          value: "login-wrapper-text",
        },
        {
          attribute: "id",
          value: "sign-in-to-text",
        },
        {
          attribute: "innerText",
          value: "to YouTube",
        },
      ],
    },
  ]);

  appendElements([loginWrapperContent, signupForm()], loginWrapper[0]);
  return loginWrapper;
};
