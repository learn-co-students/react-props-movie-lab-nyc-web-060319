import React, { Component } from 'react';
import MovieCard from './card-components/MovieCard.js'
import movieData from './data.js'

export default class MovieShowcase extends Component {
  generateMovieCards(props) {
    // map over your movieData array and return the correct   ...? 
    // .map over the imported movie data array and render MovieCards for each element.
    // pass all 4 props
    
    console.log("poster @ MSC Top level is: ", props)
    // this.props.poster - Undefined.   props - undefined
    
    // need both returns,  return the whole map AND each MovieCard
    return movieData.map( film => {
      console.log('film.poster is: ', film.poster)
      return <MovieCard title={film.title} IMDBRating={film.IMDBRating} genres={film.genres} poster={film.poster}/>
    })
  }

  render() {
    return (
      <div id="movie-showcase">
        sup
        {/* /* {console.log("This in MSC is - ", this)}   IS MOVIESHOWCASE CLASS }*/}
        {this.generateMovieCards()}
      </div>
    )
  }
}
