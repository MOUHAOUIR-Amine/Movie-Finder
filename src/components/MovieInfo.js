import React, { Component } from "react";
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import TableContainer from '@material-ui/core/TableContainer';

const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    paper: {
      padding: theme.spacing(2),
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
                    <Link href="#" onClick={props.CloseMovieInfo} style={{
                        margin:"20px",fontSize:"15px"          
                    }}>
                         <i class="fas fa-backward"></i> Go Back
                    </Link>
                    <br/><br/><br/>
                </Typography>
            </Grid>
            <Grid container spacing={0}>
                <Grid item xs={4}>
                     
                        {console.log(props.currentMovie)}
                        {props.currentMovie.show.image==null ?
                            <img 
                            src="https://sharptraining.com.au/wp-content/uploads/2019/09/thumbnail-default.jpg"  />: 
                             <img 
                            src={props.currentMovie.show.image.original}  
                            style={{
                                width:"420px",
                                height:"320px",
                                borderRadius:"8px",
                                paddingLeft:"50px",
                                paddingTop:"3px"
                                }}
                            />
                        }
                     
                </Grid>
                <Grid item xs={7}>
                     <Paper className={classes.paper}>
                          <Grid item xs container direction="column" spacing={12}>
                                <Grid item xs>
                                    <Typography gutterBottom variant="subtitle1" style={{textAlign:"center",color:"#fb7813",textDecoration: "underline overline",fontSize:"25px"}}>
                                        {props.currentMovie.show.name}    
                                    </Typography>
                                    <Typography variant="body2" color="textSecondary">
                                        <h6 style={{color:"#e79c2a",fontSize:"14px"}}>Type : <span style={{color:"#654062"}}>{props.currentMovie.show.type}</span></h6> 
                                    </Typography>
                                    <Typography variant="body2" gutterBottom>
                                        <h6 style={{color:"#e79c2a",fontSize:"14px"}}>Language : <span style={{color:"#654062"}}>{props.currentMovie.show.language}</span> </h6> 
                                    </Typography>
                                    <Typography variant="body2" gutterBottom>
                                        <h6 style={{color:"#e79c2a",fontSize:"14px"}}>Status : <span style={{color:"#654062"}}> {props.currentMovie.show.status}</span></h6>  
                                    </Typography>
                                    <Typography variant="body2" gutterBottom>
                                         <h6 style={{color:"#e79c2a",fontSize:"14px"}}>Premiered : <span style={{color:"#654062"}}>{props.currentMovie.show.premiered}</span></h6>  
                                    </Typography>
                                    
                                    <Typography variant="body2" gutterBottom>
                                        <h6 style={{color:"#e79c2a",fontSize:"14px"}}>summary : </h6>
                                            <span style={{color:"#654062"}}>{props.currentMovie.show.summary}</span> 
                                    </Typography>
                                    <Typography variant="body2" gutterBottom>
                                         <h6 style={{color:"#e79c2a",fontSize:"14px"}}>Url : <Link href={props.currentMovie.show.url} style={{color:"#1b6ca8"}}>{props.currentMovie.show.url} </Link></h6> 
                                    </Typography>
                                </Grid>
                            </Grid>    
                    </Paper>
                </Grid>                                                                         
            </Grid>
        </div>

    )
}

export default MovieInfo;