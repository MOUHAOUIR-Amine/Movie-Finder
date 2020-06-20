import React, { Component } from 'react';
import Header from "./Header"
import Footer from './Footer';
import Search from './Search';
import MovieList from './MovieList';
import MovieInfo from './MovieInfo';


class App extends Component {
  constructor(){
    super()
    this.state={
      movies:[],
      searchTerm:'',
      currentMovie:null
    }
  }

//handleSubmit function
  handleSubmit=(event) => {
    event.preventDefault();

    fetch('https://api.tvmaze.com/search/shows?q=test&query=$(this.state.searchTerm)')
    .then(data => data.json())
    .then(data => {
      console.log(data);
      this.setState({movies:[...data]})
    })
  }

// handleChange function
handleChange=(event) => {
  this.setState({searchTerm:event.target.value})  
}

//afficher movie datails
viewMovieInfo =(id) =>{
  const filteredMovie = this.state.movies.filter(movie =>movie.id == id)
  const newCurrentMovie=filteredMovie.length>0 ? filteredMovie[0]:null
  this.setState({currentMovie:filteredMovie})
}

CloseMovieInfo=() =>{
  this.setState({currentMovie:null})
}








  render(){
    return (
      <div className="App">
        <Header />
        {this.state.currentMovie==null ?
          <div>  
            <Search handleSubmit={this.handleSubmit} handleChange={this.handleChange}/>
            <MovieList viewMovieInfo={this.viewMovieInfo} movies={this.state.movies} />
          </div>
          : <MovieInfo CloseMovieInfo={this.CloseMovieInfo} />
        }
        <Footer />
      </div>
    );
  }
}

export default App;

