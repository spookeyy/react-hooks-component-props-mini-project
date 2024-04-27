import React from "react";
import Article from "./Article";
import blogData from "../data/blog";

const ArticleList = () => {
  const posts = blogData.posts;
  const newPost = posts?.map((post) => {
    return (
      <Article
        key={post.id}
        title={post.title}
        date={post.date}
        preview={post.preview}
      />
    );
  });
  return <main>{newPost}</main>;
};

export default ArticleList;
