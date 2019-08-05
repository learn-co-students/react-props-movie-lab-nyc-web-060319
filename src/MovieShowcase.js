import React, { Component } from 'react';
import MovieCard from './card-components/MovieCard.js'
import movieData from './data.js'

export default class MovieShowcase extends Component {

  generateMovieCards = () => {
    // map over your movieData array and return the correct
    return movieData.map(function(movie, index) {
      return (<MovieCard key={index}
        title={movie.title}
        IMDBRating={movie.IMDBRating}
        genres={movie.genres}
        poster={movie.poster}/>)
    })
  }

  render() {
    return (
      <div id="movie-showcase">
        {this.generateMovieCards()}
      </div>
    )
  }
}
// export default class MovieShowcase extends Component {
// 	generateMovieCards = () => {
// 		return movieData.map((data, idx) => <MovieCard key={idx} {...data} />);
// 	};
//
// 	render() {
// 		return <div id="movie-showcase">{this.generateMovieCards()}</div>;
// 	}
// }
