import "./App.css";
import Login from "./components/Login";
import Navbar from "./components/Navbar";
import SignUp from "./components/Signup";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import About from "./components/About";
import UserHome from "./components/UserHome";

import Admin_Dashboard from "./components/Admin_Dashboard";
import AcceptedClaims from "./components/AcceptedClaims";
import RejectedClaims from "./components/RejectedClaims";
import PendingClaims from "./components/PendingClaims";

export default function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <div className="container my-3">
          <Routes>
            <Route exact path="/about" element={<About />} />
            <Route exact path="/" element={<Login />} />
            <Route exact path="/signup" element={<SignUp />} />
            <Route exact path="/home" element={<UserHome />} />
            <Route exact path="/admin" element={<Admin_Dashboard />} />
            <Route exact path="/admin/accepted" element={<AcceptedClaims />} />
            <Route exact path="/admin/rejected" element={<RejectedClaims />} />
            <Route exact path="/admin/pending" element={<PendingClaims />} />
          </Routes>
        </div>
      </BrowserRouter>
    </>
  );
}
