import React, { Component } from 'react';

const Post = ({ post, handleDelete, handleEdit }) => (
  <div className="buttons-parent">
    <h3 className="center">{post.title} {post.factorial}</h3>
    <p>{post.body}</p>
    <div className="buttons-child">
      <button
        className="btn"
        onClick={() => handleEdit(post)}>
        Edit
      </button>
      <button
        className="btn"
        onClick={() => handleDelete(post)}>
        Delete
      </button>
    </div>
  </div>
)

export default Post
