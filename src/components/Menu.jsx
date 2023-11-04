import React from "react";

function Menu() {
  const posts = [
    {
      id: 1,
      title:
        "loremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremlorem",
      desc: "loremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremlorem",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSDCm1Fq5G7WXt0uf_l3-FVy8ujTMsSv7Rm2Q&usqp=CAU",
    },
    {
      id: 2,
      title:
        "loremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremlorem",
      desc: "loremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremlorem",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSDCm1Fq5G7WXt0uf_l3-FVy8ujTMsSv7Rm2Q&usqp=CAU",
    },
    {
      id: 3,
      title:
        "loremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremlorem",
      desc: "loremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremlorem",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSDCm1Fq5G7WXt0uf_l3-FVy8ujTMsSv7Rm2Q&usqp=CAU",
    },
  ];

  return (
    <>
      <h1 className=" text-center font-bold">Posts You May Like</h1>
      {posts.map((post) => {
        return (
          <>
            <div className="mt-5" key={post.id}>
              <img src={post.img} alt="" />
              <p className="" style={{ overflowWrap: "anywhere" }}>
                {" "}
                {post.title}{" "}
              </p>
              <button className=" bg-white border px-3 py-3 border-light-green text-teal-800 hover:bg-light-green duration-300">
                Read More
              </button>
            </div>
          </>
        );
      })}
    </>
  );
}

export default Menu;
