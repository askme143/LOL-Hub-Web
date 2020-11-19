import axios, { AxiosError } from 'axios';
import { Dispatch } from 'redux';

// Action types
const GET_SUMMONER_PENDING = 'summoner/GET_SUMMONER_PENDING' as const;
const GET_SUMMONER_SUCCESS = 'summoner/GET_SUMMONER_SUCCESS' as const;
const GET_SUMMONER_FAILURE = 'summoner/GET_SUMMONER_FAILURE' as const;

interface SummonerData {
  name: string;
  profileIconID: number;
  summonerLevel: number;

  soloTier: string;
  soloLp: number;
  soloWins: number;
  soloLosses: number;

  flexTier: string;
  flexLp: number;
  flexWins: number;
  flexLosses: number;

  updateTime: number;
}

type SummonerAction =
  | { type: typeof GET_SUMMONER_PENDING }
  | { type: typeof GET_SUMMONER_SUCCESS; payload: SummonerData }
  | { type: typeof GET_SUMMONER_FAILURE; payload: 'NOT_FOUND' | 'SERVER_ERROR' | 'FINDING' };

function makeSummonerData({
  name,
  profileIconID,
  summonerLevel,
  soloTier,
  soloLp,
  soloWins,
  soloLosses,
  flexTier,
  flexLp,
  flexWins,
  flexLosses,
  updateTime,
}: SummonerData): SummonerData {
  return {
    name,
    profileIconID,
    summonerLevel,
    soloTier,
    soloLp,
    soloWins,
    soloLosses,
    flexTier,
    flexLp,
    flexWins,
    flexLosses,
    updateTime,
  };
}

function getSummonerAPI(name: string) {
  return axios.get<SummonerData>(`/api/summoner/${encodeURI(name)}`);
}

async function handleError(name: string, dispatch: Dispatch<SummonerAction>, error: AxiosError) {
  if (!error.isAxiosError || error.response === undefined || error.response.status !== 404) {
    dispatch({ type: GET_SUMMONER_FAILURE, payload: 'SERVER_ERROR' });
  }

  /* Try to update the summoner */
  try {
    dispatch({ type: GET_SUMMONER_FAILURE, payload: 'FINDING' });
    await axios.post(`/api/update`, { name });
  } catch (updateError) {
    const updateAxiosError = updateError as AxiosError;

    if (updateAxiosError.isAxiosError && updateAxiosError.response?.status === 404) {
      dispatch({ type: GET_SUMMONER_FAILURE, payload: 'NOT_FOUND' });
    } else {
      dispatch({ type: GET_SUMMONER_FAILURE, payload: 'SERVER_ERROR' });
    }

    return;
  }

  /* After update, try to get the summoner info again */
  try {
    const response = await getSummonerAPI(name);

    dispatch({
      type: GET_SUMMONER_SUCCESS,
      payload: makeSummonerData(response.data),
    });
  } catch (secondError) {
    dispatch({ type: GET_SUMMONER_FAILURE, payload: 'SERVER_ERROR' });
  }
}

export async function getSummoner(name: string, dispatch: Dispatch<SummonerAction>) {
  dispatch({ type: GET_SUMMONER_PENDING });

  try {
    const response = await getSummonerAPI(name);

    dispatch({
      type: GET_SUMMONER_SUCCESS,
      payload: makeSummonerData(response.data),
    });
  } catch (error) {
    handleError(name, dispatch, error);
  }
}

export interface SummonerState {
  pending: boolean;
  error: 'NOT_FOUND' | 'SERVER_ERROR' | 'FINDING' | null;
  data: SummonerData;
}

// Initial state
const initialState: SummonerState = {
  pending: false,
  error: null,
  data: {
    name: '',
    profileIconID: 0,
    summonerLevel: 0,

    soloTier: 'unranked',
    soloLp: 0,
    soloWins: 0,
    soloLosses: 0,

    flexTier: 'unranked',
    flexLp: 0,
    flexWins: 0,
    flexLosses: 0,

    updateTime: 0,
  },
};

// Reducer
export function summonerReducer(state = initialState, action: SummonerAction) {
  switch (action.type) {
    case GET_SUMMONER_PENDING:
      return {
        ...state,
        pending: true,
        error: null,
      };
    case GET_SUMMONER_SUCCESS:
      return {
        ...state,
        pending: false,
        error: null,
        data: action.payload,
      };
    case GET_SUMMONER_FAILURE:
      return {
        ...state,
        pending: false,
        error: action.payload,
      };
    default:
      return state;
  }
}
