import React, { Component } from 'react';

class PostForm extends Component {

  constructor(props) {
    super(props)
    this.state = (this.props.initialState)

    this.handleOnChange = (event) => {
      this.setState({
        [event.target.name]: event.target.value
      })
    }

    this.toggleChange = (event) => {
      const toggle = this.state.published? false : true
      this.setState({
        [event.target.name]: toggle
      })
    }

    this.handleOnSubmit = (event) => {
      event.preventDefault()
      this.props.handleOnSubmit(this.state)
      this.setState(this.props.initialState)
    }

    this.handleReset = (event) => {
      event.preventDefault()
      this.setState(this.props.initialState)
    }
  }

  render() {
    return (

      <div className="center">
        <form
          className="form-horizontal"
          onSubmit={this.handleOnSubmit}
        >
          <label className="form-label">Title</label>
          <input
            className="form-input"
            type="text"
            name="title"
            onChange={this.handleOnChange}
            value={this.state.title}
            defaultValue={this.state.title}
          />
          <label className="form-label">Body</label>
          <textarea
            className="form-input"
            name="body"
            id="input-example-3"
            rows="10"
            type="textarea"
            onChange={this.handleOnChange}
            value={this.state.body}
            defaultValue={this.state.body}
          />
          <label className="form-switch">
            <input
              type="checkbox"
              onChange={this.toggleChange}
              name="published"
              checked={this.state.published}
              defaultValue={this.state.published}
            />
            <i className="form-icon"></i> Published?
          </label>
          <div className="buttons-parent">
            <input
              type="submit"
              value="Submit"
              className="btn btn-primary buttons-child"
            />
            <button
              className="btn buttons-child"
              onClick={this.handleReset}>
              Reset
            </button>
          </div>
        </form>
      </div>
    )
  }
}

export default PostForm
