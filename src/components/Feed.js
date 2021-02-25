import React from 'react';
import ImplementedPost from './ImplementedPost';
import PendingPost from './PendingPost';

export default class Feed extends React.Component {
  
    render = () => {
      const { posts } = this.props
      return (
        <div id='feed'>
          {posts.map((post, index) => (
            <div key={index}>
              <ImplementedPost {...post} />
            </div>
          ))}
        </div>
      )
  }
}
