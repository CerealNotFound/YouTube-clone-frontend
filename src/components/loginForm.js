import {
  htmlComponent,
  appendElements,
  divComponent,
} from "../scripts/htmlComponents.js";

export const loginForm = () => {
  const form = htmlComponent([
    {
      typeOfElement: "form",
      attributes: [
        {
          attribute: "id",
          value: "login-form",
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

  const otherFormActions = htmlComponent([
    divComponent("form-otheractions", "Forgot password?"),
  ]);

  const guestModeWrapper = htmlComponent([
    {
      typeOfElement: "div",
      attributes: [
        {
          attribute: "id",
          value: "guest-mode-wrapper",
        },
      ],
    },
  ]);

  const guestModeText = htmlComponent([
    {
      typeOfElement: "div",
      attributes: [
        {
          attribute: "id",
          value: "guest-mode-text",
        },
      ],
    },
  ]);

  appendElements([guestModeText, otherFormActions], guestModeWrapper[0]);

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
          value: "Create account",
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
          value: "Next",
        },
        {
          attribute: "id",
          value: "submit",
        },
      ],
    },
  ]);

  appendElements([formActionsWrapperContent], formActionsWrapper[0]);

  appendElements(
    [inputs, otherFormActions, guestModeWrapper, formActionsWrapper],
    form[0]
  );

  return form;
};
