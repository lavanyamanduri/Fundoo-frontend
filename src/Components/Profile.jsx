import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    
    
    '& > *': {
      margin: theme.spacing(1),
    },
  },
  
}));

function Profile() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
     
      <Avatar style={{marginLeft:"2400%"}}alt="Profile" src="/static/images/avatar/1.jpg" ></Avatar>
     
    </div>
  );
}

export default Profile;