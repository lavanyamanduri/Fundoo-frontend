import React, { Component } from 'react'
import { makeStyles } from "@material-ui/core/styles";
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import EmailIcon from '@material-ui/icons/Email';
import VisibilityOffIcon from '@material-ui/icons/VisibilityOff';
import './styles.css'
import Button from '@material-ui/core/Button';
//import Controller from "../Controller/UserController";


const useStyles = makeStyles(theme => ({
    root: {},
  
    paper: {
      padding: theme.spacing(1),
      textAlign: "center",
      color: theme.palette.text.secondary
    }
  }));

  
class Login extends Component {

    
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

    if (pass.length < 7 || pass.length > 20) {
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

  onSubmit = () => {
  //  alert("login sucess");
   this.props.history.push("/dashboard");
  };

 
    render() {

        const classes = { useStyles };

    return (
      <>
        <div>

        <h2 style={{marginRight:"87%"}}>Fundoo Notes</h2>
      <div className={classes.margin}>

        <Grid container spacing={1} alignItems="flex-end">
          <Grid item>
            <EmailIcon ></EmailIcon>
           
          </Grid>
          <Grid item>
            <TextField required={true}
                  error={this.state.error1}
                  id="Email"
                  label="Email"
                  value={this.state.email}
                  onChange={this.onchangeEmail}
                  helperText={this.helpermailMethod()} />
          </Grid>
        </Grid>
      </div>

      <div className={classes.margin}>
        <Grid container spacing={1} alignItems="flex-end">
          <Grid item>
            <VisibilityOffIcon />
          </Grid>
          <Grid item>
            <TextField 
                required={true}
                error={this.state.error2}
                id="Password"
                label="Password"
                type="password"
                value={this.state.password}
                onChange={this.onchangePassword}
                className={classes.paper}
                helperText={this.helperpasswordMethod()}
            />
          </Grid>
        </Grid>
        </div>

                <Button 
                style={{marginRight:"87%",marginTop:'1%'}} 
                variant="outlined"
                  size="large"
                  color="default"
                  className={classes.paper}
                onClick={this.onSubmit}
                >
                  Login
                </Button>
        </div>
        <a href="http://localhost:3000/register" style={{marginRight:"87%",marginTop:'10%'}} 
        variant="outlined"
        onClick={this.registerPage}
        className={classes.paper}
        >Register_here</a>
      </>
    )
  }
}

export default Login
