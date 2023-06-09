import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { useContext } from "react";
import { AuthContext } from "../../../Provider/AuthProvider";
import { FaTrashAlt } from "react-icons/fa";
import { toast } from "react-hot-toast";
import Swal from "sweetalert2";

const MySelectedClass = () => {
  const { user } = useContext(AuthContext);
  console.log(user?.email);
  const { data: MySelectedClasses = [], refetch } = useQuery({
    queryKey: ["MySelectedClasses", user?.email],
    queryFn: async () => {
      const res = await axios.get(
        `${import.meta.env.VITE_API_URL}/selectedClasses/${user?.email}`
      );
      return res.data;
    },
  });
  const handleDelete = (id) => {
    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!'
    }).then((result) => {
      if (result.isConfirmed) {
        axios
          .delete(`${import.meta.env.VITE_API_URL}/selectedClasses/${id}`)
          .then((res) => {
            if (res.data.deletedCount > 0) {
              refetch();
              toast.success("Successfully Deleted");
            }
            console.log(res.data);
          })
          .catch((error) => {
            console.error(error);
            toast.error("Failed to delete");
          });
      }
    });
  };
  
  return (
    <div>
      <h1 className="text-center my-4 text-4xl">My Selected Classes</h1>
      <div className="overflow-x-auto ">
        <table className="table text-center">
          {/* head */}
          <thead>
            <tr>
              <th>Class Photo</th>
              <th>Class Name</th>
              <th>Instructor Name</th>
              <th>Price</th>
              <th>Delete</th>
              <th>Pay</th>
            </tr>
          </thead>
          <tbody>
            {MySelectedClasses.map((selectedClass) => (
              <tr key={selectedClass._id}>
                <td>
                  <img
                    src={selectedClass?.classImage}
                    alt=""
                    className="mask mask-squircle mx-auto w-20 h-20"
                  />
                </td>
                <td>{selectedClass.className}</td>
                <td>{selectedClass.instructorName}</td>
                <td>$ {selectedClass.price}</td>
                <td className="">
                  <button
                    onClick={() => handleDelete(selectedClass._id)}
                    className="text-lg flex items-center justify-center gap-[2px] px-2 py-1 mx-auto text-red-500 rounded-md border-warning border-[1px] hover:bg-warning transition font-semibold"
                  >
                    <FaTrashAlt /> <span>Delete</span>
                  </button>
                </td>
                <td>
                  <button className="text-lg flex items-center justify-center gap-[2px] px-2 py-1 mx-auto text-blue-500 rounded-md border-primary border-[1px] hover:bg-blue-100 transition font-semibold">
                    <FaTrashAlt /> <span>Pay</span>
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MySelectedClass;
