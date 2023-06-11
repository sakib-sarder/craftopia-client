import { useQuery } from "@tanstack/react-query";
import { updateClass } from "../../../API/class";
import FeedbackModal from "../../../Components/Modal/FeedbackModal";
import { useState } from "react";
import { toast } from "react-hot-toast";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";

const ManageClasses = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [axiosSecure] = useAxiosSecure();
  const [id, setId] = useState("");
  // Fetch Data
  const { data: classes = [], refetch } = useQuery({
    queryKey: ["classes"],
    queryFn: async () => {
      const res = await axiosSecure.get(
        `${import.meta.env.VITE_API_URL}/admin/classes`
      );
      return res.data;
    },
  });
  const handleApprove = (id) => {
    updateClass(id, "Approved").then((data) => {
      console.log(data);
      toast.success("Class is Approved");
      refetch();
    });
  };
  const handleDeny = (id) => {
    updateClass(id, "Denied").then((data) => {
      console.log(data);
      toast.success("Class id Denied");
      refetch();
    });
  };
  const handleModal = (classId) => {
    setIsOpen(true);
    setId(classId);
    setIsOpen(true);
    // console.log(classId);
  };
  //Modal Handler
  function closeModal() {
    setIsOpen(false);
  }

  return (
    <div className="my-6">
      <h1 className="heading-text">Manage Classes</h1>
      <div className="overflow-x-auto m-3 rounded-md shadow-lg">
        <table className="table text-center">
          {/* head */}
          <thead className="bg-[#E6FFFD]">
            <tr>
              <th>Serial</th>
              <th>Photo</th>
              <th>Class Name</th>
              <th>Instructor Name</th>
              <th>Instructor Email</th>
              <th>Available Seat</th>
              <th>Price</th>
              <th>Status</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {classes.map((singleClass, index) => (
              <tr key={singleClass._id}>
                <td>{index + 1}</td>
                <td>
                  <img
                    src={singleClass?.classImage}
                    alt=""
                    className="mask mask-squircle mx-auto w-12 h-12"
                  />
                </td>
                <td>{singleClass?.className}</td>
                <td>{singleClass?.instructorName}</td>
                <td>{singleClass?.instructorEmail}</td>
                <td>{singleClass?.totalSeat}</td>
                <td>{singleClass?.price}</td>
                <td className="uppercase text-xs font-semibold ">
                  <span className="bg-blue-100 p-1 rounded-lg">
                    {singleClass?.status}
                  </span>
                </td>

                <td className="flex gap-2  justify-center">
                  <button
                    disabled={singleClass.status !== "pending"}
                    onClick={() => handleApprove(singleClass._id)}
                    className={`px-2 py-1 rounded-md font-semibold border-emerald-300 border-2 hover:bg-emerald-100 transition ${
                      singleClass.status !== "pending"
                        ? "opacity-50 cursor-not-allowed"
                        : ""
                    }`}
                  >
                    Approve
                  </button>
                  <button
                    disabled={singleClass.status !== "pending"}
                    onClick={() => handleDeny(singleClass._id)}
                    className={`px-2 py-1 rounded-md font-semibold border-emerald-300 border-2 hover:bg-emerald-100 transition ${
                      singleClass.status !== "pending"
                        ? "opacity-50 cursor-not-allowed"
                        : ""
                    }`}
                  >
                    Deny
                  </button>
                  <button
                    onClick={() => handleModal(singleClass._id)}
                    className="px-2 py-1 rounded-md font-semibold border-emerald-300 border-2 hover:bg-emerald-100 transition"
                  >
                    Send Feedback
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {/* Modal */}
      <FeedbackModal isOpen={isOpen} id={id} closeModal={closeModal} />
    </div>
  );
};

export default ManageClasses;
