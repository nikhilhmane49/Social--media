import { useState } from 'react'
import Dashboard from './Componentes/Dashboardadmin.jsx'
import AdminLogin from './Componentes/AdminLogin.jsx'
import { ToastContainer, toast } from "react-toastify";
import UserSubmissionForm from './Componentes/UserSubmissionForm.jsx'
import './App.css'
import { Routes, Route } from "react-router-dom";

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <ToastContainer />
      <Routes>
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/adminlogin" element={<AdminLogin />} />
        <Route path="/" element={<UserSubmissionForm />} />
      </Routes>
    </>
  );
}

export default App
