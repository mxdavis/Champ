import React, { Component } from 'react';

import apiRequests from '../modules/apiRequests.js'
import Posts from './posts.jsx'

class App extends Component {

  constructor(props) {
    super(props)
    this.state = {
      posts: [],
      error: ""
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
      </div>
    );
  }
}

export default App;
