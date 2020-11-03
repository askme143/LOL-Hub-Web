import React from 'react';
import Search from '../../components/search';
import { Container, Background } from './styles';

function Main() {
  const makeURL = (name: string) => {
    return `/summoner/${name}`;
  };
  return (
    <Background>
      <Container>
        <Search makeURL={makeURL} width="650px" height="50px" />
      </Container>
    </Background>
  );
}

export default Main;
