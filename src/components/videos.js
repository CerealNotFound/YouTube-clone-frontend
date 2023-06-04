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

//GET
fetch(endpoint)
  .then((response) => response.json())
  .then((res) => {
    // console.log(res);
    localStorage.setItem("id", res[res.length - 1].id.toString());
    videosHandler(res);
  })
  .catch((err) => console.log("err", err));

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
            value: video.uploaded_on,
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
