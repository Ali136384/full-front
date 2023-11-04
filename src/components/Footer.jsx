import React from "react";
import logo from "../img/logo2.png";
function Footer() {
  return (
    <div className=" bg-light-green flex items-center justify-between mt-[100px] p-5 text-xs">
      <img className=" h-[50px]" src={logo} alt="" />
      <span>
        Made With ❤️ by <b>Ali Haseni</b>
      </span>
    </div>
  );
}

export default Footer;
