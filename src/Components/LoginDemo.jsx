import React, { Component } from 'react'
import '../login.css'
import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import TextField from '@material-ui/core/TextField';
import { Button } from '@material-ui/core';
import { Link } from 'react-router-dom';
import Controller from "../Controller/UserController";


const useStyles = makeStyles((theme) => ({
    root: {
      // '& > *': {
        
      //   margin: theme.spacing(1),
      //   width: '25ch',
      // },
      display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    
    },
  }));

const defaultProps = {
    bgcolor: 'background.paper',
    m: 1,
    border: 1,
    
    //style: { marginTop:"5%",borderRadius: "5px",flex:1},
     style: { width: '30rem', height: '30rem',  marginLeft:"1%",marginTop:"2%",borderRadius: "5px"},
  };
  

class LoginDemo extends Component {

    constructor(props) {
        super(props)
      
        this.state = {
         email: "",
         password: "",
         error1: false,
         error2: false,
         error: false,
         message: ""
        };
      }
      
      registerPage = () => {
         this.props.history.push("/register");
       };
     
       onchangeEmail = async event => {
         await this.setState({ email: event.target.value });
     
         if (
           /^[a-zA-z\d._-]+@[a-zA-Z\d.-]+\.[a-zA-Z]{2,4}$/.test(this.state.email)
         ) {
           this.setState({ error1: false });
         } else {
           this.setState({ error1: true });
         }
       };
     
       onchangePassword = async event => {
         await this.setState({ password: event.target.value });
         var pass = this.state.password;
     
         if (pass.length < 8 || pass.length > 20) {
           this.setState({ error2: true });
         } else {
           this.setState({ error2: false });
         }
       };
     
       helpermailMethod = () => {
         if (this.state.error1) {
           return "Not a valid mail id";
         }
       };
       helperpasswordMethod = () => {
         if (this.state.error2) {
           return "enter between 7 to 20 characters ";
         }
       };
    

       create = () => {
        this.props.history.push("/registerdemo");
      };

      onSubmit = () => {
        var loginDetails = {
          email: this.state.email,
          password: this.state.password
        };
        console.log(loginDetails);
        Controller.login(loginDetails).then(res => {
          console.log("login...", res);
          if (res.status === 200) {
            console.log("login....");
            let token = res.data.object;
            console.log(token, "hello");
            localStorage.setItem("logintoken", token);
            localStorage.setItem("owner", this.state.email);
            this.props.history.push("/dashboard/" + token);
            this.setState({
              error: true,
              message: "Login success"
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

        const classes = {useStyles};
        return (
           
              <div><span className= "flex-container" style={{display: "flex",flex:1,
              justifyContent: "center"}}>
           
            <Box  position="relative" variant="outlined"  borderColor="grey.500" {...defaultProps} >

                <h1 > Fundoo Notes</h1>
                    <p>Sign in</p>
                    <h4>to continue to fundoo</h4>
                   
                    <div>
                    <TextField 
                        position="absolute"
                        id="email" 
                        error={this.state.error1}
                        label="Email" 
                        variant="outlined" 
                        value={this.state.email}
                        onChange={this.onchangeEmail}
                        helperText={this.helpermailMethod()}
                        style={{marginTop:"10%", width:"65%",justifyContent:"space-between"}}
                    />
                   
                    <TextField 
                        position="absolute"
                        id="password" 
                        error={this.state.error2}
                        label="Password" 
                        variant="outlined" 
                        type="password"
                        value={this.state.password}
                        onChange={this.onchangePassword}
                       className={classes.paper}
                        helperText={this.helperpasswordMethod()}
                        style={{marginTop:"5%", width:"65%"}}
                    /></div>
                <div><br/><Box><  br/><div>
            < Link to = '/registerdemo'  style={{marginLeft:"40%",marginTop:"40px"}}><a  onClick={this.create}>Create Account</a></Link>
              
              <Button 
                    position="absolute"
                    style={{marginLeft:"20%",marginTop:'4%', }} 
                    variant="outlined"
                    size="large"
                    color="default"
                    className={classes.paper}
                    onClick={this.onSubmit}
                >
                  Login
                </Button>
                </div>
                </Box>
                </div>
            </Box> 
            </span>
            </div>
           
        );
    }
}

export default LoginDemo;
