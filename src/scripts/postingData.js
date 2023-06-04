export const postData = (data, endpoint) => {
  console.log(JSON.stringify(data));
  fetch(endpoint, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  })
    .then((res) => {
      if (res.ok) {
        console.log(`data added at: ${endpoint}!!☕`);
      } else {
        throw new Error(
          `HTTP error! Status: ${res.status} at endpoint: ${endpoint}`
        );
      }
    })
    .catch((error) => {
      console.log(`posting of data failed at: ${endpoint}\nerror: ${error}`);
    });
};
