export const addUser = () => {
  fetch("https://youtube-clone-server.onrender.com/api/users")
    .then((resposne) => resposne.json())
    .then((res) => {
      localStorage.setItem("user", JSON.stringify(res[0]));
    })
    .catch((error) => {
      console.log(`Error occured while fetching users: ${error}`);
    });
};
