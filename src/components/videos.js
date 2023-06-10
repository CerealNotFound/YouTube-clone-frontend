import {
  htmlComponent,
  appendElements,
  divComponent,
} from "../scripts/htmlComponents.js";

import { postData } from "../scripts/postingData.js";

const endpoint = "https://youtube-clone-server.onrender.com/api/videos";

// filters.map((filter) => {
//   postData(filter, endpoint);
// });

//backend [] => JSON => String (network) => FE => String to JSON => []

// const patchData = [
//   {
//     id: 2,
//     data: {
//       video: "f3b74c87fd06006c9613971ba6146258.mp4",
//     },
//   },
//   {
//     id: 3,
//     data: {
//       video: "f3b74c87fd06006c9613971ba6146258.mp4",
//     },
//   },
//   {
//     id: 4,
//     data: {
//       video: "f3b74c87fd06006c9613971ba6146258.mp4",
//     },
//   },
//   {
//     id: 5,
//     data: {
//       video: "f3b74c87fd06006c9613971ba6146258.mp4",
//     },
//   },
//   {
//     id: 6,
//     data: {
//       video: "f3b74c87fd06006c9613971ba6146258.mp4",
//     },
//   },
//   {
//     id: 7,
//     data: {
//       video: "f3b74c87fd06006c9613971ba6146258.mp4",
//     },
//   },
//   {
//     id: 8,
//     data: {
//       video: "f3b74c87fd06006c9613971ba6146258.mp4",
//     },
//   },
//   {
//     id: 9,
//     data: {
//       video: "f3b74c87fd06006c9613971ba6146258.mp4",
//     },
//   },
//   {
//     id: 10,
//     data: {
//       video: "f3b74c87fd06006c9613971ba6146258.mp4",
//     },
//   },
// ];

// patchData.map((data) => {
//   fetch("http://127.0.0.1:3030/api/videos", {
//     method: "PATCH",
//     headers: {
//       "Content-Type": "application/json",
//     },
//     body: JSON.stringify(data),
//   })
//     .then((res) => {
//       console.log("record updated successfully🧋");
//     })
//     .catch((err) => {
//       console.error(err, "record update failed!");
//     });
// });

const formatNumberOfViews = (views) => {
  let formattedViews;
  if (views >= 1000000) {
    formattedViews = (views / 1000000).toFixed(1);
    return formattedViews.endsWith(".0")
      ? formattedViews.slice(0, -2) + "M"
      : formattedViews + "M";
  } else if (views >= 1000) {
    formattedViews = (views / 1000).toFixed(1);
    return formattedViews.endsWith(".0")
      ? formattedViews.slice(0, -2) + "K"
      : formattedViews + "K";
  } else {
    return views;
  }
};

const uniformDate = (date) => {
  // Convert the stored date to the user's local timezone

  const userTimezone = Intl.DateTimeFormat().resolvedOptions().timeZone;
  const userOffset = new Date().getTimezoneOffset() * 60000; // Offset in milliseconds
  const userTimestamp = new Date(`${date}T00:00:00`).getTime() - userOffset;
  const localDate = new Date(userTimestamp).toLocaleString(undefined, {
    timeZone: userTimezone,
  });

  const onlyDate = localDate.split(",")[0].trim();
  const dateParts = onlyDate.split("/");
  const year = dateParts[2];
  const month = dateParts[0].padStart(2, "0"); // Zero-pad the month if necessary
  const day = dateParts[1].split(",")[0].trim().padStart(2, "0"); // Extract the day, trim any whitespace, and zero-pad if necessary

  const formattedDate = `${day}-${month}-${year}`;

  return formattedDate;
};

const videoWrapper = document.querySelector("#videos");

const videosHandler = (videos) => {
  const sortedVideos = videos.sort((a, b) => a.id - b.id);
  sortedVideos.map((video) => {
    const videoTile = htmlComponent([divComponent("video-tile")]);

    const videoThumbnailWrapper = htmlComponent([
      divComponent("video-thumbnail-wrapper"),
    ]);

    const videoThumbnail = htmlComponent([
      {
        typeOfElement: "img",
        attributes: [
          {
            attribute: "class",
            value: "video-thumbnail",
          },
          {
            attribute: "src",
            value: video.thumbnail,
          },
        ],
      },
      divComponent("video-duration", video.duration),
    ]);

    const videoInfoWrapper = htmlComponent([
      divComponent("video-info-wrapper"),
    ]);

    const creatorAvatar = htmlComponent([
      {
        typeOfElement: "img",
        attributes: [
          {
            attribute: "class",
            value: "creator-avatar",
          },
          {
            attribute: "src",
            value: video.avatar,
          },
        ],
      },
    ]);

    const videoTitleWrapper = htmlComponent([
      divComponent("video-title-wrapper"),
    ]);

    const channelName = htmlComponent([divComponent("channel-name-wrapper")]);

    const creator = htmlComponent([divComponent("creator", video.creator)]);

    const videoTitle = htmlComponent([
      {
        typeOfElement: "h4",
        attributes: [
          {
            attribute: "innerText",
            value: video.title,
          },
        ],
      },
    ]);

    if (video.verified == true) {
      const creatorVerified = htmlComponent([
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
              value: "verified-icon",
            },
          ],
        },
      ]);

      const verifiedIcon = htmlComponent([
        {
          typeOfElement: "path",
          attributes: [
            {
              attribute: "d",
              value:
                "M12,2C6.5,2,2,6.5,2,12c0,5.5,4.5,10,10,10s10-4.5,10-10C22,6.5,17.5,2,12,2z M9.8,17.3l-4.2-4.1L7,11.8l2.8,2.7L17,7.4 l1.4,1.4L9.8,17.3z",
            },
            {
              attribute: "fill",
              value: "#aaa",
            },
          ],
        },
      ]);

      appendElements([verifiedIcon], creatorVerified[0]);
      appendElements([creator, creatorVerified], channelName[0]);
    } else {
      appendElements([creator], channelName[0]);
    }

    const viewsUploadWrapper = htmlComponent([
      divComponent("views-uploadedon-wrapper"),
    ]);

    const viewsUploadWrapperContent = htmlComponent([
      {
        typeOfElement: "span",
        attributes: [
          {
            attribute: "innerText",
            value: formatNumberOfViews(video.views),
          },
        ],
      },
      {
        typeOfElement: "span",
        attributes: [
          {
            attribute: "innerText",
            value: "·",
          },
          {
            attribute: "class",
            value: "separator",
          },
        ],
      },
      {
        typeOfElement: "span",
        attributes: [
          {
            attribute: "innerText",
            value: uniformDate(video.uploaded_on),
          },
        ],
      },
    ]);
    appendElements([viewsUploadWrapperContent], viewsUploadWrapper[0]);
    appendElements([videoThumbnail], videoThumbnailWrapper[0]);
    appendElements([creatorAvatar, videoTitleWrapper], videoInfoWrapper[0]);
    appendElements(
      [videoTitle, channelName, viewsUploadWrapper],
      videoTitleWrapper[0]
    );
    appendElements([videoThumbnailWrapper, videoInfoWrapper], videoTile[0]);
    appendElements([videoTile], videoWrapper);
  });
};

//GET
await fetch(endpoint)
  .then((response) => response.json())
  .then((res) => {
    localStorage.setItem("id", res.length.toString());
    videosHandler(res);
  })
  .catch((err) => console.log("err", err));
