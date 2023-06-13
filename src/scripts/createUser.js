document
  .querySelector("#signup-form")
  .addEventListener("submit", async (event) => {
    event.preventDefault();

    const username = document.querySelector("#username").value;
    const email = document.querySelector("#email").value;
    const avatar = document.querySelector("#avatar").value;
    const password = document.querySelector("#password").value;

    if (email && username && avatar && password) {
      try {
        await fetch("http://127.0.0.1:3030/create-account", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            username: username,
            email: email,
            avatar: avatar,
            password: password,
          }),
        })
          .then((res) => {
            console.log("Successfully created user 😄", res);
            return res;
          })
          .catch((error) => {
            console.error("unable to create users!", error);
            return;
          });
      } catch (error) {
        console.error("error occured while creating users", error);
        return;
      }
    }
  });
