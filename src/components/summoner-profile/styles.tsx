import styled from 'styled-components';

interface ProfileImageProps {
  src: string;
}

export const ProfileContainer = styled.div`
  display: inline-flex;
  flex-flow: row nowrap;
  align-items: center;
`;
export const ProfileImage = styled.img`
  src: ${(props: ProfileImageProps) => props.src};
  width: 110px;
  height: 110px;
`;
export const ProfileText = styled.div`
  display: inline-flex;
  flex-flow: column nowrap;
  justify-content: space-between;

  height: 100px;
  margin: 0 0 0 25px;
`;
export const SummonerName = styled.span`
  font-size: 2rem;
  font-weight: bold;
`;
