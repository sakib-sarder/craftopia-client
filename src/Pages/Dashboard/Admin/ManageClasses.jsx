import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { updateClass } from "../../../API/class";
import FeedbackModal from "../../../Components/Modal/FeedbackModal";
import { useState } from "react";

const ManageClasses = () => {
  const [isOpen, setIsOpen] = useState(false);
  // Fetch Data
  const { data: classes = [] } = useQuery({
    queryKey: ["classes"],
    queryFn: async () => {
      const res = await axios.get(`${import.meta.env.VITE_API_URL}/classes`);
      return res.data;
    },
  });
  const handleApprove = (id) => {
    updateClass(id, "Approved").then((data) => {
      console.log(data);
    });
  };

  // const handleFeedback = (id) => {
    
  // }

  //Modal Handler
  function closeModal() {
    setIsOpen(false);
  }
  const openModal = () => {
    setIsOpen(true);
  };
  return (
    <div className="my-8">
      <h1 className="text-center">Manage Classes</h1>
      <div className="overflow-x-auto ">
        <table className="table text-center">
          {/* head */}
          <thead>
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
                <td className="uppercase">{singleClass?.status}</td>

                <td className="flex gap-2 justify-center">
                  <button
                    onClick={() => handleApprove(singleClass._id)}
                    className="px-2 py-1 rounded-md font-semibold border-emerald-300 border-2 hover:bg-emerald-100 transition"
                  >
                    Approve
                  </button>
                  <button className="px-2 py-1 rounded-md font-semibold border-emerald-300 border-2 hover:bg-emerald-100 transition">
                    Deny
                  </button>
                  <button
                    onClick={openModal}
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
     <FeedbackModal isOpen={isOpen} closeModal={closeModal}/>
    </div>
  );
};

export default ManageClasses;