import React, { Component } from "react";
import Movie from "./Movie"


function MovieList(props){
    return(
        <h1>
        {
            props.movies.map((movie,i) => {
                return (
                    <Movie 

                    key={movie.show.id} 
                    viewMovieInfo={props.viewMovieInfo}
                    image={movie.show.image} 
                    name={movie.show.name} 
                    movieId={movie.show.id} 
                    rating={movie.show.rating}
                    type={movie.show.type}
                    language={movie.show.language}
                    premiered={movie.show.premiered}

                    />
                )
             })
        }
        </h1>
    )
}

export default MovieList;