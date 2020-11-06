import React from 'react';
import Search from '../../components/search';
import Logo from '../../components/logo';
import { Container, Background } from './styles';

function Main() {
  const makeURL = (name: string) => {
    return `/summoner/${name}`;
  };
  return (
    <Background>
      <Container>
        <Logo fontSize="15rem" fontColor="#333333" margin="150px 0 0 0" />
        <Search makeURL={makeURL} width="650px" height="50px" />
      </Container>
    </Background>
  );
}

export default Main;
