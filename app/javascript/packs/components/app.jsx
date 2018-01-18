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
      error: ""
    }

    this.handleOnSubmit = (post) => {
      const newPost = Object.assign({}, post, {factorial: factorial.createFactorial()})
      apiRequests.post("posts", newPost)
      this.setState({
        posts: [...this.state.posts, newPost]
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
        <Posts posts={this.state.posts}/>
        <PostForm handleOnSubmit={this.handleOnSubmit} initialState={{
          title: "",
          body: "",
          published: false
        }}/>
      </div>
    );
  }
}

export default App;
