export const htmlComponent = (elements) => {
  let htmlComponent = [];
  let component;
  elements.map((element) => {
    if (element.typeOfElement != "svg" && element.typeOfElement != "path") {
      component = document.createElement(element.typeOfElement);
      element.attributes.map((htmlAttribute) => {
        if (htmlAttribute.attribute == "innerText") {
          component.innerText = htmlAttribute.value;
        } else {
          htmlAttribute.attribute == "class"
            ? component.classList.add(htmlAttribute.value)
            : component.setAttribute(
                htmlAttribute.attribute,
                htmlAttribute.value
              );
        }
      });
      htmlComponent.push(component);
    } else {
      component = document.createElementNS(
        "http://www.w3.org/2000/svg",
        element.typeOfElement
      );
      element.attributes.map((htmlAttribute) => {
        component.setAttribute(htmlAttribute.attribute, htmlAttribute.value);
      });
      htmlComponent.push(component);
    }
  });
  return htmlComponent;
};

export const divComponent = (divClass = "", divText = "") => {
  return {
    typeOfElement: "div",
    attributes:
      divText != ""
        ? divClass != ""
          ? [
              {
                attribute: "class",
                value: divClass,
              },
              {
                attribute: "innerText",
                value: divText,
              },
            ]
          : [
              {
                attribute: "innerText",
                value: divText,
              },
            ]
        : [
            {
              attribute: "class",
              value: divClass,
            },
          ],
  };
};

export const appendElements = (children = [], parent) => {
  const appendToParent = (element) => {
    parent.appendChild(element);
  };

  children.forEach((child) => {
    child.forEach(appendToParent);
  });
};
