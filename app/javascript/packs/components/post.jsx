import React, { Component } from 'react';

const Post = ({ post }) => (
  <div>
    <h3 className="center">{post.title} {post.factorial}</h3>
    <p>{post.body}</p>
  </div>
)

export default Post
