import React, { Component } from "react";
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import ButtonBase from '@material-ui/core/ButtonBase';
import Link from '@material-ui/core/Link';


const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    paper: {
      padding: theme.spacing(2),
      margin: 'auto',
      maxWidth: 500,
    },
    image: {
      width: 128,
      height: 128,
    },
    img: {
      margin: 'auto',
      display: 'block',
      maxWidth: '100%',
      maxHeight: '100%',
    },
  }));

function Movie(props){
    const classes = useStyles();
    return(
        <div className={classes.root}>
        <br />
      <Paper className={classes.paper}>
        <Grid container spacing={2}>
          <Grid item>
            <ButtonBase className={classes.image}>
            { props.image ==null ?
                <img 
                className={classes.img} 
    
                src="https://sharptraining.com.au/wp-content/uploads/2019/09/thumbnail-default.jpg"  />
                             
                :<img 
                className={classes.img} 
                
                src={props.image.medium}  

                />
           }
              
            </ButtonBase>
          </Grid>
          <Grid item xs={12} sm container>
            <Grid item xs container direction="column" spacing={2}>
              <Grid item xs>
                <Typography gutterBottom variant="subtitle1">
                    {props.name}    
                </Typography>
                <Typography variant="body2" color="textSecondary">
                {props.language}
                </Typography>
                <Typography variant="body2" gutterBottom>
                    Type : {props.type}
                </Typography>
                
                <Typography variant="body2" gutterBottom>
                    Premiered: {props.premiered}
                </Typography>
              </Grid>
              <Grid item>
                <Typography variant="body2" style={{ cursor: 'pointer' }} color="primary" >
                -> 
                    <Link href="#" onClick={()=> props.viewMovieInfo(props.movieId)}>
                          More details
                    </Link>
                </Typography>
              </Grid>
            </Grid>
            <Grid item>
                { props.rating.average ==null ?
                    <Typography variant="subtitle1">null</Typography>
                    :<Typography variant="subtitle1">{props.rating.average} /10</Typography>
                }
            </Grid>
          </Grid>
        </Grid>
      </Paper>
    </div>
    )
}


export default Movie;






