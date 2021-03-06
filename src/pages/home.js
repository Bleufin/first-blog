import React, { useState } from "react";
import { getFirebase } from "../firebase";
import { Link } from "react-router-dom";

const Home = () => {
  const [loading, setLoading] = useState(true);
  const [blogPosts, setBlogPosts] = useState([]);

  if (loading && !blogPosts.length) {
    getFirebase()
      .database()
      .ref("/posts")
      .orderByChild("created")
      .once("value")
      .then(snapshot => {
        const posts = [];
        snapshot.forEach(childSnapshot => {
          const post = childSnapshot.val();
          let id = childSnapshot.ref_.path.pieces_[1];
          posts.push({ id, ...post });
        });

        const newestFirst = posts.reverse();
        setBlogPosts(newestFirst);
        setLoading(false);
      });
  }

  if (loading) {
    return <h1>Loading...</h1>;
  }

  return (
    <>
      <h1>Blog posts</h1>
      <p>All Posts, latest on top.</p>
      <div className="blogs">
        {blogPosts.map(blogPost => (
          <section key={blogPost.slug} className="card">
            <img src={blogPost.coverImage} alt={blogPost.coverImageAlt} />
            <div className="card-content">
              <h2>
                {blogPost.title} &mdash; <span style={{ color: "#5e5e5e" }}>{blogPost.datePretty}</span>
              </h2>
              <p
                dangerouslySetInnerHTML={{
                  __html: `${blogPost.content.substring(0, 40)}...`
                }}
              ></p>
              <Link to={`/${blogPost.slug}`}>Continue reading...</Link>
            </div>
          </section>
        ))}
      </div>
    </>
  );
};

export default Home;
