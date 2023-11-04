import React from "react";

import Menu from "../components/Menu.jsx";

import { Link } from "react-router-dom";

import img from "../img/AliBey.jpeg";

function Single() {
  return (
    <div className="mt-10 flex  gap-10">
      <div className="content w-[70%]">
        <div className="img">
          <img
            className="w-full "
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSDCm1Fq5G7WXt0uf_l3-FVy8ujTMsSv7Rm2Q&usqp=CAU"
            alt=""
          />
        </div>
        <div className="user-info h-20 mt-5 flex gap-4 items-center">
          <img className="h-full rounded-[34%]" src={img} alt="" />
          <div className="text">
            <p className=" font-bold">Ali</p>
            <p>Posted 2 days Ago </p>
          </div>
          <p className=" cursor-pointer">delete</p>
          <Link className="" to={"/write?edit=2"}>
            <p>Edit</p>
          </Link>
        </div>
        <p className="my-5 text-justify font-bold text-xl">
          Lorem ipsum dolor sit amet consectetur adipisicing quidem soluta velit
          sapiente doloreor sit amet consectetur adipisicing quidem soluta velit
          sapiente doloreor sit amet consectetur adipisicing quidem soluta velit
          sapiente dolore
        </p>
        <h1 className=" text-justify text-[18px]  leading-[30px]">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem
          magnam perspiciatis similique sed cum molestiae praesentium accusamus
          beatae nulla quaerat eos totam illum aliquam possimus maiores
          cupiditate, aperiam odit iure. Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Voluptate, esse id eveniet velit perspiciatis culpa
          consequuntur impedit? Corporis qui, doloremque repudiandae accusamus
          deserunt architecto, nostrum aliquam eveniet quidem quia dolore! Lorem
          ipsum dolor sit amet consectetur adipisicing elit. Quibusdam nam
          consectetur ullam ut voluptatibus libero officiis error sequi
          voluptatem alias enim architecto, neque quo aperiam eaque earum
          consequatur saepe magnam? Lorem ipsum dolor sit amet consectetur a eos
          totam illum aliquam possimus maiores cupiditate, aperiam odit iure.
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate,
          esse id eveniet velit perspiciatis culpa consequuntur impedit?
          Corporis qui, doloremque repudiandae accusamus deserunt architecto,
          nostrum aliquam eveniet quidem quia dolore! Lorem ipsum dolor sit amet
          consectetur adipisicing elit. Quibusdam nam consectetur ullam ut
          voluptatibus libero officiis error sequi voluptatem alias enim
          architecto, neque quo aperiam eaque earum consequatur saepe magnam?
        </h1>
      </div>
      <div className="recomandations w-[30%]">
        <Menu />
      </div>
    </div>
  );
}

export default Single;
