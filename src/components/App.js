import React, { Component } from 'react';
import Header from "./Header"
import Footer from './Footer';
import Search from './Search';
import MovieList from './MovieList';
import Movie from './Movie';

class App extends Component {
  constructor(){
    super()
    this.state={
      movies:[],
      searchTerm:''
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

  render(){
    return (
      <div className="App">
        <Header />
        <Search handleSubmit={this.handleSubmit} handleChange={this.handleChange}/>
        <MovieList movies={this.state.movies} />
       
        <Footer />
      </div>
    );
  }
}

export default App;
