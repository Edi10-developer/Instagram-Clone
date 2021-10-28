import React, { useState, useEffect } from 'react';
import './App.css';
import { Post, ModalComponent, ImageUpload } from './components/index';
import { db, auth } from './db/firebase';

function App() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    db.collection('posts').onSnapshot(snapshot => {
      setPosts(snapshot.docs.map(doc => ({
        id: doc.id,
        post: doc.data()
      })));
    })
  }, []);

  // Set user
  const [user, setUser] = useState(null)
  useEffect(() => {
    auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        setUser(authUser);
      } else {
        setUser(null);
      }
    })
  }, [user])

  return (
    <div className="app">
      {user?.displayName ? (
        <ImageUpload username={user.displayName} />
      ) : (
        <h3>Sorry you need to login to upload</h3>
      )}


      <ModalComponent />
      <div className="app__header">
        <img
          className="app__headerImage"
          src="https://seeklogo.com/images/I/instagram-logo-468E0CC266-seeklogo.com.png"
          alt="Header image" />
      </div>

      {posts.map(({ id, post }) => (
        <Post
          key={id}
          username={post.username}
          imageUrl={post.imageUrl}
          caption={post.caption}
        />
      ))}

      {/* Header */}
      {/* Posts */}
      {/* Posts */}
    </div>
  );
}

export default App;
