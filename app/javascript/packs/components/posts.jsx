import React, { Component } from 'react';

import Post from './post.jsx'

const Posts = ({ posts }) => (
  <div className="container">
    <h1 className="center"> Some of our greatest posts</h1>
    <div className="posts">
     {posts.map(post => <div key={post.id} className={`post ${post.id % 2 == 0? "blue" : "yellow"}`}> <Post post={post}/> </div>)}
    </div>
  </div>
)

export default Posts
