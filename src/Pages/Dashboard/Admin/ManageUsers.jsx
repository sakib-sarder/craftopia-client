import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { setAdmin, setInstructor } from "../../../API/auth";

const ManageUsers = () => {
  const { data: users = [], refetch } = useQuery({
    queryKey: ["users"],
    queryFn: async () => {
      const res = await axios.get(`${import.meta.env.VITE_API_URL}/users`);
      return res.data;
    },
  });

  const handleMakeAdmin = (email) => {
    setAdmin(email, refetch);
    // refetch();
  };
  const handleMakeInstructor = (email) => {
    setInstructor(email, refetch);
    // refetch();
  };
  return (
    <div>
      <h1 className="text-center py-2 text-4xl tracking-wider font-semibold">
        Manage Users
      </h1>
      <div className="overflow-x-auto ">
        <table className="table text-center">
          {/* head */}
          <thead>
            <tr>
              <th>Serial</th>
              <th>photo</th>
              <th>Name</th>
              <th>Email</th>
              <th>Role</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, index) => (
              <tr key={user._id}>
                <td>{index + 1}</td>
                <td>
                  <img
                    src={user?.photo}
                    alt=""
                    className="mask mask-squircle mx-auto w-12 h-12"
                  />
                </td>
                <td>{user?.name}</td>
                <td>{user?.email.slice(0,16)}..</td>
                <td>
                  {user.role ? <span>{user.role}</span> : <span>Student</span>}
                </td>
                <td className="flex gap-2 justify-center">
                  <button
                    onClick={() => handleMakeAdmin(user?.email)}
                    className={`px-2 py-1 rounded-md font-semibold border-emerald-300 border-2 hover:bg-emerald-100 transition ${
                      user.role === "Admin"
                        ? "opacity-50 cursor-not-allowed"
                        : ""
                    }`}
                    disabled={user.role === "Admin"}
                  >
                    Make Admin
                  </button>
                  <button
                    onClick={() => handleMakeInstructor(user?.email)}
                    className={`px-2 py-1 rounded-md font-semibold border-emerald-300 border-2 hover:bg-emerald-100 transition ${
                      user.role === "Instructor"
                        ? "opacity-50 cursor-not-allowed"
                        : ""
                    }`}
                    disabled={user.role === "Instructor"}
                  >
                    Make Instructor
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

export default ManageUsers;
