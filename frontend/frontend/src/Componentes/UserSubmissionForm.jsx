import React, { useState , useContext} from "react";
import { Admincontext } from "../Context/Context.jsx";
import axios from "axios";
import { toast } from "react-toastify";

const UserSubmissionForm = () => {

  const {  backendurl } = useContext(Admincontext);

  const [image1, setImage1] = useState(false);
  const [image2, setImage2] = useState(false);
  const [image3, setImage3] = useState(false);
  const [image4, setImage4] = useState(false);

    const [name, setName] = useState("");
    const [social, setsocial] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
   try {
            
            const formData = new FormData()

            formData.append('name', name)
            formData.append('social', social)
            image1 && formData.append('image1', image1)
            image2 && formData.append('image2', image2)
            image3 && formData.append('image3', image3)
            image4 && formData.append('image4', image4)

           const response = await axios.post(
             `${backendurl}/api/user/adduser`,
             formData
           );


            if (response.data.success) {
              toast.success(response.data.message)
              setName("");
               setsocial("");
               setImage1(false)
                setImage2(false)
                setImage3(false)
                setImage4(false)

              } else {
                toast.error(response.data.message)
            }            


        } catch (error) {
            console.log(error);
            toast.error(response.data.message)
        }
              

     

  }


  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="w-full max-w-2xl p-8 bg-white rounded-md shadow-lg">
        <h1 className="text-2xl font-semibold text-gray-800 mb-6">
          User Submission Form
        </h1>

        <form onSubmit={handleSubmit}>
          {/* Name Input */}
          <div className="mb-6">
            <label
              htmlFor="name"
              className="block text-sm font-medium text-gray-700 mb-2"
            >
              Name:
            </label>
            <input
              id="name"
              onChange={(e) => setName(e.target.value)}
              value={name}
              type="text"
              placeholder="Enter your name"
              required
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            />
          </div>

          {/* Social Media Handle Input */}
          <div className="mb-6">
            <label
              htmlFor="social"
              className="block text-sm font-medium text-gray-700 mb-2"
            >
              Social Media Handle:
            </label>
            <input
              id="social"
              onChange={(e) => setsocial(e.target.value)}
              value={social}
              type="text"
              placeholder="Enter your social media handle"
              required
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            />
          </div>

          {/* Image Upload */}
          <div className="mb-6">
            <p className="mb-4 text-lg font-medium text-gray-700">
              Upload Images
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
              {/* Image 1 */}
              <div className="flex flex-col items-center p-4 border border-gray-300 rounded-lg hover:border-blue-500 transition-all">
                <label htmlFor="image1" className="cursor-pointer text-center">
                  <h2 className="text-sm font-medium text-gray-700 mb-2">
                    Upload Image 1
                  </h2>
                  <input
                    id="image1"
                    type="file"
                    onChange={(e) => setImage1(e.target.files[0])}
                    className="text-sm text-gray-500"
                  />
                </label>
                {image1 && (
                  <p className="mt-2 text-xs text-green-500">
                    Image 1 selected.
                  </p>
                )}
              </div>

              {/* Image 2 */}
              <div className="flex flex-col items-center p-4 border border-gray-300 rounded-lg hover:border-blue-500 transition-all">
                <label htmlFor="image2" className="cursor-pointer text-center">
                  <h2 className="text-sm font-medium text-gray-700 mb-2">
                    Upload Image 2
                  </h2>
                  <input
                    id="image2"
                    type="file"
                    onChange={(e) => setImage2(e.target.files[0])}
                    className="text-sm text-gray-500"
                  />
                </label>
                {image2 && (
                  <p className="mt-2 text-xs text-green-500">
                    Image 2 selected.
                  </p>
                )}
              </div>

              {/* Image 3 */}
              <div className="flex flex-col items-center p-4 border border-gray-300 rounded-lg hover:border-blue-500 transition-all">
                <label htmlFor="image3" className="cursor-pointer text-center">
                  <h2 className="text-sm font-medium text-gray-700 mb-2">
                    Upload Image 3
                  </h2>
                  <input
                    id="image3"
                    type="file"
                    onChange={(e) => setImage3(e.target.files[0])}
                    className="text-sm text-gray-500"
                  />
                </label>
                {image3 && (
                  <p className="mt-2 text-xs text-green-500">
                    Image 3 selected.
                  </p>
                )}
              </div>

              {/* Image 4 */}
              <div className="flex flex-col items-center p-4 border border-gray-300 rounded-lg hover:border-blue-500 transition-all">
                <label htmlFor="image4" className="cursor-pointer text-center">
                  <h2 className="text-sm font-medium text-gray-700 mb-2">
                    Upload Image 4
                  </h2>
                  <input
                    id="image4"
                    type="file"
                    onChange={(e) => setImage4(e.target.files[0])}
                    className="text-sm text-gray-500"
                  />
                </label>
                {image4 && (
                  <p className="mt-2 text-xs text-green-500">
                    Image 4 selected.
                  </p>
                )}
              </div>
            </div>
          </div>

          {/* Submit Button */}
          <div className="mt-8 text-center">
            <button
              type="submit"
              className="w-full sm:w-40 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-all"
            >
              Upload
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default UserSubmissionForm;
