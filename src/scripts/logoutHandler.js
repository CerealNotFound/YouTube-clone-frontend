export const logoutHandler = async () => {
  console.log("logout initiated");
  try {
    await fetch("https://youtube-clone-server.onrender.com/logout")
      .then((res) => {
        console.log("Successfully logged out 👍");
      })
      .catch((error) => {
        console.error("error occured", error);
        return;
      });
  } catch (error) {
    console.error("Error occured while logging out", error);
    return;
  }
};
