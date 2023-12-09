import { useState, useEffect } from "react";

import ReactQuill from "react-quill";
import axios from "axios";
import "react-quill/dist/quill.snow.css";
function Write() {
  const [title, setTitle] = useState("");
  const [desc, setDescription] = useState("");
  const [prev, setPrev] = useState("");
  const [img, setImg] = useState("");
  const handleQuillChange = (value) => {
    setDescription(value);
  };

  const [selectedCategory, setSelectedCategory] = useState("");

  const handleCategoryChange = (event) => {
    setSelectedCategory(event.target.value);
  };

  useEffect(() => {}, [selectedCategory]);

  const sendPost = async (e) => {
    try {
      e.preventDefault();

      const post = await axios.post("https://full-wpqh.vercel.app/api/posts", {
        title: title,
        desc: desc,
        img: img,
        category: selectedCategory,
        createrID: localStorage.getItem("usernameUserAliHaseni"),
        prev: prev,
      });
      console.log(post);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="flex gap-4 mt-5 ">
      <div className="content-left w-[67%]">
        <input
          className="p-2 border mb-3 w-full"
          type="text"
          name="title"
          id=""
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Title"
        />{" "}
        <input
          className="p-2 border mb-3 w-full"
          type="text"
          name=""
          id=""
          value={prev}
          onChange={(e) => setPrev(e.target.value)}
          placeholder="brief"
        />
        <ReactQuill
          placeholder="content"
          className="h-[300px]"
          theme="snow"
          value={desc}
          onChange={handleQuillChange}
        />
      </div>

      <div className="item flex flex-[2] flex-col w-[33%] ">
        <div className="item border mt-4  flex flex-col p-2">
          <h1 className="font-bold text-lg">Category</h1>
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
          <input
            type="file"
            // value={img}
            name="img"
            onChange={(e) => setImg(e.target.value)}
            id=""
          />
        </div>
        <button
          onClick={sendPost}
          type="submit"
          className="mt-4 bg-light-green p-3 rounded-lg hover:bg-teal-700 duration-300 hover:rounded-none"
        >
          Submit The post!
        </button>
      </div>
    </div>
  );
}

export default Write;
