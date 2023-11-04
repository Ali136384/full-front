import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
function Home() {
  const [posts, setPosts] = useState([]);
  const getdata = async () => {
    const res = await axios.get("http://localhost:5000/api/data");
    setPosts(res.data);
    console.log(res.data);
  };
  useEffect(() => {
    getdata();
  }, []);

  return (
    <>
      <div className="posts mt-14 flex flex-col gap-36">
        {posts.length ? (
          posts.map((post) => {
            return (
              <>
                <div
                  className="post flex odd:flex-row-reverse gap-8"
                  key={post.id}
                >
                  <div className="img before:z-[-1] h-[300px] w-[400px]  relative before:content-[''] before:absolute before:h-[100%] before:w-[100%] before:bg-light-green before:left-[-10px] before:top-[10px]">
                    <img
                      className="h-[300px] w-[400px] object-cover z-10 "
                      src={post.img}
                      alt=""
                    />
                  </div>
                  <div className="content w-full flex flex-wrap justify-between flex-col gap-10 h-auto">
                    <Link to={`/post-details/${post._id}/${post.category}`}>
                      <h1
                        style={{ overflowWrap: "anywhere" }}
                        className=" font-bold text-3xl tracking-[1px]"
                      >
                        {post.title}
                      </h1>
                      <p className=" opacity-75">post from {post.createrID}</p>
                    </Link>
                    <div
                      style={{ overflowWrap: "anywhere" }}
                      className=" text-xl"
                      dangerouslySetInnerHTML={{ __html: post.prev }}
                    ></div>{" "}
                    <Link to={`/post-details/${post._id}/${post.category}`}>
                      <button className=" bg-white border px-3 py-3 border-light-green text-teal-800 hover:bg-light-green duration-300 hover:rounded-xl">
                        See the details
                      </button>
                    </Link>
                  </div>
                </div>
              </>
            );
          })
        ) : (
          <h1>No Posts Found</h1>
        )}
      </div>
    </>
  );
}

export default Home;
