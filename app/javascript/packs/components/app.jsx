import React, { Component } from 'react';

import apiRequests from '../modules/apiRequests.js'


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
      <div className="App">
        <h1>Some of our Great Posts</h1>
        <Posts posts={this.state.posts}/>
      </div>
    );
  }
}

export default App;
