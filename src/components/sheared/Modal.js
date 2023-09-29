import * as React from "react";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
// import { toast } from "react-toastify";
// import { IoIosCloseCircleOutline } from "react-icons/io";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 1000,
  bgcolor: "background.paper",
  border: "1px solid #000",
  boxShadow: 24,
  p: 4,
};

const VideoPlayModal= ({
  open,
  book,
  setOpen,
}) => {

  
  return (
    <div>
      {/* <Button onClick={handleOpen}>Open modal</Button> */}
      <Modal
        open={open}
        // onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <div className="relative">
            <span
              onClick={() => setOpen(!open)}
              className="ml-auto text-3xl absolute right-2 top-2 cursor-pointer hover:text-red-400"
            >
              {/* <IoIosCloseCircleOutline /> */}
            </span>
            {/* <!-- component --> */}
            <div className="py-[60px] p-6 bg-gray-100 flex items-center justify-center">
              <div className="container max-w-screen-lg mx-auto">
                <div>
                  <div className="bg-white rounded shadow-lg p-4 px-4 md:p-8 mb-6">
                    <div className="grid gap-4 gap-y-2 text-sm grid-cols-1 lg:grid-cols-3">
                      <div className="text-gray-600">
                        {" "}
                        <p className="font-medium text-lg">Personal Details</p>
                        <p>Please fill out all the fields.</p>
                      </div>

                      <form
                       
                       
                        className="lg:col-span-2"
                      >
                        <div className="grid gap-4 gap-y-2 text-sm grid-cols-1 md:grid-cols-5">
                          <div className="md:col-span-5">
                            <label htmlFor="full_name">Title</label>
                            <input
                              type="text"
                              
                              defaultValue={book?.title}
                              id="full_name"
                              className="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                            />
                          </div>

                          <div className="md:col-span-5">
                            <label htmlFor="email">Image Url</label>
                            <input
                              type="text"
                             
                              // id="email"
                              defaultValue={book?.image}
                              className="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                              placeholder="Input Image Url"
                            />
                          </div>

                          <div className="md:col-span-3">
                            <label htmlFor="address">Author</label>
                            <input
                              type="text"
                             
                              id="address"
                              className="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                              defaultValue={book?.author}
                              placeholder=""
                            />
                          </div>

                          <div className="md:col-span-2">
                            <label htmlFor="city">Genre</label>
                            <input
                              type="text"
                             
                              id="city"
                              defaultValue={book?.genre}
                              className="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                            />
                          </div>

                          <div className="md:col-span-2">
                            <label htmlFor="country">Publication Date</label>
                            <div className="h-10 bg-gray-50 flex border border-gray-200 rounded items-center mt-1">
                              <input
                                id="country"
                                type="date"
                               
                                placeholder="Country"
                                required
                                defaultValue={book?.publicationDate}
                                className="px-4 appearance-none outline-none text-gray-800 w-full bg-transparent"
                              />
                              <button
                                tabIndex={-1}
                                className="cursor-pointer outline-none focus:outline-none transition-all text-gray-300 hover:text-red-600"
                              >
                                <svg
                                  onClick={(e) => {
                                    console.log(e);
                                  }}
                                  className="w-4 h-4 mx-2 fill-current text-[red]"
                                  xmlns="http://www.w3.org/2000/svg"
                                  viewBox="0 0 24 24"
                                  stroke="currentColor"
                                  strokeWidth="2"
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                >
                                  <line x1="18" y1="6" x2="6" y2="18"></line>
                                  <line x1="6" y1="6" x2="18" y2="18"></line>
                                </svg>
                              </button>
                              <button
                                tabIndex={-1}
                              
                                className="cursor-pointer outline-none focus:outline-none border-l border-gray-200 transition-all text-gray-300 hover:text-blue-600"
                              >
                                <svg
                                  className="w-4 h-4 mx-2 fill-current"
                                  xmlns="http://www.w3.org/2000/svg"
                                  viewBox="0 0 24 24"
                                  stroke="currentColor"
                                  strokeWidth="2"
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                >
                                  <polyline points="18 15 12 9 6 15"></polyline>
                                </svg>
                              </button>
                            </div>
                          </div>

                          <div className="md:col-span-2">
                            <label htmlFor="state">Email</label>
                            <div className="h-10 bg-gray-50 flex border cursor-not-allowed  border-gray-200 rounded items-center mt-1">
                              <input
                                // placeholder={email as string}
                                id="state"
                                // value={email as string}
                                defaultValue={book?.email}
                                // {...register("email")}
                                className="px-4 appearance-none outline-none cursor-not-allowed text-gray-800 w-full bg-transparent"
                                disabled
                              />
                            </div>
                          </div>

                          <div className="md:col-span-5 text-right">
                            <div className="inline-flex items-end">
                              <span
                                onClick={() => setOpen(!open)}
                                className="cursor-pointer border border-blue-500 hover:border-blue-700 text-blue-700 font-bold py-2 px-4 rounded mr-2"
                              >
                                Cancle
                              </span>
                              <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                                Submit
                              </button>
                            </div>
                          </div>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>

                <a
                  href="https://www.buymeacoffee.com/dgauderman"
                  target="_blank"
                  className="md:absolute bottom-0 right-0 p-4 float-right"
                >
                  <img
                    src="https://www.buymeacoffee.com/assets/img/guidelines/logo-mark-3.svg"
                    alt="Buy Me A Coffee"
                    className="transition-all rounded-full w-14 -rotate-45 hover:shadow-sm shadow-lg ring hover:ring-4 ring-white"
                  />
                </a>
              </div>
            </div>
          </div>
        </Box>
      </Modal>
    </div>
  );
};

export default VideoPlayModal;