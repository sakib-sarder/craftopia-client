import instructor from "../../assets/instructor.png";
const BecomeAnInstructor = () => {
  return (
    <div className="my-6" >
      <div className="flex items-center md:gap-10 lg:gap-0 flex-col md:flex-row">
        <div className="md:w-1/2">
          <img src={instructor} alt="Instructor" className="mx-auto" data-aos="zoom-in"  data-aos-duration="3000"/>
        </div>
        <div className="md:w-1/2 space-y-2 text-center md:text-left">
          <h1 className="text-4xl font-bold">Become an Instructor</h1>
          <p className="text-lg font-semibold">
            Instructors from around the world teach millions of students on
            Craftopia. We provide the tools and skills to teach what you love.
          </p>
          <button className="my-btn-primary">Start Teaching Today</button>
        </div>
      </div>
    </div>
  );
};

export default BecomeAnInstructor;
