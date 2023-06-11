import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import "./PaymentForm.css";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../../Provider/AuthProvider";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import axios from "axios";
import { toast } from "react-hot-toast";

const PaymentForm = ({ paymentClass }) => {
  const stripe = useStripe();
  const [axiosSecure] = useAxiosSecure();
  const elements = useElements();
  const { user } = useContext(AuthContext);
  const [cardError, setCardError] = useState("");
  const [clientSecret, setClientSecret] = useState("");
  

  useEffect(() => {
    if (paymentClass?.price) {
      axiosSecure
        .post("/create-payment-intent", {
          price: paymentClass?.price,
        })
        .then((res) => {
          setClientSecret(res.data.clientSecret);
        });
    }
  }, [axiosSecure, paymentClass]);
  const handleSubmit = async (event) => {
    // Block native form submission.
    event.preventDefault();

    if (!stripe || !elements) {
      // Stripe.js has not loaded yet. Make sure to disable
      // form submission until Stripe.js has loaded.
      return;
    }

    // Get a reference to a mounted CardElement. Elements knows how
    // to find your CardElement because there can only ever be one of
    // each type of element.
    const card = elements.getElement(CardElement);

    if (card == null) {
      return;
    }

    // Use your card Element with other Stripe.js APIs
    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card,
    });

    if (error) {
      console.log("[error]", error);
      setCardError(error.message);
    } else {
      console.log("[PaymentMethod]", paymentMethod);
    }
    // confirm payment
    const { paymentIntent, error: confirmError } =
      await stripe.confirmCardPayment(clientSecret, {
        payment_method: {
          card: card,
          billing_details: {
            name: user?.displayName || "anonymous",
            email: user?.email || "unknown",
          },
        },
      });
    if (confirmError) {
      console.log("[error]", confirmError);
      setCardError(confirmError.message);
    } else {
      console.log("[paymentIntent]", paymentIntent);
      if (paymentIntent.status === "succeeded") {
        // Save payment info in DB
        const paymentInfo = {
          ...paymentClass,
          transactionId: paymentIntent.id,
          date: new Date(),
        };
        axiosSecure.post("/payments", paymentInfo).then((res) => {
          console.log(res.data);
          if (res.data.insertedId) {
            axios
              .patch(
                `${import.meta.env.VITE_API_URL}/classes/${paymentClass._id}`
              )
              .then((res) => {
                console.log(res.data);
                const successText = `Enrolled Successfull , TransactionId: ${paymentIntent.id}`;
                toast.success(successText);
              })
              .catch(err=>console.log(err))
          }
        });
      }
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <CardElement
        options={{
          style: {
            base: {
              fontSize: "16px",
              color: "#424770",
              "::placeholder": {
                color: "#aab7c4",
              },
            },
            invalid: {
              color: "#9e2146",
            },
          },
        }}
      />
      {cardError && <p className="text-red-400 text-sm">{cardError}</p>}
      <button className="my-btn-primary" type="submit" disabled={!stripe}>
        Pay
      </button>
    </form>
  );
};

export default PaymentForm;
