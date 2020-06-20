import React, { Component } from "react";
import {Container, Row, Col} from 'react-bootstrap';
import { Button,Input } from '@material-ui/core';
import { Typography } from '@material-ui/core'

function Search(props){
    return (
       <div style={{marginLeft:"550px",marginTop:"15px"}}>
       
        <Container>
          <Row>
            <form  noValidate autoComplete="off" onSubmit={props.handleSubmit}>
                <Input placeholder="Search Movie" onChange={props.handleChange} />
                <Button variant="outlined" size="large"  >
                    <Typography variant="h6" color="inherit">
                        Find
                    </Typography>
                </Button>
            </form>
          </Row>
          
        </Container>
        </div>
    )
}

export default Search;