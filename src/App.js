import React from 'react';
import './App.css';
import {Route, Switch} from 'react-router-dom'
import LoginDemo from './Components/LoginDemo'
import RegisterDemo from './Components/RegisterDemo';
import Dashboard from './Components/Dashboard';
import Demo from './Components/Demo';

function App() {
  return (
    <div className="App">
     
     <Switch>
       <Route path = "/demo" component = {Demo}/>
     <Route path="/login" component={LoginDemo}/>
     <Route path="/dashboard" component={Dashboard}></Route>
      <Route path="/" exact component={LoginDemo}></Route>
      <Route path="/register" component={RegisterDemo}/>
      {/* <Route path="/verify/:jwt" component={VerifyEmail}></Route> */}
      </Switch>

    </div>
  );
}

export default App;
