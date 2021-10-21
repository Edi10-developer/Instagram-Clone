import React, { useState , useEffect } from 'react';
import './App.css';
import { Post } from './components/index';
import { db } from './firebase';

function App() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    db.collection('posts').onSnapshot(snapshot => {
      setPosts(snapshot.docs.map(doc => doc.data()));
    })
  }, [posts])

  return (
    <div className="app">
      <div className="app__header">
        <img
          className="app__headerImage"
          src="https://seeklogo.com/images/I/instagram-logo-468E0CC266-seeklogo.com.png" />
      </div>

      { posts.map(post => (
        <Post
          username={post.username}
          imageUrl={post.imageUrl}
          caption={post.caption}
        />
      )) }

      {/* Header */}
      {/* Posts */}
      {/* Posts */}
    </div>
  );
}

export default App;
