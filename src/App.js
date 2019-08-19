import React from 'react';
import Navbar from './components/Navbar';
import CardMovie from './components/Card';
import Container from '@material-ui/core/Container';

export default function App() {
  return (
    <>
      <Navbar />
      <br />
      <Container >
        <CardMovie />
      </Container>
    </>
  );
}
