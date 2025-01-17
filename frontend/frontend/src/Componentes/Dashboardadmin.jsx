import React, { useEffect, useState } from "react";

const Dashboardadmin = () => {
  const [userSubmissions, setUserSubmissions] = useState([]);
  const [loading, setLoading] = useState(true);

  // Simulating fetching data from a database
//   useEffect(() => {
//     // Replace this with your actual API call
//     setTimeout(() => {
//       const mockData = [
//         {
//           id: 1,
//           name: "John Doe",
//           socialMediaHandle: "@johndoe",
//           images: [
//             "https://via.placeholder.com/150",
//             "https://via.placeholder.com/150",
//           ],
//         },
//         {
//           id: 2,
//           name: "Jane Smith",
//           socialMediaHandle: "@janesmith",
//           images: ["https://via.placeholder.com/150"],
//         },
//         {
//           id: 3,
//           name: "Alex Johnson",
//           socialMediaHandle: "@alexj",
//           images: [
//             "https://via.placeholder.com/150",
//             "https://via.placeholder.com/150",
//             "https://via.placeholder.com/150",
//           ],
//         },
//       ];
//       setUserSubmissions(mockData);
//       setLoading(false);
//     }, 2000);
//   }, []);

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

            {userSubmissions.length === 0 ? (
              <p className="text-gray-500 text-center">No submissions found.</p>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {userSubmissions.map((user) => (
                  <div
                    key={user.id}
                    className="border border-gray-300 rounded-lg p-6 bg-gradient-to-r from-white to-gray-50 shadow-lg transform hover:scale-105 transition-all duration-300"
                  >
                    <h3 className="text-xl font-bold text-gray-800 mb-4">
                      {user.name}
                    </h3>
                    <p className="text-sm text-gray-600 mb-4">
                      Handle:{" "}
                      <span className="text-blue-500 font-medium">
                        {user.socialMediaHandle}
                      </span>
                    </p>
                    <div className="flex gap-3 flex-wrap">
                      {user.images.map((image, index) => (
                        <a
                          key={index}
                          href={image}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="hover:opacity-80 transition-opacity"
                        >
                          <img
                            src={image}
                            alt={`Submission by ${user.name}`}
                            className="w-24 h-24 object-cover rounded-lg border border-gray-200 shadow-md hover:shadow-xl"
                          />
                        </a>
                      ))}
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
