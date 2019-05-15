import React, { Component } from 'react';
import { Card, Button } from 'react-bootstrap';
import Pet from './Pet';
  
type Props = {
    pet: Pet;
};

class PetCard extends Component<Props> {
  render() {
      return (
        <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src={this.props.pet.photos[0]} />
        <Card.Body>
        <Card.Title>{this.props.pet.name} - {this.props.pet.kind}</Card.Title>
          <Card.Text>{this.props.pet.description}</Card.Text>
          <Button variant="primary">Adopt</Button>
        </Card.Body>
      </Card>
      );
  }
}

export default PetCard;