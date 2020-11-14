import React from 'react';
import { Button } from 'antd';
import * as S from './styles';

interface SummonerProfileProps {
  profileIconID: number;
  name: string;
}

function SummonerProfile({ name, profileIconID }: SummonerProfileProps) {
  return (
    <S.ProfileBox>
      <S.ProfileImage src={`http://ddragon.leagueoflegends.com/cdn/10.22.1/img/profileicon/${profileIconID}.png`} />
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
    </S.ProfileBox>
  );
}

export default SummonerProfile;
