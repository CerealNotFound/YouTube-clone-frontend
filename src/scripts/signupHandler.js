export const signupHandler = async () => {
  const username = document.querySelector("#username").value;
  const avatar = document.querySelector("#avatar").value;
  const email = document.querySelector("#email").value;
  const password = document.querySelector("#password").value;
  console.log(email);
  console.log(password);
  console.log(avatar);
  console.log(username);

  try {
    await fetch("https://youtube-clone-server.onrender.com/create-account", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: email,
        password: password,
        avatar: avatar,
        username: username,
      }),
    })
      .then((res) => {
        console.log("Successfully created user 😄");
        // loginCred = res;
      })
      .catch((error) => {
        console.error("Failed to create user", error);
        return;
      });
  } catch (error) {
    console.error("Error occured while creating users", error);
    return;
  }
};
