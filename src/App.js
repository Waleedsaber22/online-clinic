import { Layout } from "antd";
import { Link, Route, Routes } from "react-router-dom";
import "./App.css";
import { Login, Signup, UserProfile } from "./components";
import Homepage from "./components/homepage/Homepage";

function App() {
  return (
    <div className="App min-h-screen">
      {/*=============================== navbar ============================== */}
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
        <Link
          to="/profile/4"
          className="!text-white bg-gray-700 p-2 rounded border"
        >
          Profile
        </Link>
        <Link to="/home" className="!text-white bg-gray-700 p-2 rounded border">
          Homepage
        </Link>
      </div>
      {/*================================ pages ============================= */}
      <div
        className="flex flex-col"
        style={{
          minHeight: "calc(100vh - 40px)",
        }}
      >
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/profile/:profileid" element={<UserProfile />} />
          <Route path="/home" element={<Homepage />} />
        </Routes>
      </div>
      {/*=============================== footer ============================== */}
    </div>
  );
}

export default App;
