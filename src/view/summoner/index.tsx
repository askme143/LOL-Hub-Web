import React from 'react';
import { RouteComponentProps } from 'react-router';

interface SummonerParams {
  name: string;
}

function Summoner({ match }: RouteComponentProps<SummonerParams>) {
  return (
    <>
      <h1>{match.params.name}</h1>
    </>
  );
}

export default Summoner;
