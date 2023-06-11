import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import ClassCard from "../../Components/Card/ClassCard";

const PopularClasses = () => {
  const { data: sortedClasses = [] } = useQuery({
    queryKey: ["sortedClass"],
    queryFn: async () => {
      const res = await axios.get(
        `${import.meta.env.VITE_API_URL}/sortedClass`
      );
      return res.data;
    },
  });
  return (
    <div className="mt-12">
      <h1 className="heading-text">
        Popular Classes
      </h1>
      {sortedClasses && Array.isArray(sortedClasses) && sortedClasses.length > 0 ? (
        <div className="grid  md:grid-cols-3 lg:grid-cols-4 gap-6 my-4">
          {sortedClasses.map((singleClass) => (
            <ClassCard key={singleClass._id} singleClass={singleClass} />
          ))}
        </div>
      ) : (
        <p className="uppercase text-center my-12">no data found</p>
      )}
    </div>
  );
};

export default PopularClasses;
