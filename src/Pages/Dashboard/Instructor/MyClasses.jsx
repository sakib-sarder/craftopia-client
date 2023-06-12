import { useQuery } from "@tanstack/react-query";
import { useContext, useState } from "react";
import { AuthContext } from "../../../Provider/AuthProvider";
import UpdateModal from "../../../Components/Modal/UpdateModal";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";

const MyClasses = () => {
  const { user } = useContext(AuthContext);
  const [axiosSecure] = useAxiosSecure();
  const [isOpen, setIsOpen] = useState(false);
  const [id, setId] = useState("");
  const [updateClass, setUpdateClass] = useState({});

  const { data: myClasses = [], refetch } = useQuery({
    queryKey: ["classes", user?.email],
    queryFn: async () => {
      const res = await axiosSecure.get(
        `${import.meta.env.VITE_API_URL}/classes/${user?.email}`
      );
      return res.data;
    },
  });

  const handleModal = (singleClass) => {
    setId(singleClass._id);
    setIsOpen(true);
    setUpdateClass(singleClass);
  };

  //Modal Handler
  function closeModal() {
    setIsOpen(false);
  }
  return (
    <div className="my-6">
      <h1 className="heading-text">My Classes</h1>
      <div className="overflow-x-auto w-11/12 mx-auto py-8">
        <table className="text-center shadow-lg table z-10 ">
          <thead className="font-bold">
            <tr className="bg-[#E6FFFD]">
              <th>Class Name</th>
              <th>Photo</th>
              <th>Instructor Name</th>
              <th>Feedback</th>
              <th>Enrolled Students</th>
              <th>Status</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {myClasses.map((singleClass) => (
              <tr key={singleClass._id}>
                <td>{singleClass?.className}</td>
                <td>
                  <img
                    src={singleClass?.classImage}
                    className="w-20 rounded-md shadow-md mx-auto"
                  />
                </td>
                <td>{singleClass?.instructorName}</td>
                <td>{singleClass?.feedback ? singleClass?.feedback : ""}</td>
                <td>{singleClass?.enrolled}</td>
                <td ><span className="bg-blue-200 px-2 py-[1px] rounded-md font-semibold">{singleClass?.status}</span></td>
                <td>
                  <button
                    onClick={() => handleModal(singleClass)}
                    className="px-2 py-1 rounded-md font-semibold border-emerald-300 border-2 hover:bg-emerald-100 transition"
                  >
                    Update
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        {!myClasses.length > 0 && (
          <h1 className="text-center mt-7 text-lg font-semibold">
            No Data Found
          </h1>
        )}
        <UpdateModal
          refetch={refetch}
          isOpen={isOpen}
          id={id}
          closeModal={closeModal}
          updateClass={updateClass}
        />
      </div>
    </div>
  );
};

export default MyClasses;
