import React from 'react';
import { AppBar } from '@material-ui/core';
import { Toolbar } from '@material-ui/core'
import { Typography } from '@material-ui/core'
import {Container, Row, Col} from 'react-bootstrap';


function Footer(){
    return(
    <div style={{position:"fixed" ,bottom:"0px" ,width:"100%",textAlign:"center"}}>  
      <AppBar position="static" >
          <Toolbar variant="dense">
            <Typography variant="h6" color="inherit">
               Created by Amine
            </Typography>
          </Toolbar>
      </AppBar>
      
    </div>
    )
}



export default Footer;
