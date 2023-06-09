import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import InstructorsCard from "../../Components/Card/InstructorsCard";

const Instructors = () => {
  const { data: instructors = [] } = useQuery({
    queryKey: ["instructors"],
    queryFn: async () => {
      const res = await axios.get(
        `${import.meta.env.VITE_API_URL}/instructors`
      );
      return res.data;
    },
  });
  // console.log(instructors);
  return (
    <div className="my-8 ">
      <h1 className="text-center py-2 text-4xl font-bold tracking-wider">Our Instructors</h1>
      <div className="grid gap-6 md:grid-cols-3 lg:grid-cols-4">
        {instructors.map((instructor) => (
          <InstructorsCard key={instructor._id} instructor={instructor} />
        ))}
      </div>
    </div>
  );
};

export default Instructors;
