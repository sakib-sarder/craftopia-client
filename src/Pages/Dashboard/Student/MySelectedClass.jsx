import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { useContext } from "react";
import { AuthContext } from "../../../Provider/AuthProvider";

const MySelectedClass = () => {
    const { user } = useContext(AuthContext);
    console.log(user?.email);
  const { data: MySelectedClasses = [] } = useQuery({
    queryKey: ["MySelectedClasses", user?.email],
    queryFn: async () => {
      const res = await axios.get(
        `${import.meta.env.VITE_API_URL}/selectedClasses/${user?.email}`
      );
      return res.data;
    },
  });
  console.log(MySelectedClasses);
  return <div>asd</div>;
};

export default MySelectedClass;
