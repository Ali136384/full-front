import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";
function Post_type() {
  const para = useParams();
  const [posts, setPosts] = useState([]);
  const getData = async () => {
    try {
      const res = await axios.post("http://localhost:5000/api/same-cat", {
        category: para.type,
      });
      console.log(res.data);
      setPosts(res.data.categories);
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    getData();
    console.log(para);
  }, [para.type]);
  return (
    <>
      <div className="posts grid grid-cols-3 gap-8">
        {posts.length ? (
          posts.map((ele) => {
            return (
              <>
                <div className="post w-full shadow-md rounded-lg flex flex-col justify-between">
                  <h1 className=" bg-light-green">{ele.title}</h1>
                  <img className=" w-full h-[280px]" src={ele.img} alt="" />
                  <div className=" relative">
                    <div
                      className="p-2"
                      dangerouslySetInnerHTML={{ __html: ele.prev }}
                    ></div>
                  </div>
                  <Link to={`/post-details/${ele._id}/${ele.category}`}>
                    <button className=" bg-white border m-2 px-3 py-3 border-light-green text-teal-800 hover:bg-light-green duration-300 hover:rounded-xl">
                      See the details
                    </button>
                  </Link>
                </div>
              </>
            );
          })
        ) : (
          <h1>Loading The Posts</h1>
        )}
      </div>
    </>
  );
}

export default Post_type;
