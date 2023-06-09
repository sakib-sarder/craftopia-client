const InstructorsCard = ({ instructor }) => {
  return (
    <div className="card bg-[#AEE2FF] shadow-xl">
      <figure className="px-10 pt-10">
        <img
          src={instructor?.photo}
          alt="instructor image"
          className="rounded-xl w-24"
        />
      </figure>
      <div className="card-body items-center text-center">
        <h2 className="card-title">{instructor.name}</h2>
        <p>
          <span className="hover:underline ">{instructor.email}</span>
        </p>
      </div>
    </div>
  );
};

export default InstructorsCard;
