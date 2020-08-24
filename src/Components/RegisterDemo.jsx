import React, { Component } from 'react'
import '../register.css';
import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import TextField from '@material-ui/core/TextField';
import { Button } from '@material-ui/core';
import Controller from "../Controller/UserController";
import Snackbar from '@material-ui/core/Snackbar';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import CloseOutlinedIcon from "@material-ui/icons/CloseOutlined";


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
    
    style: { width: '570px', height: '570px', marginLeft:"2%",marginTop:"2%",borderRadius: "5px"},
  };
  
  
class RegisterDemo extends Component {
    

  
    constructor(props) {
        super(props);
    

        //  this.state={open:false};
        // this.onSubmit=this.onSubmit.bind(this);

        this.state = {
          
          mobileNumber: "",
            fname: "",
            lname: "",
            email: "",
            password: "",
            cnfpassword: "",
            message:"",
            error: false,
            err1: false,
            err2: false,
            err3: false,
            err4: false,
            err5: false,
            err6: false,
            open:false
          };

          
      }


      snackBarClose = () => {
        this.setState({ Error: false });
      };

      // snackbarClose = (event) => {
      //   this.setState({snackbaropen:false});
      // }
      

      create = () => {
        this.props.history.push("/login");
      };

      // handleClose = (event, reason) => {
      //   if (reason === 'clickaway') {
      //     return;
      //   }
    
      //   setOpen(false);
      // };
     
    
      // helpermailMethod = () => {
      //   if (this.state.err1) {
      //     return "";
      //   }
      // };
    
      // helpermobilenoMethod = () => {
      //   if (this.state.err2) {
      //     return "";
      //   }
      // };
    
      // helperfirstnameMethod = () => {
      //   if (this.state.err3) {
      //     return "cannot be empty";
      //   }
      // };
      // helperlastnameMethod = () => {
      //   if (this.state.err4) {
      //     return "cannot be empty";
      //   }
      // };
    
      // helperpasswordMethod = () => {
      //   if (this.state.err5) {
      //     return " ";
      //   }
      //   else{
      //     return "";
      //   }
      // };
    
      // helperconfirmpasswordMethod = () => {
      //   if (this.state.err6) {
      //     return " ";
      //   }
      //   else{
      //     return "";
      //   }
      // };


     
      // if (passagain.length < 8 || passagain.length > 20) {
      //   this.setState({ err6: true });
    
        onchangeMobileno = async event => {
        await this.setState({ mobileNumber: event.target.value });
        
        
          if(/^[6789]\d{9}$/.test(this.state.mobileNumber)){
            this.setState({ err2: false });
        } else {
          this.setState({ err2: true });
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
           var pass=this.state.password;
           var n = pass.localeCompare(passagain);
        if (passagain.length < 8 || passagain.length > 20) {
          
          this.setState({ err6: true });
        } else {
          if(n){
          this.setState({ err6: true });}
          else{
            this.setState({ err6: false });
          }
        }
      };
    
          
      handleClose = (event, reason) => {
        if (reason === "clickaway") {
          return;
        }
    
        this.setState({ open: false });
      };

      onSubmit = (event) => {

        if (this.state.fname === "" || this.state.lname === "") {
          this.setState({
            Error: true,
            message: "name cannot be empty"
          });
        }
        
        else if (
          !/[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$/.test(this.state.email)
        ) {
          this.setState({
            Error: true,
            message: "Please provide a valid email address"
          });
        } else if (!/^[6789]\d{9}$/.test(this.state.mobileNumber)) {
          this.setState({
            Error: true,
            message: "Please provide a valid mobile number"
          });
        } else if ((this.state.password === null || this.state.password.length < 8)  && (this.state.cnfpassword === null || this.state.cnfpassword.length < 8)){
          this.setState({
            Error: true,
            message: "Password must contain minimum 8"
          });

        }else{
        this.setState({ open: true });

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
              // alert("Verification link is sent to your mail");
              this.setState({open:true});
            //this.setState({snackbaropen:true,snackbarmsg:res});
            this.props.history.push("/login");
            console.log(res);
            let token = res.data.object;
            console.log(token);
            localStorage.setItem("registerToken", token);
            this.setState({
              error: true,
              message: "Registration success"
            });
          }
          else {
            this.setState({
              error: true,
              message: 'Please Register'
            })
          }
        });
      }
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
        
            <Snackbar
                anchorOrigin={{
                  vertical: "top",
                  horizontal: "center"
                }}
                open={this.state.Error}
                autoHideDuration={3000}
                onClose={this.snackBarClose}
                message={<span id="message-id">{this.state.message}</span>}
                action={
                  <IconButton onClick={this.snackBarClose}>
                    <CloseOutlinedIcon />
                  </IconButton>
                }
              />
                <TextField 
                required={true}
                error={this.state.err3}
                id="fname"
                label="Firstname"
                variant="outlined"
                value={this.state.fname}
                onChange={this.onchangeFirstname}
                className={classes.paper}
                // helperText={this.helperfirstnameMethod()}
                style={{marginTop:"1%", width:"33%", height:"10%",flexWrap: "wrap" }}
            />


            <TextField 
                
                
                required={true}
                error={this.state.err4}
                id="lname"
                label="Lastname"
                variant="outlined"
                value={this.state.lname}
                onChange={this.onchangeLastname}
                // helperText={this.helperlastnameMethod()}
                style={{marginTop:"1%", width:"33%",height:"10%", marginLeft:"3%",flexWrap: "wrap"}}
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
                // helperText={this.helpermailMethod()}
                style={{marginTop:"5%", width:"33%", height:"10%",flexWrap: "wrap"}}
            />

            <TextField 
                required={true}
                error={this.state.err2}
                type="text"
                id="mobileNumber"
                label="Mobileno"
                variant="outlined"
                value={this.state.mobileNumber}
                onChange={this.onchangeMobileno}
                className={classes.paper}
                // helperText={this.helpermobilenoMethod()}
                style={{marginTop:"5%", width:"33%",height:"10%", marginLeft:"3%",flexWrap: "wrap"}}
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
                // helperText={this.helperpasswordMethod()}
                style={{marginTop:"5%", width:"33%", height:"-10%",flexWrap: "wrap"}}
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
                  // helperText={this.helperconfirmpasswordMethod()}
                style={{marginTop:"5%", width:"33%",height:"10%", marginLeft:"3%",flexWrap: "wrap"}}
            />
        
     
<br/>
      <a href ="http://localhost:3000/login" style={{marginLeft:"5%"}}>Sign in Instead</a>
      
        <Button 
        
          type="submit"
            position="absolute"
            style={{marginLeft:"20%",marginTop:'5%'}} 
            variant="outlined"
            size="large"
            color="default"
            className={classes.paper}
            onClick={this.onSubmit}
        
        >
          Register
        </Button>

        <Snackbar
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'center',
        }}
        open={this.state.open}
        autoHideDuration={6000}
        onClose={this.handleClose}
        message="Verification link is sent to your mail"
        action={
          <React.Fragment>
            <Button color="secondary" size="small" onClick={this.handleClose}>
              UNDO
            </Button>
            <IconButton size="small" aria-label="close" color="inherit" onClick={this.handleClose}>
              <CloseIcon fontSize="small" />
            </IconButton>
          </React.Fragment>
        }
      />
        
        
       
        
      </Box>
      </span>
    </div>

   
);
  }
}

export default RegisterDemo;
