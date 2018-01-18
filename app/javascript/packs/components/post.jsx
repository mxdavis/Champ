import React, { Component } from 'react';

import PostForm from './postForm.jsx'

const editForm = (post) => {
  return (<div className="buttons-parent">
    <PostForm handleOnSubmit={"hello"} initialState={post}/>
  </div>)
}

const postShow = (post, handleDelete, handleEdit) => {
  return (<div className="buttons-parent">
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
  </div>)
}


const Post = ({ post, handleDelete, handleEdit, edit, editPost }) => (
  (edit && editPost.id === post.id)? editForm(post) : postShow(post, handleDelete, handleEdit)
)

export default Post
