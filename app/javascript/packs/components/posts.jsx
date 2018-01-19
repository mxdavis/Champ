import React, { Component } from 'react';

import Post from './post.jsx'

const Posts = ({ posts, handleDelete, handleEdit, handleUpdate, edit, post, editPost}) => (
  <div className="container">
    <h1 className="center"> Some of our greatest posts</h1>
    <div className="posts">
     {posts.map((post, i) => (
       <div key={post.id} className={`post ${i % 2 == 0? "blue" : "yellow"}`}>
         <Post post={post} handleDelete={handleDelete} edit={edit} handleEdit={handleEdit} editPost={editPost} handleUpdate={handleUpdate}/>
      </div>))}
    </div>
  </div>
)

export default Posts
