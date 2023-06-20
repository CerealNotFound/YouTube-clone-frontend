import { htmlComponent, appendElements } from "../scripts/htmlComponents.js";
import { onNavigate } from "../scripts/router.js";
import { signupHandler } from "../scripts/signupHandler.js";

export const signupForm = () => {
  const form = htmlComponent([
    {
      typeOfElement: "form",
      attributes: [
        {
          attribute: "id",
          value: "signup-form",
        },
        {
          attribute: "event",
          value: {
            eventType: "submit",
            callback: async (event) => {
              event.preventDefault();
              console.log("signup triggered");
              await signupHandler();
              onNavigate("/login");
            },
          },
        },
      ],
    },
  ]);

  const inputs = htmlComponent([
    {
      typeOfElement: "input",
      attributes: [
        {
          attribute: "id",
          value: "username",
        },
        {
          attribute: "type",
          value: "text",
        },
        {
          attribute: "placeholder",
          value: "Username",
        },
      ],
    },
    {
      typeOfElement: "input",
      attributes: [
        {
          attribute: "id",
          value: "avatar",
        },
        {
          attribute: "type",
          value: "text",
        },
        {
          attribute: "placeholder",
          value: "Avatar",
        },
      ],
    },
    {
      typeOfElement: "input",
      attributes: [
        {
          attribute: "id",
          value: "email",
        },
        {
          attribute: "type",
          value: "text",
        },
        {
          attribute: "placeholder",
          value: "Email",
        },
      ],
    },
    {
      typeOfElement: "input",
      attributes: [
        {
          attribute: "id",
          value: "password",
        },
        {
          attribute: "type",
          value: "password",
        },
        {
          attribute: "placeholder",
          value: "Password",
        },
      ],
    },
  ]);

  const formActionsWrapper = htmlComponent([
    {
      typeOfElement: "div",
      attributes: [
        {
          attribute: "id",
          value: "form-actions-wrapper",
        },
      ],
    },
  ]);

  const formActionsWrapperContent = htmlComponent([
    {
      typeOfElement: "a",
      attributes: [
        {
          attribute: "id",
          value: "create-account",
        },
        {
          attribute: "innerText",
          value: "Log in",
        },
        {
          attribute: "event",
          value: {
            eventType: "click",
            callback: () => {
              onNavigate("/login");
            },
          },
        },
      ],
    },
    {
      typeOfElement: "input",
      attributes: [
        {
          attribute: "type",
          value: "submit",
        },
        {
          attribute: "value",
          value: "Create",
        },
        {
          attribute: "id",
          value: "submit",
        },
      ],
    },
  ]);

  appendElements([formActionsWrapperContent], formActionsWrapper[0]);

  appendElements([inputs, formActionsWrapper], form[0]);

  return form;
};
