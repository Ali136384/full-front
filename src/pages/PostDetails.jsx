import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function PostDetails() {
  const para = useParams();
  const [posts, setPosts] = useState([]);
  const [sameTitle, setsameTitle] = useState([]);
  const getdata = async () => {
    const res = await axios.post("http://localhost:5000/api/postDetails", {
      id: para.id,
    });
    setPosts(res.data.OnePost);
    console.log(res.data.OnePost);
    console.log(res.data);
    const sameCategories = await axios.post(
      "http://localhost:5000/api/same-cat",
      {
        category: para.cat,
      }
    );
    console.log(sameCategories.data);
    setsameTitle(sameCategories.data.categories);
  };
  useEffect(() => {
    getdata();
  }, []);
  return (
    <>
      <div className="container w-full mt-7 flex gap-[70px] ">
        <div className="post-details w-[70%]">
          {posts.length ? (
            posts.map((ele) => {
              return (
                <>
                  <div key={ele._id} className="shadow-md rounded-lg">
                    <div className="creator ">From {ele.createrID}</div>
                    <h1 className="text-center font-bold mb-3 bg-light-green">
                      {ele.title}
                    </h1>
                    <div className="img">
                      <img className="w-full" src={ele.img} alt="" />
                    </div>
                    <p
                      style={{ overflowWrap: "anywhere" }}
                      className="mt-2 w-[97%] p-3 "
                      dangerouslySetInnerHTML={{ __html: ele.desc }}
                    ></p>
                  </div>
                </>
              );
            })
          ) : (
            <h1>Loding The details</h1>
          )}
        </div>
        <div className="  posts-you-may-wanna-see w-[30%]">
          <h2 className="text-center bg-light-green p-4">
            Posts With Same Subject{" "}
          </h2>
          <div className="same ">
            {sameTitle.length ? (
              sameTitle.map((ele) => {
                return (
                  <>
                    <div className="post-with-same-title mt-4 text-center shadow-inner p-2 flex flex-col rounded-lg">
                      <h1 className="mb-2">{ele.title}</h1>
                      <img className=" h-[239px]" src={ele.img} alt="" />
                      <p>{ele.prev}</p>
                    </div>
                  </>
                );
              })
            ) : (
              <h4>Loading The posts</h4>
            )}
          </div>
        </div>
      </div>
    </>
  );
}

export default PostDetails;
