import React, { useState, useEffect } from "react";
import PendingPost from "./PendingPost";

export default class ImplementedPost extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      count: 0,
      replies: [],
      replyIndex: -1,
      addReply: false,
    }
  }

  incrementVote = () => {
    this.setState((prevState) => ({
      count: prevState.count + 1,
      replies: this.state.replies,
    }))
  }

  decrementVote = () => {
    this.setState((prevState) => ({
      count: prevState.count - 1,
    }))
  }

  addReply = reply => {
    this.setState(({ replies }) => {
      return {
        replies: [
          ...replies,
          reply
        ], addReply: false
      }
    })
  }

  onAddReply = () => {
    if (this.props.depth < 2) {
      this.setState({ addReply: true })
    } else {
      alert("Maximum Comment Depth of 3 Would Be Exceeded!");
    }
  }

  render = () => {
    const { replies, addReply } = this.state
    return (
      <div
        style={{
          marginLeft: `${this.props.depth * 50}px`,
        }}
        key={this.props.pKey}
      >
        <div>
          <p>
            <span style={{ fontWeight: "bold" }}>{this.props.name}</span>:{" "}
            {this.props.postText}
          </p>
          <div>
            <button onClick={this.incrementVote}>&#8593;</button>
            <span>{this.state.count}</span>
            <button onClick={this.decrementVote}>&#8595;</button>
          </div>
          <button onClick={this.onAddReply}>Reply</button>
          {addReply && (
            <PendingPost onSubmit={this.addReply} depth={this.props.depth + 1} />
          )}
          {replies.map((reply, index) => (
            <ImplementedPost key={index} {...reply} />
          ))}
        </div>
      </div>
    );
  };
}
