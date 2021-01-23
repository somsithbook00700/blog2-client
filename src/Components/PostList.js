import React, { useEffect, useState } from "react";
import CommentList from "./CommentList";
import CreateComment from "./CreateComment";
import axios from "axios";

export default function PostList() {
  const [posts, setPosts] = useState({});
  const fetchData = async () => {
    const res = await axios.get("http://localhost:4002/posts");
    setPosts(res.data);
  };

  useEffect(() => {
    fetchData();
  }, []);
  const rederedPosts = Object.values(posts).map((post) => {
    return (
      <div
        key={post.id}
        className="card"
        style={{ width: "100%", marginTop: "1rem" }}
      >
        <div className="card-body">
          <h2>{post.title}</h2>
          <CommentList comments={post.comments} />
          <CreateComment PostId={post.id} />
        </div>
      </div>
    );
  });

  return <div>{rederedPosts}</div>;
}
