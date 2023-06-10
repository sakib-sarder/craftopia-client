import { loadStripe } from "@stripe/stripe-js";
import PaymentForm from "../../../Components/Dashboard/PaymentForm/PaymentForm";

import { Elements } from "@stripe/react-stripe-js";
import { useParams } from "react-router-dom";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";
import { useContext } from "react";
import { AuthContext } from "../../../Provider/AuthProvider";

const Payment = () => {
    const stripePromise = loadStripe(import.meta.env.VITE_PAYMENT_GATEWAY_PK);
    const { id } = useParams();
    const { user} = useContext(AuthContext);
    const [axiosSecure] = useAxiosSecure();

    const { data: MySelectedClasses = [], } = useQuery({
        queryKey: ["selectedClasses", user?.email],
        queryFn: async () => {
          const res = await axiosSecure.get(`/selectedClasses/${user?.email}`);
          return res.data;
        },
      });
    const paymentClass = MySelectedClasses.find(selectedClass => selectedClass._id === id);
  return (
    <div className="ms-40 my-52">
        <Elements stripe={stripePromise}>
              <PaymentForm paymentClass={paymentClass} />
        </Elements>
    </div>
  );
};

export default Payment;
