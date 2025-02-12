import React from 'react'
import {Button,Card} from 'react-bootstrap';


const MovieCard = ({movie}) => {
  return (
    <div>
    <Card style={{ width: '18rem' }}>
    <Card.Img variant="top" src={movie.posterURL}/>
    <Card.Body>
      <Card.Title>{movie.name}</Card.Title>
      <Card.Text>
        Some quick example text to build on the card title and make up the
        bulk of the card's content.
      </Card.Text>
      <Button variant="primary">Go somewhere</Button>
    </Card.Body>
  </Card></div>
  )
}

export default MovieCard