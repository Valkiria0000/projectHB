import React from "react";
import Breadcrums from "../Breadcrums";
import Post from "../Post";
import Title from "../Title";
import Search from "./Search";

function BlockPost(props) {
  return (
    <section className="blockpost">
      <div className="container">
        <div className="blockpost__item">
          <Breadcrums />
          <Search />
        </div>
        <Title title="Новости" />
        <div className="posts">
          <Post />
        </div>
      </div>
    </section>
  );
}

export default BlockPost;
