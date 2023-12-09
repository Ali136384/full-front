import React, { useEffect, useState } from "react";
import axios from "axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Swal from "sweetalert2";
import { faPenToSquare, faTrash } from "@fortawesome/free-solid-svg-icons";
import { Link, useNavigate } from "react-router-dom";
function Profile() {
  const [posts, setPosts] = useState([]);
  const data = async () => {
    const res = await axios.post("http://localhost:5000/api/profile", {
      creator: localStorage.getItem("usernameUserAliHaseni"),
    });
    setPosts(res.data.userPosts);
  };
  useEffect(() => {
    data();
  }, []);
  const navigate = useNavigate();

  ////// Delete post Function

  const deletePost = async (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        axios.post("https://full-wpqh.vercel.app/api/delete-post", {
          postId: id,
        });
        window.location.reload();
      }
    });
  };

  return (
    <>
      <h2 className=" text-center mt-6 bg-light-green flex items-center justify-center h-16 text-xl ">
        Your Posts
      </h2>
      {posts.map((item) => {
        return (
          <>
            <div
              className="p-2 my-6 bg-teal-50 rounded-lg text-center flex justify-between flex-col"
              id={item.category}
              key={item._id}
            >
              <div className="flex">
                <button onClick={() => deletePost(item._id)} className="mr-2">
                  <FontAwesomeIcon
                    className="text-red-500 cursor-pointer"
                    icon={faTrash}
                  />
                </button>
                <div onClick={() => navigate(`/update/${item._id}`)}>
                  <FontAwesomeIcon
                    className=" text-green-700 cursor-pointer"
                    icon={faPenToSquare}
                  />
                </div>
              </div>
              <p> {item.title}</p>
              <div className="flex mt-4">
                <img className=" w-96" src={item.img} alt="" />
                <div
                  style={{ overflowWrap: "anywhere" }}
                  dangerouslySetInnerHTML={{ __html: item.desc }}
                ></div>
              </div>
            </div>
          </>
        );
      })}
    </>
  );
}

export default Profile;
