import axios from "axios";

export const saveUserInfo = (user) => {
  const currentUser = {
    email: user?.email,
    name: user?.displayName,
    photo: user?.photoURL,
  };
  axios
    .put(`${import.meta.env.VITE_API_URL}/users/${user?.email}`, {
      currentUser,
    })
    .then((res) => {
      console.log(res.data);
    });
};
