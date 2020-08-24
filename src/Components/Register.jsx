// import React, { Component } from 'react'
// import { makeStyles } from "@material-ui/core/styles";
// import TextField from '@material-ui/core/TextField';
// import Grid from '@material-ui/core/Grid';
// import AccountCircle from '@material-ui/icons/AccountCircle';
// import EmailIcon from '@material-ui/icons/Email';
// import MobileFriendlyIcon from '@material-ui/icons/MobileFriendly';
// import VisibilityOffIcon from '@material-ui/icons/VisibilityOff';
// import './styles.css'
// import Button from '@material-ui/core/Button';
// import Controller from "../Controller/UserController";



// const useStyles = makeStyles(theme => ({
//     root: {
//         flexGrow: 10,
//       },
     
//       margin: {
//         margin: theme.spacing(1),
//       },
//       paper: {
//         height: 140,
//         width: 100,
//       },
//       control: {
//         padding: theme.spacing(2),
//       },

//     }));

// class Register extends Component {
  
    
//   constructor(props) {
//     super(props)
  
//     this.state = {
//        email:"",
//        mobilenumber:"",
//        fname:"",
//        password:"",
//        message:"",
//        error:false,
//         error1:false,
//         error2:false,
//         error3:false,
//         error4:false
//     };
//   }
  
  
  
//   loginPage = () => {
//     this.props.history.push("/login");
//   };

//   helpermailMethod = () => {
//     if (this.state.error1) {
//       return "Not a valid mail id";
//     }
//   };

//   helpermobilenoMethod = () => {
//     if (this.state.error2) {
//       return "cannot be empty";
//     }
//   };

//   helperfirstnameMethod = () => {
//     if (this.state.error3) {
//       return "cannot be empty";
//     }
//   };
  

//   helperpasswordMethod = () => {
//     if (this.state.error4) {
//       return "enter between 7 to 20 characters ";
//     }
//   };

  

//   onchangeMobileno = async event => {
//     await this.setState({ Mobileno: event.target.value });

//     if (this.state.Mobileno === "") {
//       this.setState({ error2: true });
//     } else {
//       this.setState({ error2: false });
//     }
//   };

//   onchangeEmail = async event => {
//     await this.setState({ email: event.target.value });

//     if (
//       /^[a-zA-z\d._-]+@[a-zA-Z\d.-]+\.[a-zA-Z]{2,4}$/.test(this.state.email)
//     ) {
//       this.setState({ error1: false });
//     } else {
//       this.setState({ error1: true });
//     }
//   };

//   onchangeFirstname = async event => {
//     await this.setState({ firstname: event.target.value });

//     if (this.state.firstname === "") {
//       this.setState({ error3: true });
//     } else {
//       this.setState({ error3: false });
//     }
//   };

 

//   onchangePassword = async event => {
//     await this.setState({ password: event.target.value });
//     var pass = this.state.password;

//     if (pass.length < 7 || pass.length > 20) {
//       this.setState({ error4: true });
//     } else {
//       this.setState({ error4: false });
//     }
//   };


//   onSubmit = () => {
//     var registrationDetails = {
//         email: this.state.email,
//         mobileno: this.state.mobileno,
//       firstname: this.state.firstname,
//       password: this.state.password,
//     };
//     console.log(registrationDetails);
//     Controller.register(registrationDetails).then(res => {
//       console.log("register", res);
//       if (res.status === 200) {
//         alert("Verification link sent to youe mail");
//         this.props.history.push("/login");
//         console.log(res);
//         let token = res.data.object;
//         console.log(token);
//         localStorage.setItem("registerToken", token);
//         this.setState({
//           error: true,
//           message: "Registration successfull"
//         });
//       }
//     });
//   };

//     render() {
//        const classes = {useStyles};
//     return (
//         <>
//       <div>

//           <h2 style={{marginRight:"87%"}}>Fundoo Notes</h2>
//       <div className={classes.margin}>

//         <Grid container spacing={1} alignItems="flex-end">
//           <Grid item>
//             <EmailIcon ></EmailIcon>
           
//           </Grid>
//           <Grid item>
//             <TextField required={true}
//                   error={this.state.error1}
//                   id="Email"
//                   label="Email"
//                   value={this.state.email}
//                   onChange={this.onchangeEmail}
//                   helperText={this.helpermailMethod()} />
//           </Grid>
//         </Grid>
//       </div>
//       <div className={classes.margin}>
//         <Grid container spacing={1} alignItems="flex-end">
//           <Grid item>
//             <MobileFriendlyIcon />
//           </Grid>
//           <Grid item>
//             <TextField 
//                   type="text"
//                   required={true}
//                   error={this.state.error2}
//                   id="Mobileno"
//                   label="Mobileno"
//                   value={this.state.Mobileno}
//                   onChange={this.onchangeMobileno}
//                   className={classes.paper}
//                   helperText={this.helpermobilenoMethod()}
            
//             />
//           </Grid>
//         </Grid>
//       </div>
//       <div className={classes.margin} >
//         <Grid container spacing={1} alignItems="flex-end">
//           <Grid item>
//             <AccountCircle />
//           </Grid>
//           <Grid item>
//             <TextField 
//              label="Name"
//              required={true}
//              error={this.state.error3}
//              id="Firstname"     
//              value={this.state.firstname}
//              onChange={this.onchangeFirstname}
//              className={classes.paper}
//             helperText={this.helperfirstnameMethod()}
//                 /> 
//           </Grid>
//         </Grid>
//       </div>
//       <div className={classes.margin}>
//         <Grid container spacing={1} alignItems="flex-end">
//           <Grid item>
//             <VisibilityOffIcon />
//           </Grid>
//           <Grid item>
//             <TextField 
//                 required={true}
//                 error={this.state.error5}
//                 id="Password"
//                 label="Password"
//                 type="password"
//                 value={this.state.Password}
//                 onChange={this.onchangePassword}
//                 className={classes.paper}
//                 helperText={this.helperpasswordMethod()}
//             />
//           </Grid>
//         </Grid>
//         <Button 
//         style={{marginRight:"87%",marginTop:'1%'}} 
//         variant="outlined"
//         onClick={this.onSubmit}
//         className={classes.paper}
//         >Register</Button>

//         <a href="http://localhost:3000/login" 
//         style={{marginRight:"87%",marginTop:'5%'}} 
//         variant="outlined"
//         onClick={this.loginPage}
//         className={classes.paper}
//         >Login_here</a>

//       </div>
//       </div>
//       </>
//     )
//   }
// }

// export default Register
