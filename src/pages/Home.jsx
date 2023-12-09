import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPenToSquare, faTrash } from "@fortawesome/free-solid-svg-icons";
import Swal from "sweetalert2";

function Home() {
  const [posts, setPosts] = useState([]);

  ////Get The Posts From The db

  const getdata = async () => {
    const res = await axios.get("https://full-wpqh.vercel.app/api/data");
    setPosts(res.data);
    console.log(res.data);
  };

  ////// Add the favorite post

  // const addFavo = async (favorites) => {
  //   try {
  //     const res = await axios.post("http://localhost:5000/api/auth/add-fav", {
  //       username: localStorage.getItem("usernameUserAliHaseni"),
  //       favorites: favorites,
  //     });

  //     console.log(res.data);
  //   } catch (err) {
  //     console.log(err);
  //   }
  // };

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

  /////// Use Effect for do the function whenever The page load

  useEffect(() => {
    getdata();
  }, []);

  const goTop = () => {
    window.scrollTo(0, 0);
  };

  return (
    <>
      <div className="posts mt-14 flex flex-col gap-36">
        <p
          onClick={() => {
            goTop();
          }}
          className="fixed right-8 bottom-5 h-9 w-9 bg-light-green rounded-md flex justify-center items-center text-xl cursor-pointer text-green-800 hover:bg-green-600 duration-300 hover:text-white"
        >
          {" "}
          ↑
        </p>
        {posts.length ? (
          posts.map((post) => {
            return (
              <>
                <div
                  className="post flex odd:flex-row-reverse gap-8"
                  key={post.username}
                >
                  <div
                    key={post.username}
                    className="img before:z-[-1] h-[300px] w-[400px]  relative before:content-[''] before:absolute before:h-[100%] before:w-[100%] before:bg-light-green before:left-[-10px] before:top-[10px]"
                  >
                    <img
                      className="h-[300px] w-[400px] object-cover z-10 "
                      src={post.img}
                      alt=""
                    />
                  </div>
                  <div className="content w-full flex flex-wrap justify-between flex-col gap-10 h-auto">
                    {post.createrID ===
                    localStorage.getItem("usernameUserAliHaseni") ? (
                      <div className="felx text-end">
                        <button
                          onClick={() => deletePost(post._id)}
                          className="mr-2"
                        >
                          <FontAwesomeIcon
                            className="text-red-500"
                            icon={faTrash}
                          />
                        </button>
                        <Link to={`update/${post._id}`}>
                          <FontAwesomeIcon
                            className=" text-green-700"
                            icon={faPenToSquare}
                          />
                        </Link>
                      </div>
                    ) : // <FontAwesomeIcon
                    //   onClick={() => addFavo(post._id)}
                    //   className="text-gray-400 border-solid border-black cursor-pointer ml-[95%]"
                    //   icon={faHeart}
                    // />
                    null}
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
