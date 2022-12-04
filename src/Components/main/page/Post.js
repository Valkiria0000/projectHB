import React, { useState } from "react";

function Post(props) {
  const [posts, setPosts] = useState([
    {
      id: 1,
      img: "../image/foto1.png",
      title: "Линия Сталина: суровый отдых в усадьбах на сутки",
      text: "Чем заняться в выходные? Когда нет безотлагательных домашних дел, а на улице хорошая погода, хочется уехать из города, чтобы сменить обстановку. Например, снять коттедж на сутки для семьи или большой компании друзей. А...",
      data: "14 Января 2008",
    },
    {
      id: 2,
      img: "../image/foto1.png",
      title: "Линия Сталина: ",
      text: "Чем заняться в выходные? ",
      data: "14 Января 2020",
    },
    {
      id: 3,
      img: "../image/foto1.png",
      title: "Линия  ",
      text: "Чем заняться в ? ",
      data: "20 Января 2020",
    },
  ]);

  if (posts.length > 0)
    return (
      <>
        {posts.map((post) => (
          <div className="card" key={post.id}>
            <img src={post.img} alt="" />
            <h2>{post.title}</h2>
            <p>{post.text}</p>
            <time>{post.data}</time>
            <a href="#">Читать</a>
          </div>
        ))}
      </>
    );
  else return <p>no posts</p>;
}

export default Post;
