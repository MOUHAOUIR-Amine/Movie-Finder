import React, { Component } from "react";
import Movie from "./Movie"


function MovieList(props){
    return(
        <h1>
        {
            props.movies.map((movie,i) => {
                return (
                    <Movie key={movie.show.id} image={movie.show.image.original} />
                )
             })
        }
        </h1>
    )
}

export default MovieList;