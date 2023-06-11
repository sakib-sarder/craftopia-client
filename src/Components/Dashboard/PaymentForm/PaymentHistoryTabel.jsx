
const PaymentHistoryTabel = ({ singlePay }) => {
  const date = new Date(singlePay.date);
  const formattedDate = date.toLocaleDateString();
    return (
        <tr key={singlePay._id}>
                <td>
                  <img
                    src={singlePay?.classImage}
                    alt=""
                    className="mask mask-squircle mx-auto w-20 h-20"
                  />
                </td>
                <td>{singlePay.className}</td>
                <td>{singlePay.instructorName}</td>
                <td>$ {singlePay.price}</td>
                <td>{singlePay.transactionId}</td>
                <td>{formattedDate}</td>
              </tr>
    );
};

export default PaymentHistoryTabel;