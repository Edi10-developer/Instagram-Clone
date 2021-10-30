import React, { useState, useEffect } from 'react';
import './App.css';
import { Post, ModalComponent, ImageUpload } from './components/index';
import { db, auth } from './db/firebase';
import InstagramEmbed from 'react-instagram-embed';

function App() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    db.collection('posts').orderBy('timestamp', 'desc').onSnapshot(snapshot => {
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
      <div className="app__header">
        <img
          className="app__headerImage"
          src="https://seeklogo.com/images/I/instagram-logo-468E0CC266-seeklogo.com.png"
          alt="Header image" />
        <ModalComponent />
      </div>

      <div className="app__posts">
        <div className="app__postsLeft">
          {posts.map(({ id, post }) => (
            <Post
              key={id}
              postId={id}
              user={user}
              username={post.username}
              imageUrl={post.imageUrl}
              caption={post.caption}
            />
          ))}
        </div>
        <div className="app__postsRight">
          <InstagramEmbed
            url='https://www.instagram.com/p/CVd-o-vPf-y/?utm_source=ig_embed&amp;utm_campaign=loading'
            clientAccessToken='123|456'
            maxWidth={320}
            hideCaption={false}
            containerTagName='div'
            protocol=''
            injectScript
            onLoading={() => { }}
            onSuccess={() => { }}
            onAfterRender={() => { }}
            onFailure={() => { }}
          />
        </div>
      </div>

      <div className="app__imageUpload">
        {user?.displayName && (
          <ImageUpload username={user.displayName} />
        )}
      </div>
    </div>
  );
}

export default App;
