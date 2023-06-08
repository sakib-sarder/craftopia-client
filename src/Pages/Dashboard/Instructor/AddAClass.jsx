// import axios from "axios";
import axios from "axios";
import AddClassForm from "../../../Components/Dashboard/AddClassForm";
import { toast } from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const AddAClass = () => {
    const navigate = useNavigate()
  const handleAddClass = (event) => {
    event.preventDefault();
    const form = event.target;
    const className = form.className.value;
    const classImage = form.image.files[0];
    const price = form.price.value;
    const totalSeat = form.totalSeat.value;
    const instructorName = form.instructorName.value;
    const instructorEmail = form.instructorEmail.value;

    // Image Upload
    const formData = new FormData();
    formData.append("image", classImage);
    const url = `https://api.imgbb.com/1/upload?key=${
      import.meta.env.VITE_IMGBB_API_KEY
    }`;
    fetch(url, {
      method: "POST",
      body: formData,
    })
      .then((res) => res.json())
      .then((data) => {
        const addedClass = {
          className,
          classImage: data.data.display_url,
          price: parseFloat(price),
          totalSeat: parseInt(totalSeat),
          instructorName,
          instructorEmail,
          status: "pending",
          enrolled: 0,
        };
        axios
          .post(`${import.meta.env.VITE_API_URL}/classes`, {
            addedClass,
          })
          .then((res) => {
            console.log(res.data);
            if (res.data.insertedId) {
                toast.success("Class Added Successfully");
                navigate("/")
            }
          })
          .catch((error) => {
            toast.error(error.message);
          });
      });
  };
  return (
    <div>
      <AddClassForm handleAddClass={handleAddClass} />
    </div>
  );
};

export default AddAClass;
