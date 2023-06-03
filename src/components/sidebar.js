import {
  htmlComponent,
  appendElements,
  divComponent,
} from "../scripts/htmlComponents.js";

const navigationFields = [
  {
    navigationField: "Home",
    logo: "m12 4.44 7 6.09V20h-4v-6H9v6H5v-9.47l7-6.09m0-1.32-8 6.96V21h6v-6h4v6h6V10.08l-8-6.96z",
  },
  {
    navigationField: "Shorts",
    logo: "M10 14.65v-5.3L15 12l-5 2.65zm7.77-4.33-1.2-.5L18 9.06c1.84-.96 2.53-3.23 1.56-5.06s-3.24-2.53-5.07-1.56L6 6.94c-1.29.68-2.07 2.04-2 3.49.07 1.42.93 2.67 2.22 3.25.03.01 1.2.5 1.2.5L6 14.93c-1.83.97-2.53 3.24-1.56 5.07.97 1.83 3.24 2.53 5.07 1.56l8.5-4.5c1.29-.68 2.06-2.04 1.99-3.49-.07-1.42-.94-2.68-2.23-3.25zm-.23 5.86-8.5 4.5c-1.34.71-3.01.2-3.72-1.14-.71-1.34-.2-3.01 1.14-3.72l2.04-1.08v-1.21l-.69-.28-1.11-.46c-.99-.41-1.65-1.35-1.7-2.41-.05-1.06.52-2.06 1.46-2.56l8.5-4.5c1.34-.71 3.01-.2 3.72 1.14.71 1.34.2 3.01-1.14 3.72L15.5 9.26v1.21l1.8.74c.99.41 1.65 1.35 1.7 2.41.05 1.06-.52 2.06-1.46 2.56z",
  },
  {
    navigationField: "Subscriptions",
    logo: "M10 18v-6l5 3-5 3zm7-15H7v1h10V3zm3 3H4v1h16V6zm2 3H2v12h20V9zM3 10h18v10H3V10z",
  },
];

const playlists = [
  {
    playlist: "Library",
    logo: "m11 7 6 3.5-6 3.5V7zm7 13H4V6H3v15h15v-1zm3-2H6V3h15v15zM7 17h13V4H7v13z",
  },
  {
    playlist: "History",
    logo: "M14.97 16.95 10 13.87V7h2v5.76l4.03 2.49-1.06 1.7zM22 12c0 5.51-4.49 10-10 10S2 17.51 2 12h1c0 4.96 4.04 9 9 9s9-4.04 9-9-4.04-9-9-9C8.81 3 5.92 4.64 4.28 7.38c-.11.18-.22.37-.31.56L3.94 8H8v1H1.96V3h1v4.74c.04-.09.07-.17.11-.25.11-.22.23-.42.35-.63C5.22 3.86 8.51 2 12 2c5.51 0 10 4.49 10 10z",
  },
  {
    playlist: "Your videos",
    logo: "m10 8 6 4-6 4V8zm11-5v18H3V3h18zm-1 1H4v16h16V4z",
  },
  {
    playlist: "Watch later",
    logo: "M14.97 16.95 10 13.87V7h2v5.76l4.03 2.49-1.06 1.7zM12 3c-4.96 0-9 4.04-9 9s4.04 9 9 9 9-4.04 9-9-4.04-9-9-9m0-1c5.52 0 10 4.48 10 10s-4.48 10-10 10S2 17.52 2 12 6.48 2 12 2z",
  },
  {
    playlist: "Liked videos",
    logo: "M18.77,11h-4.23l1.52-4.94C16.38,5.03,15.54,4,14.38,4c-0.58,0-1.14,0.24-1.52,0.65L7,11H3v10h4h1h9.43 c1.06,0,1.98-0.67,2.19-1.61l1.34-6C21.23,12.15,20.18,11,18.77,11z M7,20H4v-8h3V20z M19.98,13.17l-1.34,6 C18.54,19.65,18.03,20,17.43,20H8v-8.61l5.6-6.06C13.79,5.12,14.08,5,14.38,5c0.26,0,0.5,0.11,0.63,0.3 c0.07,0.1,0.15,0.26,0.09,0.47l-1.52,4.94L13.18,12h1.35h4.23c0.41,0,0.8,0.17,1.03,0.46C19.92,12.61,20.05,12.86,19.98,13.17z",
  },
];

const subscriptions = [
  {
    avatar:
      "https://yt3.ggpht.com/K1_AyjHQIl7g215rXyjEcaTibjxNYYGtzt6FR7kHSsBYz7vFJUy6FiqothZ5u4VhQQZ3dMlNnw=s88-c-k-c0x00ffffff-no-rj",
    name: "Nikhil Kamath",
  },
  {
    avatar:
      "https://yt3.ggpht.com/ytc/AGIKgqNCRrC6hW8klZgz-7mOV3EHvqrVHSRjBfgsgn-q3A=s88-c-k-c0x00ffffff-no-rj",
    name: "Samay Raina",
  },
  {
    avatar:
      "https://yt3.ggpht.com/oVSuJbeBX7sTZz3CuQNRO5Gm-sZsBxp6sGMF5e8WjVjJdUiUMOFRzfVLMyRtHru_ysUEiEhDHqY=s88-c-k-c0x00ffffff-no-rj",
    name: "Shwetabh Gangwar",
  },
  {
    avatar:
      "https://yt3.ggpht.com/ytc/AGIKgqOTrUBg3_kEOIlfFtjWPb54TXf_7077Pk7Cae2I5Q=s88-c-k-c0x00ffffff-no-rj",
    name: "Varun Mayya",
  },
  {
    avatar:
      "https://yt3.ggpht.com/5ONImZvpa9_hYK12Xek2E2JLzRc732DWsZMX2F-AZ1cTutTQLBuAmcEtFwrCgypqJncl5HrV2w=s88-c-k-c0x00ffffff-no-rj",
    name: "Andrew Huberman",
  },
  {
    avatar:
      "https://yt3.ggpht.com/m_e5-z-5EPsn5-qRZkx9amJhVdZk_jJxwDY_GeQbO0HDoJZF7TCtdZZEWWFFYT3nFFE7paNT=s88-c-k-c0x00ffffff-no-rj",
    name: "Aevy Tv",
  },
  {
    avatar:
      "https://yt3.ggpht.com/C3fKB0jsA7Axt8Bb1nmxSMWIhmgx1RRd324HDcqxx9S6X6jIlcsI9LegIyn5pG6Q-mq5szyViA=s88-c-k-c0x00ffffff-no-rj",
    name: "100x Engineers",
  },
  {
    avatar:
      "https://yt3.ggpht.com/9JfjNA8x4Bx_lMNfbac7mA69nlVVRKS7q86_rFrRR6hVDYCyflStTi9E1zWrhOvIzUkJ1Gsv=s88-c-k-c0x00ffffff-no-rj",
    name: "Overpowered",
  },
  {
    avatar:
      "https://yt3.ggpht.com/Ko0UXEQL6PLt4CE_nQkI8aL6llY_GtWu-rQoZ3tgh1Gsmy7qKOrvazU4nBQOZ3kl0TZ3bivz4wM=s176-c-k-c0x00ffffff-no-rj-mo",
    name: "Jordan B Peterson",
  },
  {
    avatar:
      "https://yt3.ggpht.com/q_aiLvw-dbPsSyQQxyBDJZLamcdcVvW3BlYPwhhewQ7ZpFhI-2d7gvvL23ylTKI_GksxeBhR=s88-c-k-c0x00ffffff-no-rj",
    name: "Dr. Baland Jalal",
  },
];

const asideWrapper = document.querySelector("#aside-wrapper");

const asideWrapperContent = htmlComponent([
  divComponent("aside-link-wrapper"),
  divComponent("aside-link-wrapper"),
  divComponent("aside-link-wrapper"),
]);

appendElements([asideWrapperContent], asideWrapper);

navigationFields.map((field) => {
  const navigationField = htmlComponent([divComponent("aside-link")]);

  const navigationFieldLogo = htmlComponent([
    {
      typeOfElement: "svg",
      attributes: [
        {
          attribute: "viewBox",
          value: "0 0 24 24",
        },
        {
          attribute: "width",
          value: "24",
        },
        {
          attribute: "height",
          value: "24",
        },
        {
          attribute: "class",
          value: "aside-link-logo",
        },
      ],
    },
  ]);

  const logoIcon = htmlComponent([
    {
      typeOfElement: "path",
      attributes: [
        {
          attribute: "d",
          value: field.logo,
        },
        {
          attribute: "fill",
          value: "#aaa",
        },
      ],
    },
  ]);

  appendElements([logoIcon], navigationFieldLogo[0]);

  const navigationFieldTitle = htmlComponent([
    {
      typeOfElement: "span",
      attributes: [
        {
          attribute: "innerText",
          value: field.navigationField,
        },
      ],
    },
  ]);

  appendElements(
    [navigationFieldLogo, navigationFieldTitle],
    navigationField[0]
  );

  appendElements([navigationField], asideWrapperContent[0]);
});

playlists.map((field) => {
  const playlist = htmlComponent([divComponent("aside-link")]);

  const playlistLogo = htmlComponent([
    {
      typeOfElement: "svg",
      attributes: [
        {
          attribute: "viewBox",
          value: "0 0 24 24",
        },
        {
          attribute: "width",
          value: "24",
        },
        {
          attribute: "height",
          value: "24",
        },
        {
          attribute: "class",
          value: "aside-link-logo",
        },
      ],
    },
  ]);

  const logoIcon = htmlComponent([
    {
      typeOfElement: "path",
      attributes: [
        {
          attribute: "d",
          value: field.logo,
        },
        {
          attribute: "fill",
          value: "#aaa",
        },
      ],
    },
  ]);

  appendElements([logoIcon], playlistLogo[0]);

  const playlistTitle = htmlComponent([
    {
      typeOfElement: "span",
      attributes: [
        {
          attribute: "innerText",
          value: field.playlist,
        },
      ],
    },
  ]);

  appendElements([playlistLogo, playlistTitle], playlist[0]);

  appendElements([playlist], asideWrapperContent[1]);
});

subscriptions.map((field) => {
  const subscription = htmlComponent([divComponent("aside-link")]);

  const avatar = htmlComponent([
    {
      typeOfElement: "img",
      attributes: [
        {
          attribute: "src",
          value: field.avatar,
        },
        {
          attribute: "style",
          value: "border-radius: 50%",
        },
      ],
    },
  ]);

  const channelName = htmlComponent([
    {
      typeOfElement: "span",
      attributes: [
        {
          attribute: "innerText",
          value: field.name,
        },
      ],
    },
  ]);

  appendElements([avatar, channelName], subscription[0]);

  appendElements([subscription], asideWrapperContent[2]);
});
