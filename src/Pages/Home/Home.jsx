import BecomeAnInstructor from "./BecomeAnInstructor";
import PopularClasses from "./PopularClasses";
import PopularInstructors from "./PopularInstructors";
import Slider from "./Slider";

const Home = () => {
  return (
    <div>
      <Slider />
      <PopularClasses />
      <PopularInstructors />
      <BecomeAnInstructor/>
    </div>
  );
};

export default Home;
