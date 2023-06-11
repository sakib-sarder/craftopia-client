import { useQuery } from "@tanstack/react-query";
import { useContext } from "react";
import { AuthContext } from "../../../Provider/AuthProvider";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import EnrolledClassCard from "../../../Components/Card/EnrolledClassCard";

const MyEnrolledClasses = () => {
  const [axiosSecure] = useAxiosSecure();
  const { user } = useContext(AuthContext);
  const { data: enrolledClasses = [] } = useQuery({
    queryKey: ["enrolled", user?.email],
    queryFn: async () => {
      const res = await axiosSecure.get(`/enrolled/${user?.email}`);
      return res.data;
    },
  });
  console.log(enrolledClasses);
  return (
    <div className="m-4">
      <h1 className="heading-text">My Enrolled Classes</h1>
      <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-4">
        {enrolledClasses.map((enrolledClass) => (
          <EnrolledClassCard
            key={enrolledClass._id}
            enrolledClass={enrolledClass}
          />
        ))}
      </div>
    </div>
  );
};

export default MyEnrolledClasses;
