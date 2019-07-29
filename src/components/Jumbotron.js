import React from 'react';
import { Jumbotron as Jumbo, Container } from 'react-bootstrap';

export const Jumbotron = () => (
  <Jumbo fluid >
    <Container>
      <h1>Simple Dictionary</h1>
      <p>Find out what that word <em>really </em>means</p>
    </Container>
  </Jumbo>
)