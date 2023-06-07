import AddClassForm from "../../Components/Dashboard/AddClassForm";

const AddAClass = () => {
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
          price,
          totalSeat,
          instructorName,
          instructorEmail,
          status: "pending",
          };
          console.log(addedClass);
      });
  };
  // console.log(import.meta.env.VITE_IMGBB_API_KEY);
  return (
    <div>
      <AddClassForm handleAddClass={handleAddClass} />
    </div>
  );
};

export default AddAClass;
