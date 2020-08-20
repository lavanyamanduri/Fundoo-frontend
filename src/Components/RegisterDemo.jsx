import React, { Component } from 'react'
import '../register.css';
import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import TextField from '@material-ui/core/TextField';
import { Button } from '@material-ui/core';
import { BrowserRouter as  Link } from 'react-router-dom';
import Controller from "../Controller/UserController";


const useStyles = makeStyles((theme) => ({
    root: {
        // display:"flex",
        
        
      '& > *': {
        margin: theme.spacing(1),
        width: '25ch',
      },
      
    },
  }));


const defaultProps = {
    bgcolor: 'background.paper',
    m: 1,
    border: 1,
    
    style: { width: '45rem', height: '20rem',  marginLeft:"6%",marginTop:"3%",borderRadius: "5px"},
  };
  


class RegisterDemo extends Component {
  
    constructor(props) {
        super(props);
    
        this.state = {
          mobileNumber: "",
            fname: "",
            lname: "",
            email: "",
            password: "",
            cnfpassword: "",
            error: false,
            err1: false,
            err2: false,
            err3: false,
            err4: false,
            err5: false,
            err6: false,
            message: ""
          };
      }
  

      create = () => {
        this.props.history.push("/logindemo");
      };


      loginPage = () => {
        this.props.history.push("/logindemo");
      };
    
      helpermailMethod = () => {
        if (this.state.err1) {
          return "Not a valid mail id";
        }
      };
    
      helpermobilenoMethod = () => {
        if (this.state.err2) {
          return "cannot be empty";
        }
      };
    
      helperfirstnameMethod = () => {
        if (this.state.err3) {
          return "cannot be empty";
        }
      };
      helperlastnameMethod = () => {
        if (this.state.err4) {
          return "cannot be empty";
        }
      };
    
      helperpasswordMethod = () => {
        if (this.state.err5) {
          return "enter between 8 to 20 characters ";
        }
      };
    
      helperconfirmpasswordMethod = () => {
        if (this.state.err6) {
          return "enter between 8 to 20 characters ";
        }
      };
    
      onchangeMobileno = async event => {
        await this.setState({ mobileNumber: event.target.value });
    
        if (this.state.mobileNumber === "") {
          this.setState({ err2: true });
        } else {
          this.setState({ err2: false });
        }
      };
    
      onchangeEmail = async event => {
        await this.setState({ email: event.target.value });
    
        if (
          /^[a-zA-z\d._-]+@[a-zA-Z\d.-]+\.[a-zA-Z]{2,4}$/.test(this.state.email)
        ) {
          this.setState({ err1: false });
        } else {
          this.setState({ err1: true });
        }
      };
    
      onchangeFirstname = async event => {
        await this.setState({ fname: event.target.value });
    
        if (this.state.fname === "") {
          this.setState({ err3: true });
        } else {
          this.setState({ err3: false });
        }
      };
    
      onchangeLastname = async event => {
        await this.setState({ lname: event.target.value });
    
        if (this.state.lname === "") {
          this.setState({ err4: true });
        } else {
          this.setState({ err4: false });
        }
      };
    
      onchangePassword = async event => {
        await this.setState({ password: event.target.value });
        var pass = this.state.password;
    
        if (pass.length < 8 || pass.length > 20) {
          this.setState({ err5: true });
        } else {
          this.setState({ err5: false });
        }
      };
    
      onchangeConfirmPassword = async event => {
        await this.setState({ cnfpassword: event.target.value });
        var passagain = this.state.cnfpassword;
    
        if (passagain.length < 8 || passagain.length > 20) {
          this.setState({ err6: true });
        } else {
          this.setState({ err6: false });
        }
      };
    
      onSubmit = () => {
        var registrationDetails = {
          mobileNumber: this.state.mobileNumber,
          fname: this.state.fname,
          lname: this.state.lname,
          email: this.state.email,
          password: this.state.password,
          cnfpassword: this.state.cnfpassword,
        };
        console.log(registrationDetails);
        Controller.register(registrationDetails).then(res => {
          console.log("register...", res);
          if (res.status === 200) {
            alert("Verification link is sent to your mail");
            this.props.history.push("/logindemo");
            console.log(res);
            let token = res.data.object;
            console.log(token);
            localStorage.setItem("registerToken", token);
            this.setState({
              error: true,
              message: "Registration success"
            });
          }
          // else {
          //   this.setState({
          //     error: true,
          //     message: 'Please Reregister'
          //   })
          // }
        });
      };
  
    render() {

        const classes = { useStyles };
    return (

      <div  ><span className= "flex-container" style={{display: "flex",flex:1,
        justifyContent: "center"}}>
        <Box  variant="outlined"  borderColor="grey.500" {...defaultProps}>

        <h1> Fundoo Notes</h1>
          <div>  <p>Create your Fundoo Account</p></div>
            <h4>to continue to fundoo</h4>

           <div style={{gridcolumnGap: "30px",
                gridrowGap: "10px"}}> 
                <TextField 
                required={true}
                error={this.state.err3}
                id="fname"
                label="Firstname"
                variant="outlined"
                value={this.state.fname}
                onChange={this.onchangeFirstname}
                className={classes.paper}
                helperText={this.helperfirstnameMethod()}
                style={{marginTop:"1%", width:"33%", height:"10%" }}
            />
            <TextField 
                display="flex"
                justifyContent="space-between"
                required={true}
                error={this.state.err4}
                id="lname"
                label="Lastname"
                variant="outlined"
                value={this.state.lname}
                onChange={this.onchangeLastname}
                helperText={this.helperlastnameMethod()}
                style={{marginTop:"1%", width:"33%",height:"10%", marginLeft:"3%"}}
            />
            <br/>
            <TextField 
                required={true}
                error={this.state.err1}
                id="email"
                label="Email"
                variant="outlined"
                value={this.state.email}
                onChange={this.onchangeEmail}
                className={classes.paper}
                helperText={this.helpermailMethod()}
                style={{marginTop:"4%", width:"33%", height:"10%"}}
            />

            <TextField 
                required={true}
                error={this.state.err2}
                id="mobileNumber"
                label="Mobileno"
                variant="outlined"
                value={this.state.mobileNumber}
                onChange={this.onchangeMobileno}
                className={classes.paper}
                helperText={this.helpermobilenoMethod()}
                style={{marginTop:"4%", width:"33%",height:"10%", marginLeft:"3%"}}
            />
            <br></br>
            <TextField 
                 required={true}
                 justifyContent="space-between"
                 error={this.state.err5}
                 id="password"
                 label="Password"
                 type="password"
                 variant="outlined"
                 value={this.state.password}
                 onChange={this.onchangePassword}
                className={classes.paper}
                helperText={this.helperpasswordMethod()}
                style={{marginTop:"4%", width:"33%", height:"-10%"}}
            />
            <TextField 
                id="cnfpassword"
                required={true}
                error={this.state.err6}
                label="Confirm Password" 
                variant="outlined" 
                type="password"
                value={this.state.cnfpassword}
                  onChange={this.onchangeConfirmPassword}
                  className={classes.paper}
                  helperText={this.helperconfirmpasswordMethod()}
                style={{marginTop:"4%", width:"33%",height:"10%", marginLeft:"3%"}}
            />
        <br/><br/>
      < Link to = '/logindemo' onClick={this.create} style={{marginLeft:"-10%"}}><a href ="http://localhost:3000/logindemo" >Sign in Instead</a></Link> 
      
        <Button 
            style={{marginLeft:"50%",marginTop:'2%'}} 
            variant="outlined"
            size="large"
            color="default"
            className={classes.paper}
            onClick={this.onSubmit}
        >
          Register
        </Button><br/>
        
        </div>
      </Box>
      </span>
    </div>

   
);
  }
}

export default RegisterDemo;
