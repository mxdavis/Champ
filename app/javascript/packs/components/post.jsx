import React, { Component } from 'react';

const Post = ({ post, handleDelete }) => (
  <div class="buttons-parent">
    <h3 className="center">{post.title} {post.factorial}</h3>
    <p>{post.body}</p>
    <div className="buttons-child">
      <button
        className="btn"
        onClick={() => handleDelete(post)}>
        Delete
      </button>
    </div>
  </div>
)

export default Post
