import * as React from 'react';
import {Link} from 'react-router-dom';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

import '../styles/Header.css';

export default function ButtonAppBar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar className="appBar" style={{background: 'white'}} position="fixed" elevation={0}>
        <Toolbar>
          <Typography className="title" variant="h6" component="div" sx={{ flexGrow: 1 }}>
            <span id="p1"> CREASY </span> <span id="p2"> SOLUTIONS </span> 
          </Typography>

          <Typography className='options'>
              <Link style={styleButton} to="/users"><Button variant="light"> Users </Button></Link>
              <Link style={styleButton} to="/projects"><Button variant="light"> Projects </Button></Link>
              <Link style={styleButton} to="/editProfile"><Button variant="light" style={{marginRight: '20px'}}> Profile </Button></Link>
          </Typography>

          {window.location.pathname === '/' ? (
            <Link to='/signup' style={styleButton}> <Button id="register">Sign up</Button> </Link>
          ) : (
            <Link to='/' style={styleButton}> <Button id="register">Logout</Button> </Link>
          )} 
        </Toolbar>
      </AppBar>
    </Box>
  );
}

const styleButton = {
  textDecoration: 'none'
}