import axios from "axios";

// let jwt = localStorage.getItem("logintoken");

// const token = localStorage.getItem("logintoken");
var controller = {
  register(registrationDetails) {
    console.log("controller register method ", registrationDetails);
    return axios.post(
      "http://localhost:8085/user/register",registrationDetails);
  },


  login(loginDetails) {
    
    console.log("controller login method ", loginDetails);
    return axios.post("http://localhost:8085/user/login", loginDetails);
},
 
  
  verification(jwt) {
    console.log("controller `verification method ");
    console.log(jwt);
    return axios.get(`http://localhost:8085/user/verifyemail/${jwt}`);
  }, 
  
}; 

export default controller;