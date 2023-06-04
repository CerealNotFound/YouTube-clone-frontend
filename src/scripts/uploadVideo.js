import { postData } from "./postingData.js";

const user = JSON.parse(localStorage.getItem("user"));
console.log(user);

let isVideo = false;
let idTracker = parseInt(localStorage.getItem("id"));
idTracker += 1;
let formattedDuration;

const formatDuration = (duration) => {
  const minutes = Math.floor(duration / 60);
  const seconds = Math.floor(duration % 60);

  const formattedMinutes = String(minutes).padStart(2, "0");
  const formattedSeconds = String(seconds).padStart(2, "0");

  return `${formattedMinutes}:${formattedSeconds}`;
};

document.querySelector("#select-input").addEventListener("change", (event) => {
  const file = event.target.files[0];
  const video = document.createElement("video");

  //Wait for metadata to be loaded
  video.addEventListener("loadedmetadata", () => {
    //access the duration of the video
    let notFormattedduration = video.duration;
    formattedDuration = formatDuration(notFormattedduration);
  });

  video.preload = "metadata"; // Set preload to 'metadata' to only load video metadata, not the whole video file

  video.src = URL.createObjectURL(file);

  // Attach the video element to the document temporarily to trigger metadata loading
  document.body.appendChild(video);

  // Remove the video element from the document after metadata is loaded
  video.addEventListener("loadeddata", function () {
    document.body.removeChild(video);
    isVideo = true;
  });
});

let uploaded_on;

const formatDate = (date) => {
  var d = new Date(date),
    month = "" + (d.getMonth() + 1),
    day = "" + d.getDate(),
    year = d.getFullYear();

  if (month.length < 2) month = "0" + month;
  if (day.length < 2) day = "0" + day;

  return [year, month, day].join("-");
};

document.querySelector("#submit").addEventListener("click", () => {
  let title = document.querySelector("#input-title").value;
  let thumbnail = document.querySelector("#input-thumbnail").value;

  if (title && thumbnail && isVideo) {
    uploaded_on = formatDate(new Date());
    const data = {
      id: idTracker,
      title: title,
      thumbnail: thumbnail,
      duration: formattedDuration,
      creator: user.username,
      avatar: user.avatar,
      views: 0,
      uploaded_on: uploaded_on,
      verified: user.is_verified,
    };
    const endpoint = "https://youtube-clone-server.onrender.com/api/videos";
    postData(data, endpoint);
    localStorage.setItem("id", idTracker.toString());
    alert("Video posted successfully 😎🔥");
  } else if (!title || !thumbnail) {
    alert("Enter a title and thumbnail");
  } else {
    alert("Select a video to be uploaded");
  }
});
