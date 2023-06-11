import { useQuery } from "@tanstack/react-query";
import { useContext } from "react";
import { AuthContext } from "../../../Provider/AuthProvider";

import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import PaymentHistoryTabel from "../../../Components/Dashboard/PaymentForm/PaymentHistoryTabel";

const PaymentHistory = () => {
  const { user } = useContext(AuthContext);
  const [axiosSecure] = useAxiosSecure();
  const { data: PayHistory = [] } = useQuery({
    queryKey: ["enrolled", user?.email],
    queryFn: async () => {
      const res = await axiosSecure.get(
        `${import.meta.env.VITE_API_URL}/enrolled/${user?.email}`
      );
      return res.data;
    },
  });
  return (
    <div className="my-6">
      <h1 className="heading-text ">Payments History</h1>
      <div className="overflow-x-auto shadow-lg m-3 rounded-md">
        <table className="table text-center">
          {/* head */}
          <thead className="bg-[#E6FFFD]">
            <tr>
              <th>Class Photo</th>
              <th>Class Name</th>
              <th>Instructor Name</th>
              <th>Price</th>
              <th>Transaction Id</th>
              <th>Date</th>
              <th>Time</th>
            </tr>
          </thead>
          <tbody>
            {PayHistory.map((singlePay) => (
              <PaymentHistoryTabel key={singlePay._id} singlePay={singlePay} />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default PaymentHistory;
