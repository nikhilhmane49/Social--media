import React, { useState } from "react";

const UserSubmissionForm = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission (you can replace this with an actual API call)
    setTimeout(() => {
      alert("Form submitted successfully!");
      setIsSubmitting(false);
    }, 2000);
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="w-full max-w-2xl p-8 bg-white rounded-md shadow-sm">
        <h1 className="text-2xl font-semibold text-gray-800 mb-6">
          User Submission Form
        </h1>
        <form onSubmit={handleSubmit}>
          {/* Name Input */}
          <div className="mb-4">
            <label
              htmlFor="name"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Name:
            </label>
            <input
              type="text"
              id="name"
              name="name"
              required
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-1 focus:ring-blue-500 focus:border-blue-500"
              placeholder="Enter your full name"
            />
          </div>

          {/* Social Media Handle Input */}
          <div className="mb-4">
            <label
              htmlFor="socialMedia"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Social Media Handle:
            </label>
            <input
              type="text"
              id="socialMedia"
              name="socialMedia"
              required
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-1 focus:ring-blue-500 focus:border-blue-500"
              placeholder="@username"
            />
          </div>

          {/* Image Upload */}
          <div className="mb-4">
            <label
              htmlFor="uploadImages"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Upload Images:
            </label>
            <input
              type="file"
              id="uploadImages"
              name="uploadImages"
              multiple
              accept="image/*"
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-1 focus:ring-blue-500 focus:border-blue-500"
            />
          </div>

          {/* Submit Button */}
          <div className="mt-6">
            <button
              type="submit"
              className={`w-full px-4 py-2 text-white font-medium rounded-md focus:outline-none ${
                isSubmitting
                  ? "bg-blue-400 cursor-not-allowed"
                  : "bg-blue-600 hover:bg-blue-700"
              }`}
              disabled={isSubmitting}
            >
              {isSubmitting ? "Submitting..." : "Submit"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default UserSubmissionForm;
