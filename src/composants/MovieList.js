import React, { useState } from 'react'
import MovieCard from './MovieCardn'


const MovieList = ({movieData}) => {

} 
  return (
    <div>
      {
        movieData.map((el) =>  <MovieCard  movie={el}  /> )
        


      }
     


      
    </div>
  )


export default MovieList