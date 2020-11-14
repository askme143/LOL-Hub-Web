import styled from 'styled-components';

interface ProfileImageProps {
  src: string;
}

export const ProfileBox = styled.div`
  display: flex;
  flex-flow: row nowrap;
  align-items: center;
`;
export const ProfileImage = styled.img`
  src: ${(props: ProfileImageProps) => props.src};
  width: 110px;
  height: 110px;

  border: 2px solid #e6c619;
`;
export const ProfileText = styled.div`
  display: inline-flex;
  flex-flow: column nowrap;
  justify-content: space-between;

  width: 200px;
  height: 100px;
  margin: 0 0 0 25px;
`;
export const SummonerName = styled.span`
  font-size: 2rem;
  font-weight: bold;
`;
