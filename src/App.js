import { Layout } from "antd";
import { Link, Route, Routes } from "react-router-dom";
import "./App.css";
import Login from "./Sign/Login";
import Signup from "./Sign/Signup";
function App() {
  return (
    <div className="App min-h-screen">
      <div className="flex justify-center gap-2">
        <Link
          to="/signup"
          className="!text-white bg-gray-700 p-2 rounded border"
        >
          Sign Up
        </Link>
        <Link
          to="/login"
          className="!text-white bg-gray-700 p-2 rounded border"
        >
          Login
        </Link>
      </div>
      <div
        className="flex flex-col"
        style={{ minHeight: "calc(100vh - 40px)" }}
      >
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
