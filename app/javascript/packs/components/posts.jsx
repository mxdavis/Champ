import React, { Component } from 'react';

import Post from './post.jsx'

const Posts = ({ posts, handleDelete, handleEdit}) => (
  <div className="container">
    <div className="section">
      <h1 className="center"> Some of our greatest posts</h1>
      <div className="posts">
       {posts.map((post, i) => <div key={post.id} className={`post ${i % 2 == 0? "blue" : "yellow"}`}> <Post post={post} handleDelete={handleDelete} handleEdit={handleEdit}/> </div>)}
      </div>
    </div>
    <div className="section">
      <h1 className="center"> Some of our greatest posts</h1>
      <div className="posts">
       {posts.map((post, i) => <div key={post.id} className={`post ${i % 2 == 0? "blue" : "yellow"}`}> <Post post={post} handleDelete={handleDelete} handleEdit={handleEdit}/> </div>)}
      </div>
    </div>
  </div>
)

export default Posts
