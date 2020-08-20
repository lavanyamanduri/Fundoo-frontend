import React from 'react';
import './App.css';
// import Register from './Components/Register';
// import Login from './Components/Login';
import VerifyEmail from './Components/VerifyEmail';
import {Route, Switch} from 'react-router-dom'
import Tabs from './Components/Tabs'
import Dashboard from './Components/Dashboard'
import LoginDemo from './Components/LoginDemo'
import Demo from './Components/Demo';
import RegisterDemo from './Components/RegisterDemo';
import Profile from './Components/Profile';
import Menudemo from './Components/Menudemo';
// import Login from './Components/Login'
function App() {
  return (
    <div className="App">
     
     <Switch>

    {/* <Route path="/dem" component={Login}></Route> */}
     <Route path="/demo" component={Menudemo}/>
     <Route path="/logindemo" component={LoginDemo}/>
      <Route path="/" exact component={LoginDemo}></Route>
      <Route path="/registerdemo" component={RegisterDemo}/>
      <Route path="/tab" component={Tabs}></Route>
     // <Route path="/dashboard/:jwt" exact component={Dashboard}></Route>
      <Route path="/dashboard" exact component={Dashboard}></Route>
      <Route path="/profile" exact component={Profile}></Route>
      <Route path="/verify/:jwt" component={VerifyEmail}></Route>
      
      </Switch>

    </div>
  );
}

export default App;
