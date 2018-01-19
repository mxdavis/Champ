import React, { Component } from 'react';

import PostForm from './postForm.jsx'

const editForm = (post, handleUpdate) => (
  <div className="buttons-parent">
    <PostForm handleOnSubmit={handleUpdate} initialState={post}/>
  </div>
)


const postShow = (post, handleDelete, handleEdit) => (
  <div>
    <h3 className="center">{post.title} {post.factorial}</h3>
    <p>{post.body}</p>
    <p>{post.published? "This has been published" : "To Publish Update"}</p>
    {post.published?
      null :
      <div className="buttons-parent">
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
    }
  </div>
)


const Post = ({ post, handleDelete, handleEdit, edit, editPost, handleUpdate }) => (
  (edit && editPost.id === post.id)? editForm(post, handleUpdate) : postShow(post, handleDelete, handleEdit)
)

export default Post
