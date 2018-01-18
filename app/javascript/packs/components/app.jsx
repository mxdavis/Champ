import React, { Component } from 'react';

import apiRequests from '../modules/apiRequests.js'
import factorial from '../modules/factorial.js'
import Posts from './posts.jsx'
import PostForm from './postForm.jsx'

class App extends Component {

  constructor(props) {
    super(props)
    this.state = {
      posts: [],
      error: "",
      edit: false,
      post: {
        title: "",
        body: "",
        published: false
      }
    }

    this.handleOnSubmit = (post) => {
      const newPost = Object.assign({}, post, {factorial: factorial.createFactorial()})
      apiRequests.post("posts", newPost)
        .then(savedPost => {
          this.setState({
            posts: [...this.state.posts, savedPost]
          })
        })
    }

    this.handleDelete = (post) => {
      apiRequests.delete(`posts/${post.id}/`)
        .then(deletedPost => deletedPost.ok ? this.removeFromState(post) : null)
    }

    this.removeFromState = (deletedPost) => {
      this.setState({
        posts: this.state.posts.filter(post => deletedPost !== post)
      })
    }

    this.handleEdit = (post) => {
      this.setState({
        post,
        edit: true
      })
    }
  }

  componentDidMount() {
    this.fetchPosts()
  }

  fetchPosts() {
    apiRequests.get('posts')
      .then(posts => this.setState({posts}))
      .catch(error => this.setState({error}))
  }

  render() {
    return (
      <div className="container">
        <Posts posts={this.state.posts} handleDelete={this.handleDelete} handleEdit={this.handleEdit} edit={this.state.edit} editPost={this.state.post}/>
        <PostForm handleOnSubmit={this.handleOnSubmit} initialState={this.state.post}/>
      </div>
    );
  }
}

export default App;
