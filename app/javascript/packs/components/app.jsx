import $ from 'jquery'
import React, { Component } from 'react';

import apiRequests from '../modules/apiRequests.js'
import factorial from '../modules/factorial.js'
import fullPage from '../modules/fullPage.js'
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
      this.setState({post})
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

    $(document).ready(function() {
       $('#fullpage').fullpage();
     });

    return (
      <div className="container">
        <ul id="menu">
          <li data-menuanchor="firstPage" className="active"><a href="#firstPage">First slide</a></li>
          <li data-menuanchor="secondPage"><a href="#secondPage">Second slide</a></li>
          <li data-menuanchor="3rdPage"><a href="#3rdPage">Third slide</a></li>
        </ul>
        <div id="fullpage">
          <Posts posts={this.state.posts} handleDelete={this.handleDelete} handleEdit={this.handleEdit}/>
          <PostForm handleOnSubmit={this.handleOnSubmit} initialState={this.state.post}/>
        </div>
      </div>
    );
  }
}

export default App;
