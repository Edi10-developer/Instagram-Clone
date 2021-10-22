import React, { useState, useEffect } from 'react';
import './App.css';
import { Post, LoginModal } from './components/index';
import { db } from './db/firebase';

function App() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    db.collection('posts').onSnapshot(snapshot => {
      setPosts(snapshot.docs.map(doc => ({
        id: doc.id,
        post: doc.data()
      })));
    })
  }, [])

  return (
    <div className="app">
      <LoginModal />
      <div className="app__header">
        <img
          className="app__headerImage"
          src="https://seeklogo.com/images/I/instagram-logo-468E0CC266-seeklogo.com.png"
          alt="Header image" />
      </div>

      { posts.map(({ id, post }) => (
        <Post
          key={id}
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
