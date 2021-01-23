import React from "react";

export default function CommentList({ comments }) {
  const rederedData = comments.map((comment) => {
    let content;
    if (comment.status === "approach") {
      content = comment.content;
    } else if (comment.status === "reject") {
      content = "This comment has been rejected!";
    } else if (comment.status === "pending") {
      content = "This comment is waiting moderation";
    }
    return <li key={comment.id}>{content}</li>;
  });
  return <ul>{rederedData}</ul>;
}
