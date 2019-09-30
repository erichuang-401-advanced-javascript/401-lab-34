import React from 'react';
import Form from './form/Form';
import PrevPosts from './prevPosts/PrevPosts';

function App() {
  return(
    <div className = "App">
      <h1>Blog</h1>
      <h4>New Post</h4>
      <Form />
      <PrevPosts/>
    </div>
  )
}

export default App;
