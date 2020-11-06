import React from 'react';
import { Button } from 'antd';
import * as S from './styles';

interface SummonerProfileProps {
  name: string;
}

function SummonerProfile({ name }: SummonerProfileProps) {
  return (
    <S.ProfileContainer>
      <S.ProfileImage src="http://ddragon.leagueoflegends.com/cdn/10.22.1/img/profileicon/27.png" />
      <S.ProfileText>
        <S.SummonerName>{name}</S.SummonerName>
        <Button
          style={{
            width: '90px',
            height: '40px',
          }}
          type="primary"
        >
          전적갱신
        </Button>
      </S.ProfileText>
    </S.ProfileContainer>
  );
}

export default SummonerProfile;
