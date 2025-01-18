import React, { useState, useEffect, useContext } from "react";
import { Admincontext } from "../Context/Context.jsx";

const Dashboardadmin = () => {
  const { user, atoken, getalluser } = useContext(Admincontext);
  
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(false); // Simulate loading completion when user data is fetched
  }, [user]);

  useEffect(() => {
        if (atoken) {
            getalluser();
    }
},[atoken])

  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-50 to-indigo-50 p-6">
      <div className="container mx-auto">
        <h1 className="text-4xl font-bold text-gray-800 text-center mb-8">
          Admin Dashboard
        </h1>

        {loading ? (
          <div className="flex justify-center items-center">
            <div className="text-blue-600 text-lg font-semibold">
              Loading submissions...
            </div>
          </div>
        ) : (
          <div className="bg-white shadow-xl rounded-lg p-8">
            <h2 className="text-2xl font-semibold text-gray-700 mb-6 text-center">
              User Submissions
            </h2>

            {user.length === 0 ? (
              <p className="text-gray-500 text-center">No submissions found.</p>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {user.map((userItem, index) => (
                  <div
                    key={index}
                    className="border border-gray-300 rounded-lg p-6 bg-gradient-to-r from-white to-gray-50 shadow-lg transform hover:scale-105 transition-all duration-300"
                  >
                    <h3 className="text-xl font-bold text-gray-800 mb-4">
                      {userItem.name}
                    </h3>
                    <p className="text-sm text-gray-600 mb-4">
                      Handle:{" "}
                      <span className="text-blue-500 font-medium">
                        {userItem.social}
                      </span>
                    </p>
                    <div className="flex gap-3 flex-wrap">
                      {Array.isArray(userItem.image) &&
                        userItem.image.map((image, index) => (
                          <a
                            key={index}
                            href={userItem.image.image1}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hover:opacity-80 transition-opacity"
                          >
                            <img
                              src={image}
                              alt={`Submission by ${userItem.name}`}
                              className="w-24 h-24 object-cover rounded-lg border border-gray-200 shadow-md hover:shadow-xl"
                            />
                          </a>
                        ))}
{/* 
                      {userItem.image &&
                        Object.keys(userItem.image).map((key, index) => (
                          <a
                            key={index}
                            href={userItem.image[key]}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hover:opacity-80 transition-opacity"
                          >
                            <img
                              src={userItem.image[key]}
                              alt={`Submission by ${userItem.name}`}
                              className="w-24 h-24 object-cover rounded-lg border border-gray-200 shadow-md hover:shadow-xl"
                            />
                          </a>
                        ))} */}
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default Dashboardadmin;
