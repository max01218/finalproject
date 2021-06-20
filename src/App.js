import './App.css';
import { useState, useEffect } from 'react';
import fire from './fire';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Input from "./components/Input";
import SignIn from './components/login';
// import CheckBox from './components/checkbox';
import SignUp from './components/SignUp';
import AppAppBar from './headpage'
import Main from './backgroung'
import Choose from './Choosepage';
import Select from './Select';
// import ForgetPassword from './components/forgotpassword';

const App = () => {
  const [user, setUser] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');

  const BackToHomepage = () => {
    window.location.replace("https://morning-brook-45158.herokuapp.com/")
  }

  const clearInputs = () => {
    setEmail('');
    setPassword('');
  }
  const clearErrors = () => {
    setEmailError('');
    setPasswordError('');
  }

  const handleLogin = () => {
    clearErrors();
    fire
      .auth()
      .signInWithEmailAndPassword(email, password)
      .catch(err => {
        switch (err.code) {
          case "auth/invalid-email":
          case "auth/user-disabled":
          case "auth/user-not-found":
            setEmailError(err.message);
            break;
          case "auth/wrong-password":
            setPasswordError(err.message);
            break;
        }
      });
  };

  const handleSignup = () => {
    clearErrors();
    fire
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .catch(err => {
        switch (err.code) {
          case "auth/email-already-in-use":
          case "auth/invalid-email":
            setEmailError(err.message);
            break;
          case "auth/weak-password":
            setPasswordError(err.message);
            break;
        }
      });
  };

  const handleLogout = () => {
    fire.auth().signOut();
    window.location.replace("https://morning-brook-45158.herokuapp.com/login")
    //window.location.replace("http://localhost:3000/login")
  };

  const authListener = () => {
    fire.auth().onAuthStateChanged((user) => {
      if (user) {
        clearInputs();
        setUser(user);
      } else {
        setUser("");
      }
    });
  };

  useEffect(() => {
    authListener();
  }, []);
  return (
    <div className="App">
      <Router>
        <Switch>
          {<Route exact path="/">
            <AppAppBar />
            <Main />
          </Route>}
          <Route path="/login">
            <SignIn
              email={email}
              setEmail={setEmail}
              password={password}
              setPassword={setPassword}
              handleLogin={handleLogin}
              emailError={emailError}
              passwordError={passwordError}
              user={user}
              BackToHomepage={BackToHomepage}
            />
          </Route>
          <Route path="/input">
            <Input handleLogout={handleLogout} user={user} />
          </Route>
          <Route path="/signup">
            <SignUp
              email={email}
              setEmail={setEmail}
              password={password}
              setPassword={setPassword}
              handleSignup={handleSignup}
              emailError={emailError}
              passwordError={passwordError}
              user={user}
              BackToHomepage={BackToHomepage}
            />
          </Route>
          <Route path="/choose" >
            <Choose user={user} />
          </Route>
          <Route path="/show">
            <Select handleLogout={handleLogout} user={user} />
          </Route>
          {/* <Route path="/forgetpassword">
              <ForgetPassword />
            </Route> */}
        </Switch>
      </Router>
    </div>
  );
}

export default App;