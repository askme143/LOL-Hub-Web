import styled from 'styled-components';

interface TierImageProps {
  src: string;
}

export const TierBox = styled.div`
  display: flex;
  flex-flow: row nowrap;
  align-items: center;

  padding: 10px;
`;
export const TierImage = styled.img`
  src: ${(props: TierImageProps) => props.src};
  width: 80px;
  height: 80px;
`;
export const TierText = styled.div`
  display: inline-flex;
  flex-flow: column nowrap;
  justify-content: center;

  height: 60px;

  margin: 0 0 0 25px;
`;
