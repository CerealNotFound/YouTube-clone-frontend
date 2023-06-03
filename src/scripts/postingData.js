export const postData = (data, endpoint) => {
  console.log(JSON.stringify(data));
  fetch(endpoint, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  })
    .then((res) => res.json())
    .then((res) => {
      console.log(res);
      res.status(200).send(`data added at: ${endpoint}!!☕`);
    })
    .catch((error) => {
      console.log(`posting of data failed at: ${endpoint}\nerror: ${error}`);
    });
};
