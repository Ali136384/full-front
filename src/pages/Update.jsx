import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

export default function Update() {
  const para = useParams();
  const [post, setPost] = useState([]);

  /////

  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [prev, setPrev] = useState("");

  const getdata = async () => {
    const res = await axios.post(
      "https://full-wpqh.vercel.app/api/postDetails",
      {
        id: para.id,
      }
    );
    setPost(res.data.OnePost);
    console.log(res.data.OnePost);
    console.log(res.data);
  };
  useEffect(() => {
    getdata();
  }, []);
  const [selectedCategory, setSelectedCategory] = useState("");

  const handleCategoryChange = (event) => {
    setSelectedCategory(event.target.value);
  };

  const sendToupdate = async () => {
    try {
      const requestData = {
        id: para.id,
      };

      if (title) {
        requestData.title = title;
      }

      if (desc) {
        requestData.desc = desc;
      }

      if (prev) {
        requestData.prev = prev;
      }

      if (selectedCategory) {
        requestData.category = selectedCategory;
      }

      const createrID = localStorage.getItem("usernameUserAliHaseni");
      if (createrID) {
        requestData.createrID = createrID;
      }

      const response = await axios.post(
        "https://full-wpqh.vercel.app/api/update-post",
        requestData
      );
      console.log(response.data); // Log the response from the server
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      {post.map((ele) => {
        return (
          <>
            <div className="shadow-md rounded-md p-5 ">
              <h2 className="text-center bg-light-green">
                Current informations
              </h2>
              <div className="m-2 shadow-sm p-2">
                title
                <h1>{ele.title}</h1>
              </div>
              <div className="m-2 shadow-sm p-2">
                previous
                <p>{ele.prev}</p>
              </div>
              <div className="m-2 shadow-sm p-2">
                description
                <h1
                  style={{ overflowWrap: "anywhere" }}
                  dangerouslySetInnerHTML={{ __html: ele.desc }}
                ></h1>
              </div>
              <div className="m-2 shadow-sm p-2">
                category
                <h2>{ele.category}</h2>
              </div>
            </div>
          </>
        );
      })}

      <div className="shadow-md rounded-md p-5 ">
        <h2 className="text-center bg-light-green"> Write the new content</h2>
        <div className="m-2 shadow-sm p-2">
          <input
            className="w-full focus:outline-none"
            type="text"
            placeholder="Title"
            onChange={(e) => setTitle(e.target.value)}
            name=""
            id=""
          />
        </div>
        <div className="m-2 shadow-sm p-2">
          <input
            className="w-full focus:outline-none"
            type="text"
            placeholder="Previous"
            onChange={(e) => setPrev(e.target.value)}
            name=""
            id=""
          />{" "}
        </div>
        <div className="m-2 shadow-sm p-2">
          {" "}
          <input
            className="w-full focus:outline-none"
            type="text"
            placeholder="Description"
            onChange={(e) => setDesc(e.target.value)}
            name=""
            id=""
          />
        </div>
        <div className="m-2 shadow-sm p-2">
          Category
          <div className="cat">
            <input
              type="radio"
              name="cat"
              onChange={handleCategoryChange}
              value="art"
              id="art"
            />
            <label className="ml-1 text-teal-500" htmlFor="art">
              Art
            </label>
            {"  "}
          </div>
          <div className="cat">
            <input
              type="radio"
              name="cat"
              onChange={handleCategoryChange}
              value="Science"
              id="Science"
            />
            <label className="ml-1 text-teal-500" htmlFor="Science">
              Science
            </label>{" "}
          </div>
          <div className="cat">
            <input
              type="radio"
              name="cat"
              onChange={handleCategoryChange}
              value="Technology"
              id="Technology"
            />
            <label className="ml-1 text-teal-500" htmlFor="Technology">
              Technology
            </label>{" "}
          </div>
          <div className="cat">
            <input
              type="radio"
              name="cat"
              onChange={handleCategoryChange}
              value="Cinema"
              id="Cinema"
            />
            <label className="ml-1 text-teal-500" htmlFor="Cinema">
              Cinema
            </label>{" "}
          </div>
          <div className="cat">
            <input
              type="radio"
              name="cat"
              onChange={handleCategoryChange}
              value="Design"
              id="Design"
            />
            <label className="ml-1 text-teal-500" htmlFor="Design">
              Design
            </label>{" "}
          </div>
          <div className="cat">
            <input
              type="radio"
              name="cat"
              onChange={handleCategoryChange}
              value="Food"
              id="Food"
            />
            <label className="ml-1 text-teal-500" htmlFor="Food">
              Food
            </label>
          </div>
        </div>
        <button
          className="flex justify-center w-full bg-light-green p-2 hover:bg-green-600 duration-500"
          onClick={sendToupdate}
        >
          Send the update
        </button>
      </div>
    </>
  );
}
