import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import ClassCard from "../../Components/Card/ClassCard";

const Classes = () => {
  const { data: allClasses = [] } = useQuery({
    queryKey: ["allClasses"],
    queryFn: async () => {
      const res = await axios.get(`${import.meta.env.VITE_API_URL}/classes`);
      return res.data;
    },
  });

  return (
    <div className="mt-6">
      <h1 className="heading-text">All Classes</h1>
      <div className="grid lg:grid-cols-4 md:grid-cols-3 gap-6 mb-6">
        {allClasses.map((singleClass) => (
          <ClassCard key={singleClass._id} singleClass={singleClass} />
        ))}
      </div>
    </div>
  );
};

export default Classes;
