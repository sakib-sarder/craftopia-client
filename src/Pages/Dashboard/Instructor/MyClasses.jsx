import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { useContext } from "react";
import { AuthContext } from "../../../Provider/AuthProvider";

const MyClasses = () => {
  const { user } = useContext(AuthContext);
  const { data: myClasses = [] } = useQuery({
    queryKey: ["myClasses", user?.email],
    queryFn: async () => {
      const res = await axios.get(
        `${import.meta.env.VITE_API_URL}/classes/${user?.email}`
      );
      return res.data;
    },
  });
  console.log(myClasses);
  return <div></div>;
};

export default MyClasses;
