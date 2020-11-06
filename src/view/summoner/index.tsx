import React from 'react';
import { RouteComponentProps } from 'react-router';
import SummonerProfile from '../../components/summoner-profile';

interface SummonerParams {
  name: string;
}

function Summoner({ match }: RouteComponentProps<SummonerParams>) {
  return (
    <>
      <h1>{match.params.name}</h1>
      <SummonerProfile name={match.params.name} />
    </>
  );
}

export default Summoner;
