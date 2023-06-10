import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import InstructorsCard from "../../Components/Card/InstructorsCard";

const PopularInstructors = () => {
  const { data: instructors = [] } = useQuery({
    queryKey: ["instructors"],
    queryFn: async () => {
      const res = await axios.get(
        `${import.meta.env.VITE_API_URL}/instructors`
      );
      return res.data;
    },
  });
  console.log(instructors);
  return (
    <div className="my-8">
      <h1 className="text-center text-4xl">Popular Instructors</h1>
      <div className="grid  md:grid-cols-3 grid-cols-2 gap-6 mt-6">
        {instructors.slice(0,6).map((instructor) => (
          <InstructorsCard key={instructor._id} instructor={instructor} />
        ))}
      </div>
    </div>
  );
};

export default PopularInstructors;
