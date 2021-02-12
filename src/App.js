import React, { useState, useEffect } from 'react';
import './App.css';
import fire from './fire';
import Login from './Login';
import Hero from './Hero';

//functions 

const App = () => {
  const [user, setUser] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [hasAccount, setHasAccount] = useState(true);

  //clear inputs

  const clearInputs = () => {
    setEmail ('');
    setPassword ('');
  }

  //clear Errors 

  const clearErrors = () => {
    setEmailError('');
    setPasswordError ('');
  }


  //Handle Login Function & Errors.

  const handleLogin = () => {
    clearErrors();
    fire
      .auth()
      .signInWithEmailAndPassword(email, password)
      .catch(err => {
        switch(err.code){
          case 'auth/invalid-email':
          case 'auth/user-disabled':
          case 'auth/user-not-found':
            setEmailError(err.message);
            break;
            case 'auth/wrong-password':
              setPasswordError(err.message);
              break;
        }

      });

  };

  //Handle Signup Arrow function 

  const handleSignup = () => {
    clearErrors();
    fire
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .catch(err => {
        switch(err.code){
          case 'auth/email-already-in-use':
          case 'auth/invalid-email':
            setEmailError(err.message);
            break;
            case 'auth/weak-password':
              setPasswordError(err.message);
              break;
        }
      });
  };

  //Handle logout function

  const handleLogout = () => {
      fire.auth().signOut();
  };
  
  //check if user exists


  const authListener = () => {
    fire.auth().onAuthStateChanged((user) => {
      if (user) {
        clearInputs();
        setUser(user);
      } else {
        setUser('');
      }
    });
  };

  useEffect (() => {

    authListener();

  }, []);

    return (
    <div className="App">
      {user ? (
        <Hero handleLogout={handleLogout} />
      ) : (
      <Login 
      email={email}
      setEmail={setEmail}
      Password={password}
      setPassword={setPassword} 
      handleLogin={handleLogin}
      handleSignup={handleSignup} 
      hasAccount={hasAccount}
      setHasAccount={setHasAccount}
      emailError={emailError}
      passwordError={passwordError}
      />
      )}
    </div>
  );
}

export default App;
