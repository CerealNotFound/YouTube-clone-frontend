export const logoutHandler = async () => {
  console.log("logout initiated");
  try {
    await fetch("http://127.0.0.1:3030/logout")
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
