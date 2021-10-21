import logo from './logo.svg';
import './App.css';
import { Post } from './components/index';

function App() {
  return (
    <div className="app">
    <div className="app__header">
      <img 
      className="app__headerImage"
      src="https://seeklogo.com/images/I/instagram-logo-468E0CC266-seeklogo.com.png" />
    </div>
    <Post 
    username="ediselimi"
    imageUrl="https://freefrontend.com/assets/img/css-logos/react-logo-pure-css.png" 
    caption="Wow, il corso di React è davvero interessante."
    />
       <Post 
    username="robertobaggio"
    imageUrl="https://i1.wp.com/blog.logrocket.com/wp-content/uploads/2020/06/React-Native.png?fit=730%2C412" 
    caption="Wow, il corso di React è davvero interessante."
    />
    {/* Header */}
      {/* Posts */}
        {/* Posts */}
    </div>
  );
}

export default App;
