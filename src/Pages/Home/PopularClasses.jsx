import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import ClassCard from "../../Components/Card/ClassCard";

const PopularClasses = () => {
  const { data: classes = [] } = useQuery({
    queryKey: ["classes"],
    queryFn: async () => {
      const res = await axios.get(`${import.meta.env.VITE_API_URL}/sortedClass`);
      return res.data;
    },
  });
  return (
    <div className="mt-12">
      <h1 className="text-center text-4xl -tracking-tighter font-bold">
        Popular Classes
      </h1>
      {classes && Array.isArray(classes) && classes.length > 0 ? (
        <div className="grid  md:grid-cols-3 lg:grid-cols-4 gap-6 my-4">
          {classes.map((singleClass) => (
            <ClassCard key={singleClass._id} singleClass={singleClass} />
          ))}
        </div>
      ) : (
        <p>no data found</p>
      )}
    </div>
  );
};

export default PopularClasses;
