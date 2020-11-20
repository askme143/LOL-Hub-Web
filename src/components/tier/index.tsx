import React from 'react';
import * as S from './styles';

interface TierProps {
  queueType: '솔로랭크' | '자유랭크';
  tier: string;
  wins: number;
  losses: number;
  lp: number;
}

function Tier({ queueType, tier, wins, losses, lp }: TierProps) {
  const src = `/images/ranked-emblems/Emblem_${tier[0] + tier.split(' ')[0].toLowerCase().substr(1)}.png`;

  return (
    <S.TierBox>
      <S.TierImage src={src} />
      <S.TierText>
        <span>{queueType}</span>
        <span>{`${tier} / ${lp} LP`}</span>
        <span>{`${wins}승 ${losses}패 / ${((wins * 100) / (wins + losses)).toFixed(0)}%`}</span>
      </S.TierText>
    </S.TierBox>
  );
}

export default Tier;
