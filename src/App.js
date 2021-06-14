import './App.css';
import AppAppBar from './headpage'
import Head from './head'
import ProductHero from './backgroung'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Input from "./Input";
import SignIn from './login';
import Choose from './Choosepage'
// import CheckBox from './components/checkbox';
import SignUpSide from './SignUp';
// import ForgetPassword from './components/forgotpassword';
//import Background from './image/64495434_p0.jpg';
var sectionStyle = {
  backgroundPosition: '75% 25%',
  maxWidth: '100%',
  height: '100vh',
  backgroundSize: 'cover',
  backgroundRepeat: 'no-repeat',

  // makesure here is String确保这里是一个字符串，以下是es6写法
  backgroundImage: 'url(./COVID-19.jpg)'
};

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          {/* <Route exact path="/">
              <Login />
            </Route> */}
          <Route path="/main">
            <div style={sectionStyle}>
              <AppAppBar />
              <ProductHero />
            </div>
          </Route>
          <Route path="/login">
            <div style={sectionStyle}>
              <Head />
              <SignIn />
            </div>
          </Route>
          <Route path="/input">
            <div style={sectionStyle}>
              <Head />
              <Input />
            </div>
          </Route>
          <Route path="/signup">
            <div style={sectionStyle}>
              <Head />
              <SignUpSide />
            </div>
          </Route>
          <Route path="/choose">
            <div style={sectionStyle}>
              <Head />
              <Choose />
            </div>
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
