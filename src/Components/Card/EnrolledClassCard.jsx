const EnrolledClassCard = ({ enrolledClass }) => {
  const date = new Date(enrolledClass.date);
  const formattedDate = date.toLocaleDateString();
  return (
    <div className=" bg-base-100 shadow-xl">
      <figure className=" md:h-40 lg:h-52">
        <img
          src={enrolledClass.classImage}
          alt="class"
          className="h-full w-full"
        />
      </figure>
      <div className="ps-3 py-2">
        <h2 className="text-xl font-bold">{enrolledClass.className}</h2>
        <p className="font-semibold">
          {" "}
          Instructor: {enrolledClass.instructorName}
        </p>
        <p className="text-sm">Enrolled Date: {formattedDate}</p>
      </div>
    </div>
  );
};

export default EnrolledClassCard;
