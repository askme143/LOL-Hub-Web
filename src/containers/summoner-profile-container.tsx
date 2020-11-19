// import React, { useEffect } from 'react';
import React from 'react';
import { useSelector } from 'react-redux';
import { StoreState } from '../store/modules';

import SummonerProfile from '../components/summoner-profile';

function SummonerProfileContainer() {
  const name = useSelector((state: StoreState) => state.summoner.data.name);
  const profileIconID = useSelector((state: StoreState) => state.summoner.data.profileIconID);

  return <SummonerProfile name={name} profileIconID={profileIconID} />;
}

export default SummonerProfileContainer;
