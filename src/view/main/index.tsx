import React from 'react';

import ContentBox from '../../components/content-box';
import Search from '../../components/search';
import Logo from '../../components/logo';

function Main() {
  const makeURL = (name: string) => {
    return `/summoner/${name}`;
  };
  return (
    <>
      <ContentBox>
        <Logo fontSize="15rem" fontColor="#333333" margin="150px 0 0 0" />
        <Search makeURL={makeURL} width="650px" height="50px" text="L-Hub" />
      </ContentBox>
    </>
  );
}

export default Main;
