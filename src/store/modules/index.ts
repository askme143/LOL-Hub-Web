import { combineReducers } from 'redux';
import { summonerReducer as summoner, SummonerState } from './summoner';

export interface StoreState {
  summoner: SummonerState;
}

export default combineReducers({
  summoner,
});
