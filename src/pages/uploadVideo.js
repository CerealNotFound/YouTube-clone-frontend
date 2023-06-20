import { cross, moreInfo } from "../assets/icons.js";
import { htmlComponent, appendElements } from "../scripts/htmlComponents.js";
import { onNavigate } from "../scripts/router.js";
import { fileHandler, uploadHandler } from "../scripts/uploadVideo.js";

export const UploadVideo = () => {
  const section = htmlComponent([
    {
      typeOfElement: "section",
      attributes: [
        {
          attribute: "id",
          value: "upload-section",
        },
      ],
    },
  ]);

  const sectionContent = htmlComponent([
    {
      typeOfElement: "div",
      attributes: [
        {
          attribute: "id",
          value: "header-wrapper",
        },
      ],
    },
    {
      typeOfElement: "div",
      attributes: [
        {
          attribute: "id",
          value: "main-content-wrapper",
        },
      ],
    },
  ]);

  const headWrapperContent = htmlComponent([
    {
      typeOfElement: "p",
      attributes: [
        {
          attribute: "id",
          value: "page-title",
        },
        {
          attribute: "innerText",
          value: "Upload videos",
        },
      ],
    },
    {
      typeOfElement: "div",
      attributes: [
        {
          attribute: "id",
          value: "right-icons",
        },
      ],
    },
  ]);

  const rightIcons = htmlComponent([
    {
      typeOfElement: "div",
      attributes: [
        {
          attribute: "class",
          value: "icons",
        },
        {
          attribute: "innerHTML",
          value: moreInfo,
        },
      ],
    },
    {
      typeOfElement: "div",
      attributes: [
        {
          attribute: "class",
          value: "icons",
        },
        {
          attribute: "innerHTML",
          value: cross,
        },
        {
          attribute: "event",
          value: {
            eventType: "click",
            callback: () => {
              onNavigate("/home");
            },
          },
        },
      ],
    },
  ]);

  appendElements([rightIcons], headWrapperContent[1]);
  appendElements([headWrapperContent], sectionContent[0]);

  const mainContent = htmlComponent([
    {
      typeOfElement: "div",
      attributes: [
        {
          attribute: "id",
          value: "arrow-group",
        },
      ],
    },
    {
      typeOfElement: "p",
      attributes: [
        {
          attribute: "id",
          value: "primary-text",
        },
        {
          attribute: "innerText",
          value: "Drag and drop video files to upload",
        },
      ],
    },
    {
      typeOfElement: "p",
      attributes: [
        {
          attribute: "id",
          value: "secondary-text",
        },
        {
          attribute: "innerText",
          value: "Your videos will be private until you publish them",
        },
      ],
    },
    {
      typeOfElement: "form",
      attributes: [
        {
          attribute: "id",
          value: "video-form",
        },
      ],
    },
  ]);

  const arrow = htmlComponent([
    {
      typeOfElement: "div",
      attributes: [
        {
          attribute: "id",
          value: "arrow",
        },
      ],
    },
    {
      typeOfElement: "div",
      attributes: [
        {
          attribute: "id",
          value: "arrow-underline",
        },
      ],
    },
  ]);

  const arrowContent = htmlComponent([
    {
      typeOfElement: "div",
      attributes: [
        {
          attribute: "id",
          value: "arrow-tip",
        },
      ],
    },
    {
      typeOfElement: "div",
      attributes: [
        {
          attribute: "id",
          value: "arrow-line",
        },
      ],
    },
  ]);

  appendElements([arrowContent], arrow[0]);
  appendElements([arrow], mainContent[0]);

  const formContent = htmlComponent([
    {
      typeOfElement: "input",
      attributes: [
        {
          attribute: "type",
          value: "file",
        },
        {
          attribute: "id",
          value: "select-input",
        },
        {
          attribute: "event",
          value: {
            eventType: "change",
            callback: () => {
              fileHandler();
            },
          },
        },
      ],
    },
    {
      typeOfElement: "label",
      attributes: [
        {
          attribute: "for",
          value: "select-input",
        },
        {
          attribute: "id",
          value: "select-button",
        },
      ],
    },
    {
      typeOfElement: "input",
      attributes: [
        {
          attribute: "id",
          value: "input-title",
        },
        {
          attribute: "type",
          value: "text",
        },
        {
          attribute: "placeholder",
          value: "Title",
        },
      ],
    },
    {
      typeOfElement: "input",
      attributes: [
        {
          attribute: "id",
          value: "input-thumbnail",
        },
        {
          attribute: "type",
          value: "text",
        },
        {
          attribute: "placeholder",
          value: "Thumbnail",
        },
      ],
    },
    {
      typeOfElement: "input",
      attributes: [
        {
          attribute: "id",
          value: "submit",
        },
        {
          attribute: "type",
          value: "submit",
        },
        {
          attribute: "event",
          value: {
            eventType: "submit",
            callback: (event) => {
              event.preventDefault();
              uploadHandler();
            },
          },
        },
      ],
    },
  ]);

  const labelContent = htmlComponent([
    {
      typeOfElement: "p",
      attributes: [
        {
          attribute: "innerText",
          value: "SELECT FILES",
        },
      ],
    },
  ]);

  appendElements([labelContent], formContent[1]);
  appendElements([formContent], mainContent[3]);
  appendElements([mainContent], sectionContent[1]);
  appendElements([sectionContent], section[0]);

  console.log(section);

  return section;
};
