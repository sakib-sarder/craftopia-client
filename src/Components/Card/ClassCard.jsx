const ClassCard = ({ singleClass }) => {
  return (
    <div className="flex border flex-col justify-between shadow-md group">
      <figure className="">
        <img
          src={singleClass.classImage}
          alt="class photo"
          className="h-full"
        />
      </figure>
      <div className="flex-grow flex-col h-full space-y-2">
        <div className="ps-2">
          <h3 className="text-xl font-semibold">{singleClass.className}</h3>
          <p className="font-semibold">
            Instructor: {singleClass.instructorName}
          </p>
        </div>
        <div className="flex gap-6 justify-center">
          <p className="font-semibold border-b-2 border-b-[#9B71EC]">
            Price: $ {singleClass.price}
          </p>
          <p className="font-semibold border-b-2 border-b-[#9B71EC]">
            Available Seats: {singleClass.totalSeat}
          </p>
        </div>
      </div>
        <div className="my-btn-primary mt-4 pe-0 text-center">
          <button>Select Now</button>
        </div>
    </div>
  );
};

export default ClassCard;
