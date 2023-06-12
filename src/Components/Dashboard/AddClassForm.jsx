import { useContext, useState } from "react";
import { AuthContext } from "../../Provider/AuthProvider";

const AddRoomForm = ({ handleAddClass }) => {
  
  const [imgInputText, setImgInputText] = useState("Upload Class Image");
  const { user } = useContext(AuthContext);
  return (
    <div className="w-full min-h-[100vh] flex justify-center items-center text-gray-800 rounded-xl bg-[#E6FFFD] px-2 md:px-0">
      <form
        onSubmit={handleAddClass}
        className="w-full md:w-3/5 bg-[#ACBCFF] border p-4 rounded-md shadow-lg"
      >
        <h1 className="text-3xl text-center mb-3 font-bold">
          Please Add a Class!
        </h1>
        <div className="">
          <div className="space-y-6"></div>
          <div className="space-y-6">
            <div className="space-y-1 text-sm">
              <label htmlFor="className" className="block text-gray-600">
                Class Name
              </label>
              <input
                className="w-full px-4 py-3 text-gray-800 border border-[#B799FF] focus:outline-lime-300 rounded-md "
                name="className"
                id="className"
                type="text"
                placeholder="Class Name"
                required
              />
            </div>

            <div className=" p-4 bg-[#AEE2FF] w-full  m-auto rounded-lg">
              <div className="file_upload  py-2 relative rounded-lg">
                <div className="flex flex-col w-max mx-auto text-center">
                  <label>
                    <input
                      onChange={(e) => setImgInputText(e.target.files[0].name)}
                      className="text-sm cursor-pointer  hidden"
                      type="file"
                      name="image"
                      id="image"
                    />
                    <div className="bg-[#B799FF] text-white border border-gray-300 rounded font-semibold cursor-pointer p-1 px-3 hover:bg-[purple]">
                      {imgInputText.slice(0,25)}
                    </div>
                  </label>
                </div>
              </div>
            </div>
            <div className="flex justify-between gap-2">
              <div className="space-y-1 text-sm w-full">
                <label htmlFor="price" className="block text-gray-600">
                  Price
                </label>
                <input
                  className="w-full px-4 py-3 text-gray-800 border border-[#B799FF] focus:outline-lime-300 rounded-md "
                  name="price"
                  id="price"
                  type="text"
                  placeholder="Price"
                  required
                />
              </div>

              <div className="space-y-1 text-sm w-full">
                <label htmlFor="seat" className="block text-gray-600">
                Available seats
                </label>
                <input
                  className="w-full px-4 py-3 text-gray-800 border border-[#B799FF] focus:outline-lime-300 rounded-md "
                  name="totalSeat"
                  id="seat"
                  type="number"
                  placeholder="Available seats"
                  required
                />
              </div>
            </div>

            <div className="flex gap-2 flex-col md:flex-row">
              <div className="space-y-1 text-sm w-full">
                <label htmlFor="instructorName" className="block text-gray-600">
                  Instructor Name
                </label>
                <input
                  className="w-full px-4 py-3 text-gray-800 border border-[#B799FF] focus:outline-lime-300 rounded-md "
                  name="instructorName"
                  id="instructorName"
                  type="text"
                  defaultValue={user?.displayName}
                  placeholder="Instructor Name"
                  readOnly
                />
              </div>

              <div className="space-y-1 text-sm w-full">
                <label htmlFor="instructorEmail">Instructor Email</label>
                <input
                  className="w-full px-4 py-3 text-gray-800 border border-[#B799FF] focus:outline-lime-300 rounded-md "
                  name="instructorEmail"
                  id="instructorEmail"
                  type="email"
                  placeholder="Instructor Email"
                  readOnly
                  defaultValue={user?.email}
                />
              </div>
            </div>
            <input
              type="submit"
              value="Add Class"
              className="my-btn-primary w-full cursor-pointer"
            />
          </div>
        </div>
      </form>
    </div>
  );
};

export default AddRoomForm;
