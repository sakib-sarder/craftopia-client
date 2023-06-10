import { Dialog, Transition } from "@headlessui/react";
// import axios from "axios";
import { Fragment } from "react";
const UpdateModal = ({ isOpen, closeModal, updateClass }) => {
  console.log(updateClass);
  return (
    <Transition appear show={isOpen} as={Fragment}>
      <Dialog as="div" className="relative  z-10" onClose={closeModal}>
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-black bg-opacity-25" />
        </Transition.Child>

        <div className="fixed inset-0 overflow-y-auto">
          <div className="flex min-h-full items-center justify-center p-4 text-center">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                <Dialog.Title
                  as="h3"
                  className="text-lg font-medium leading-6 text-gray-900"
                >
                  Update ! 
                </Dialog.Title>
                <div className="mt-2">
                  <form
                    // onSubmit={handleAddClass}
                    className="w-full  bg-[#ACBCFF] border p-4 rounded-md shadow-lg"
                  >
                    <h1 className="text-3xl text-center mb-3 font-bold">
                      Update Your Class !
                    </h1>
                    <div className="">
                      <div className="space-y-6"></div>
                      <div className="space-y-6">
                        <div className="space-y-1 text-sm">
                          <label
                            htmlFor="className"
                            className="block text-gray-600"
                          >
                            Class Name
                          </label>
                          <input
                            className="w-full px-4 py-3 text-gray-800 border border-[#B799FF] focus:outline-lime-300 rounded-md "
                            name="className"
                            id="className"
                            type="text"
                            defaultValue={updateClass.className}
                            placeholder="Class Name"
                            required
                          />
                        </div>

                        <div>
                          <label>
                            <input
                              className="w-full px-4 py-3 text-gray-800 border border-[#B799FF] focus:outline-lime-300 rounded-md "
                              type="url"
                              defaultValue={updateClass.classImage}
                              placeholder="Photo URL"
                            />
                          </label>
                        </div>
                        <div className="flex justify-between gap-2">
                          <div className="space-y-1 text-sm w-full">
                            <label
                              htmlFor="price"
                              className="block text-gray-600"
                            >
                              Price
                            </label>
                            <input
                              defaultValue={updateClass.price}
                              className="w-full px-4 py-3 text-gray-800 border border-[#B799FF] focus:outline-lime-300 rounded-md "
                              name="price"
                              id="price"
                              type="number"
                              placeholder="Price"
                              required
                            />
                          </div>

                          <div className="space-y-1 text-sm w-full">
                            <label
                              htmlFor="seat"
                              className="block text-gray-600"
                            >
                              Total seat
                            </label>
                            <input
                              defaultValue={updateClass.totalSeat}
                              className="w-full px-4 py-3 text-gray-800 border border-[#B799FF] focus:outline-lime-300 rounded-md "
                              name="totalSeat"
                              id="seat"
                              type="number"
                              placeholder="Total seat"
                              required
                            />
                          </div>
                        </div>

                        <input
                          type="submit"
                          value="Update Now"
                          className="my-btn-primary w-full cursor-pointer"
                        />
                      </div>
                    </div>
                  </form>
                </div>

                <div className="mt-4 flex justify-between">
                  <button
                    type="button"
                    className="inline-flex justify-center rounded-md border border-transparent bg-blue-100 px-4 py-2 text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                    onClick={closeModal}
                  >
                    Cancel
                  </button>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition>
  );
};

export default UpdateModal;
