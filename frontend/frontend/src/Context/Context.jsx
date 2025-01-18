

import axios from "axios";
import React, { createContext ,useEffect,useState} from "react";
import { toast } from "react-toastify";

export const Admincontext = createContext();


const AdminProvider = ({ children }) => {
  const [atoken, setatoken] = useState(
    localStorage.getItem("atoken") ? localStorage.getItem("atoken") : ""
  );
  const [user, setuser] = useState([]);
  const backendurl = import.meta.env.VITE_BACKEND_URL;

  const getalluser = async () => {
    try {
      const response = await axios.post(
        `${backendurl}/api/admin/alluser`,
        {},
        {
          headers: {
            atoken: atoken,
          },
        }
      );

      console.log("respo" + response.data.data);
      

      if (response.data.success) {
        toast.success(response.data.message);
        setuser(response.data.data); // Use response.data.data if data contains the array of doctors
      } else {
        toast.error(response.data.message);
      }
    } catch (error) {
      console.log(error);
      toast.error(error.response?.data?.message || "Something went wrong");
    }
  };

  useEffect(() => {
    if (atoken) {
      getalluser();
    }
  }, [atoken]);

    const value = {
      atoken,
      setatoken,
      user,
      getalluser,
      backendurl,
    };
    
  return (
    <Admincontext.Provider value={value}>{children}</Admincontext.Provider>
  );
};

export default AdminProvider;
