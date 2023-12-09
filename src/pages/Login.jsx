import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const chekUser = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(
        "https://full-wpqh.vercel.app/api/auth/login",
        {
          username,
          password,
        }
      );

      localStorage.setItem("usernameUserAliHaseni", username);
      localStorage.setItem("favo", res.data.user.favorites);
      console.log(res.data.user.favorites);
      navigate("/");
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <div className="auth h-screen flex justify-center items-center flex-col bg-light-green ">
      <h1 className=" text-[20px] mb-5 text-[teal] ">Login</h1>
      <form className="flex flex-col p-[30px] bg-white  gap-5 w-60">
        <input
          className=" focus:outline-none border-b-2 border-gray pb-2 px-2"
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          placeholder="username"
          name="username"
        />
        <input
          className=" focus:outline-none border-b-2 border-gray pb-2 px-2"
          type="password"
          placeholder="password"
          name="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button onClick={chekUser} className=" bg-[teal] py-2 text-white">
          Login
        </button>
        <span className=" text-[12px] text-center">
          Don`t You Have An Account ?{" "}
          <Link
            className=" text-[13px] text-[teal] hover:text-green-800 duration-1000"
            to="/register"
          >
            Register
          </Link>{" "}
        </span>
      </form>
    </div>
  );
}

export default Login;
