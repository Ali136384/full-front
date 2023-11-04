import React from "react";
import { Link } from "react-router-dom";
import logo from "../img/logo2.png";
import Swal from "sweetalert2";
function Navbar() {
  return (
    <div className="flex justify-between items-center">
      <Link to="/">
        <div className="logo">
          <img className=" rounded-[50%] w-[120px]" src={logo} alt="" />
        </div>
      </Link>
      <div
        className="links pt-2 flex gap-2 items-center
      "
      >
        <Link className="  text-[16px] font-bold" to="/">
          Homepage
        </Link>
        <Link className=" font-[300] text-[16px]" to="/posts/Science">
          SCIENCE
        </Link>
        <Link className=" font-[300] text-[16px]" to="/posts/Technology">
          TECHNOLOGY
        </Link>
        <Link className=" font-[300] text-[16px]" to="/posts/Cinema">
          CINEMA
        </Link>
        <Link className=" font-[300] text-[16px]" to="/posts/Design">
          DESIGN
        </Link>
        <Link className=" font-[300] text-[16px]" to="/posts/Food">
          FOOD
        </Link>
        <span
          className={
            localStorage.getItem("usernameUserAliHaseni")
              ? "cursor-pointer w-[40px] h-[40px] bg-light-green flex items-center justify-center rounded-[10px]"
              : null
          }
        >
          {localStorage.getItem("usernameUserAliHaseni")}
        </span>
        <span className=" cursor-pointer">
          {localStorage.getItem("usernameUserAliHaseni") != null ? (
            <span
              className="
            
            cursor-pointer w-[55px] h-[40px] bg-light-green flex items-center justify-center rounded-[10px]
            "
              onClick={() => {
                Swal.fire("Want to Logout ?").then((res) => {
                  if (res.isConfirmed) {
                    localStorage.removeItem("usernameUserAliHaseni");
                    window.location.reload();
                  }
                });
              }}
            >
              Logout
            </span>
          ) : (
            <Link to="/login">Login</Link>
          )}
        </span>
        <span className=" cursor-pointer hover:text-teal-600 hover:bg-white border duration-300  border-white  hover:border-teal-600 bg-light-green w-12 h-12 flex justify-center items-center rounded-[50%]">
          <Link to="/write">Write</Link>
        </span>{" "}
        <span className=" cursor-pointer hover:text-teal-600 hover:bg-white border duration-300  border-white  hover:border-teal-600 bg-light-green w-12 h-12 flex justify-center items-center rounded-[50%]">
          <Link to="/profile">Profile</Link>
        </span>
      </div>
    </div>
  );
}

export default Navbar;
