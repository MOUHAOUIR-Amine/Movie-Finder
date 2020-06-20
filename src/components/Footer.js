import React from 'react';
import { Typography } from '@material-ui/core'
import {Container, Row, Col} from 'react-bootstrap';
import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';


const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    textAlign: 'center',
    
  },

  footer: {
    padding: theme.spacing(2, 1),
    marginTop: 440,
    backgroundColor: '#8b6b61',
    color: 'white'
        },
}));

function Footer() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <CssBaseline />
       <footer className={classes.footer}>
        <Container maxWidth="sm">
          <Typography variant="body1">Created by Amine Mouhaouir</Typography>
          <Typography variant="body2" color="wheat">
          {'Copyright © '}
          {new Date().getFullYear()}
          {'.'}
           </Typography>
         </Container>
      </footer>
    </div>
  );
}


export default Footer;
