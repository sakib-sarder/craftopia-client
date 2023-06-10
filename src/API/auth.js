import axios from "axios";
import { toast } from "react-hot-toast";

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

// set user role instructor
export const setInstructor = (email, refetch) => {
  const currentUser = {
    role: "Instructor",
  };
  axios
    .put(`${import.meta.env.VITE_API_URL}/users/${email}`, {
      currentUser,
    })
    .then((res) => {
      console.log(res.data);
      if (res.data.modifiedCount > 0) {
        toast.success("Successfully make instructor");
        refetch();
      }
    });
};

// set user role Admin
export const setAdmin = (email, refetch) => {
  const currentUser = {
    role: "Admin",
  };
  axios
    .put(`${import.meta.env.VITE_API_URL}/users/${email}`, {
      currentUser,
    })
    .then((res) => {
      console.log(res.data);
      if (res.data.modifiedCount > 0) {
        toast.success("Successfully make admin");
        refetch();
      }
    });
};
