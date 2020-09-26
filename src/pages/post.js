import React from "react";
import { Redirect, useParams } from "react-router-dom";

const Post = () => {
  const slug = useParams().slug;
  const postSlugs = ["my-first-blog-post", "my-second-blog-post"];

  const postDoesNotExist = postSlugs.indexOf(slug) === -1;
  if (postDoesNotExist) {
    return <Redirect to="/404" />;
  }

  return (
    <>
      <h1>This is a template for blog posts.</h1>
      <p>We'll get to this once we've hooked up Firebase!</p>
    </>
  );
};

export default Post;
