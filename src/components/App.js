/* eslint-disable react/jsx-filename-extension */
/* eslint-disable semi */
import React, { useState } from 'react'
import PendingPost from './PendingPost'
import Feed from './Feed'

const App = () => {
  const [posts, setPosts] = useState([])

  const onSubmit = post => {
    setPosts([...posts, post])
  }

  return (
    <div style={{ marginLeft: 'auto', marginRight: 'auto' }}>
      <h1>CIS 197 Comment Feed</h1>
      <PendingPost onSubmit={onSubmit} depth={0} />
      <Feed setPosts={setPosts} posts={posts} />
    </div>
  )
}
export default App
