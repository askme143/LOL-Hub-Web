import React, { useEffect } from 'react';
import { RouteComponentProps } from 'react-router';
import { useDispatch, useSelector } from 'react-redux';

import Header from '../../components/header';
import ContentBox from '../../components/content-box';
import SummonerProfileContainer from '../../containers/summoner-profile-container';
import TierContainer from '../../containers/tier-container';

import * as S from './styles';

import { StoreState } from '../../store/modules';
import { getSummoner } from '../../store/modules/summoner';

interface SummonerParams {
  name: string;
}

function Summoner({ match }: RouteComponentProps<SummonerParams>) {
  const error = useSelector((state: StoreState) => state.summoner.error);
  const dispatch = useDispatch();

  useEffect(() => {
    getSummoner(match.params.name, dispatch);
  }, [match.params.name]);

  return (
    <>
      {error === 'FINDING' && <div>Finding</div>}
      {error === 'NOT_FOUND' && <div>Not found</div>}
      {error === 'SERVER_ERROR' && <div>Server error</div>}
      {error === null && (
        <>
          <Header />
          <ContentBox>
            <S.ProfileSection>
              <S.ProfileContainer>
                <SummonerProfileContainer />
              </S.ProfileContainer>
              <S.TierContainer>
                <TierContainer queueType="솔로랭크" />
                <TierContainer queueType="자유랭크" />
              </S.TierContainer>
            </S.ProfileSection>
            <S.ChampionStatSection>
              <span>챔피언 통계</span>
            </S.ChampionStatSection>
          </ContentBox>
        </>
      )}
    </>
  );
}

export default Summoner;
