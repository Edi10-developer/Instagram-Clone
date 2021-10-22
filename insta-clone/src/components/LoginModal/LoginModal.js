import React, { useState, useEffect } from 'react';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import Modal from '@material-ui/core/Modal';
import Input from '@material-ui/core/Input';
import './LoginModal.css';

import { auth } from '../../db/firebase';

const style = {
  position: 'absolute',
  display: 'flex',
  flexDirection: 'column',
  text: 'center',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

const LoginModal = () =>{
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const [user, setUser] = useState(null)
  useEffect(() => {
    auth.onAuthStateChanged((authUser) => { 
      if (authUser) {
        // User has loggen in...
        console.log(authUser);
        setUser(authUser);

        if (authUser.displayName) {
          // Don't update username...
        } else {
          // If we just created someone..
          return authUser.updateProfile({
            displayName: username,
          })
        }
      } else {
        // User has logged out...
        setUser(null);
      }
     })
  }, [user, username])

  const signUp = (e) => {
    e.preventDefault();

    auth.createUserWithEmailAndPassword(email, password)
    .then()
    .catch((error) => alert(error.message))
  };

  return (
    <div>
      <Button onClick={handleOpen}>Sign Up</Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <form className="modal__signup">
        <Box sx={style}>
        <img
          className="modal__image"
          src="https://seeklogo.com/images/I/instagram-logo-468E0CC266-seeklogo.com.png"
          alt="Header image" 
          />
            <Input 
          placeholder="username"
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)} 
          />
          <Input 
          placeholder="email"
          type="text"
          value={email}
          onChange={(e) => setEmail(e.target.value)} 
          />
           <Input 
          placeholder="password"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)} 
          />
           <Button onClick={signUp}>Sign Up</Button>
        </Box>
        </form>
      </Modal>
    </div>
  );
}

export default LoginModal;
