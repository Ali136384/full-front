import React, { useEffect, useState } from "react";
import axios from "axios";
function Profile() {
  const [posts, setPosts] = useState([]);
  const data = async () => {
    const res = await axios.post("http://localhost:5000/api/profile", {
      creator: localStorage.getItem("usernameUserAliHaseni"),
    });
    setPosts(res.data.userPosts);
    console.log(res.data.userPosts);
  };
  useEffect(() => {
    data();
  }, []);
  return (
    <>
      <h2 className=" text-center mt-6 bg-light-green flex items-center justify-center h-16 text-xl ">
        Your Posts
      </h2>
      {posts.map((item) => {
        return (
          <div
            className="p-2 my-6 bg-teal-50 rounded-lg text-center flex justify-between flex-col"
            id={item.category}
            key={item._id}
          >
            <p> {item.title}</p>
            <div className="flex mt-4">
              <img className=" w-96" src={item.img} alt="" />
              <div
                style={{ overflowWrap: "anywhere" }}
                dangerouslySetInnerHTML={{ __html: item.desc }}
              ></div>
            </div>
          </div>
        );
      })}
    </>
  );
}

export default Profile;
