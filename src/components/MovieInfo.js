import React, { Component } from "react";
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import ButtonBase from '@material-ui/core/ButtonBase';
import Link from '@material-ui/core/Link';

const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    paper: {
      padding: theme.spacing(2),
      textAlign: 'center',
      color: theme.palette.text.secondary,
    },
  }));
  

    

function MovieInfo(props){
    const classes = useStyles();
    return(
        <div className={classes.root}>
            <Grid item>
                <Typography variant="body2" style={{ cursor: 'pointer' }} color="primary" >
                     <br/>
                    <Link href="#" onClick={props.CloseMovieInfo} >
                          Go Back
                    </Link>
                    <br/><br/><br/>
                </Typography>
            </Grid>
            <Grid container spacing={3}>
                <Grid item xs={6}>
                     <Paper className={classes.paper}>
                        {
                            console.log(props.currentMovie)
                        }
                    </Paper>
                </Grid>
                <Grid item xs={6}>
                     <Paper className={classes.paper}>second</Paper>
                </Grid>                                                                         
            </Grid>
        </div>

    )
}

export default MovieInfo;