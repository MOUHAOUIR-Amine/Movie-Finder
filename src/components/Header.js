import React from 'react';
import { AppBar } from '@material-ui/core';
import { Toolbar } from '@material-ui/core'
import { Typography } from '@material-ui/core'
import {Container, Row, Col} from 'react-bootstrap';

function Header(){
    return(
    <div>  
      <AppBar position="static" color="transparent">
          <Toolbar variant="dense">
            <Typography variant="h6" color="inherit">
               Movies Finder
            </Typography>
          </Toolbar>
      </AppBar>
      
    </div>
    )
}



export default Header;