// import React, { useEffect } from 'react';
import React from 'react';
import { useSelector } from 'react-redux';
import { StoreState } from '../store/modules';

import Tier from '../components/tier';

interface TierProps {
  queueType: '솔로랭크' | '자유랭크';
}

function TierContainer({ queueType }: TierProps) {
  let tier: string;
  let wins: number;
  let losses: number;
  let lp: number;

  if (queueType === '솔로랭크') {
    tier = useSelector((state: StoreState) => state.summoner.data.soloTier);
    wins = useSelector((state: StoreState) => state.summoner.data.soloWins);
    losses = useSelector((state: StoreState) => state.summoner.data.soloLosses);
    lp = useSelector((state: StoreState) => state.summoner.data.soloLp);
  } else {
    tier = useSelector((state: StoreState) => state.summoner.data.flexTier);
    wins = useSelector((state: StoreState) => state.summoner.data.flexWins);
    losses = useSelector((state: StoreState) => state.summoner.data.flexLosses);
    lp = useSelector((state: StoreState) => state.summoner.data.flexLp);
  }

  return <Tier queueType={queueType} tier={tier} wins={wins} losses={losses} lp={lp} />;
}

export default TierContainer;
