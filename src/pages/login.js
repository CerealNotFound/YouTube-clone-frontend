import { htmlComponent, appendElements } from "../scripts/htmlComponents.js";
import { loginForm } from "../components/loginForm.js";
import { googleLogo } from "../assets/googleLogo.js";

export const Login = () => {
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
          value: "Sign in",
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
          value: "to continue to YouTube",
        },
      ],
    },
  ]);

  appendElements([loginWrapperContent, loginForm()], loginWrapper[0]);
  return loginWrapper;
};
