import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
function Register() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const submitHandler = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("http://localhost:5000/api/auth/register", {
        username,
        email,
        password,
      });

      console.log(res);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="auth h-screen flex justify-center items-center flex-col bg-light-green ">
      <h1 className=" text-[20px] mb-5 text-[teal] ">Register</h1>
      <form className="flex flex-col p-[30px] bg-white  gap-5 w-60">
        <input
          className=" focus:outline-none border-b-2 border-gray pb-2 px-2"
          type="text"
          onChange={(e) => setUsername(e.target.value)}
          placeholder="username"
          name="username"
          required
        />{" "}
        <input
          className=" focus:outline-none border-b-2 border-gray pb-2 px-2"
          onChange={(e) => setEmail(e.target.value)}
          type="text"
          placeholder="email"
          name="email"
          required
        />
        <input
          className=" focus:outline-none border-b-2 border-gray pb-2 px-2"
          type="password"
          onChange={(e) => setPassword(e.target.value)}
          required
          name="password"
          placeholder="password"
        />
        <button onClick={submitHandler} className=" bg-[teal] py-2 text-white">
          Register
        </button>
        <span className=" text-[12px] text-center">
          Do You Have An Account ?{" "}
          <Link
            className=" text-[13px] text-[teal] hover:text-green-800 duration-1000"
            to="/login"
          >
            Login
          </Link>{" "}
        </span>
      </form>
    </div>
  );
}

export default Register;
