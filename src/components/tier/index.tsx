import React from 'react';
import * as S from './styles';

interface TierProps {
  queueType: '솔로랭크' | '자유랭크';
}

function Tier({ queueType }: TierProps) {
  return (
    <S.TierBox>
      <S.TierImage src="/images/ranked-emblems/Emblem_Silver.png" />
      <S.TierText>
        <span>{queueType}</span>
        <span>Silver 4 / 0 LP</span>
        <span>27승 14패 / 66%</span>
      </S.TierText>
    </S.TierBox>
  );
}

export default Tier;
