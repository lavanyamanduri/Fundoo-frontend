import React from 'react';
import  { Component } from "react";
import Controller from "../Controller/UserController";

class VerifyEmail extends Component {
  constructor(props) {
    super(props);

    this.state = {
      error: false,
      message: "",
      jwt: this.props.match.params.jwt,
    };
  }

  componentDidMount() {
    this.verificationMethod();
  }

  
  verificationMethod = () => {
    Controller.verification(this.state.jwt).then((res) => {
      alert(this.state.jwt);
      console.log("verify...", res);
      if (res.status === 200) {
         alert("Email has been verified");
        this.props.history.push("/login");
        localStorage.removeItem("registerToken");
        this.setState({
          error: true,
          message: "Email Verified",
        });
      }
      // else {
      //   this.setState({
      //     error: true,
      //     message: 'Please Register'
      //   })
      // }
    });
  };

  render() {
    return (
      <div>
        <p >{this.state.jwt} </p>
      </div>
    );
  }
}

export default VerifyEmail;
