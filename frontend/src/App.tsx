import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Container, Row, Col, CardColumns } from 'react-bootstrap';
import PetCard from './PetCard';

const App: React.FC = () => {
  var mockedPets = [
    { id: "1", name: "Berty", description: "Has a good nose for truffles", owner: "Sophie" },
    { id: "2", name: "Argo", description: "A superhero (of the dog world)", owner: "Charles" },
    { id: "3", name: "Fred", description: "Has opinions about sausages", owner: "Mike" },
  ];

  return (
    <Container>
      <Row>
      <Col>
        <CardColumns>
        {
          mockedPets.map((pet) => <PetCard key={pet.id} pet={pet} />)
        }
        </CardColumns>
      </Col>
      </Row>
    </Container>
  );
}

export default App;
