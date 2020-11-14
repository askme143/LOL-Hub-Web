import React, { useEffect, useState } from 'react';
import axios, { AxiosError } from 'axios';
import { RouteComponentProps } from 'react-router';

import Header from '../../components/header';
import ContentBox from '../../components/content-box';
import SummonerProfile from '../../components/summoner-profile';
import Tier from '../../components/tier';

import * as S from './styles';

interface SummonerParams {
  name: string;
}

interface SummonerData {
  name: string;
  profileIconID: number;
}

function Summoner({ match }: RouteComponentProps<SummonerParams>) {
  const [error, setError] = useState(false);
  const [notFound, setNotFound] = useState(false);
  const [profileIconID, setProfileIconID] = useState(-1);
  const [name, setName] = useState('');

  useEffect(() => {
    axios
      .get(`/api/summoner/${match.params.name}`)
      .then((res) => {
        const summoner: SummonerData = res.data;

        setName(summoner.name);
        setProfileIconID(summoner.profileIconID);
      })
      .catch((err: AxiosError) => {
        if (err.response && err.response.status === 404) {
          setNotFound(true);
        } else {
          setError(true);
        }
      });
  });

  if (error) {
    return <h1>오류가 발생했습니다.</h1>;
  }
  if (notFound) {
    return <h1>존재하지 않는 소환사입니다.</h1>;
  }

  return (
    <>
      <Header />
      <ContentBox>
        <S.ProfileSection>
          <S.ProfileContainer>
            <SummonerProfile name={name} profileIconID={profileIconID} />
          </S.ProfileContainer>
          <S.TierContainer>
            <Tier queueType="솔로랭크" />
            <Tier queueType="자유랭크" />
          </S.TierContainer>
        </S.ProfileSection>
      </ContentBox>
    </>
  );
}

export default Summoner;
