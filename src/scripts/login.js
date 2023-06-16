document
  .querySelector("#login-form")
  .addEventListener("submit", async (event) => {
    event.preventDefault();

    const email = document.querySelector("#email").value;
    const password = document.querySelector("#password").value;
    console.log(email);
    console.log(password);

    if (email && password) {
      try {
        await fetch("http://127.0.0.1:3030/login", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            userEmail: email,
            userPassword: password,
          }),
        })
          .then((res) => {
            console.log("Authentication successful, welcome back 😊", res);
          })
          .catch((error) => {
            console.error("error occured", error);
            return;
          });
      } catch (error) {
        console.error("Error occured while authenticating", error);
        return;
      }
    }
  });
