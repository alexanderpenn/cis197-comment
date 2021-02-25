/* eslint-disable react/jsx-filename-extension */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/prop-types */
/* eslint-disable semi */
import React from 'react';

export default class PendingPost extends React.Component {
  constructor(props) {
    super(props)
    this.depth = props.depth
    this.state = {
      name: '',
      postText: '',
    }
    this.handleInputChange = this.handleInputChange.bind(this)
    this.handleSubmission = this.handleSubmission.bind(this)
  }

  handleInputChange = event => {
    const { name } = event.target

    this.setState({
      [name]: event.target.value,
    })
  }

  handleSubmission = event => {
    event.preventDefault()
    const post = {
      name: this.state.name,
      postText: this.state.postText,
      replies: [],
      depth: this.depth,
    }
    this.props.onSubmit(post)
  }

  render = () => {
    return (
      <form onSubmit={this.handleSubmission}>
        <input
          placeholder="Name..."
          name="name"
          type="text"
          value={this.state.name}
          onChange={this.handleInputChange}
          required
        />
        <br />
        <input
          placeholder="Write a new post..."
          name="postText"
          type="text"
          value={this.state.postText}
          onChange={this.handleInputChange}
          required
        />
        <br />
        <button type="submit">Submit Post</button>
        <hr />
      </form>
    );
  }
}
