import styled from 'styled-components';

interface LogoStyleProps {
  fontSize: string | null;
  fontColor: string | null;
}

interface LogoContainerProps {
  margin: string | null;
}

export const LogoStyle = styled.span`
  font-family: 'Gugi', cursive;
  font-size: ${(props: LogoStyleProps) => (props.fontSize ? props.fontSize : '')};
  color: ${(props: LogoStyleProps) => (props.fontColor ? props.fontColor : '#333333')};
  margin: 0 auto;
`;

export const LogoContainer = styled.div`
  display: flex;
  justify-content: center;
  margin: ${(props: LogoContainerProps) => (props.margin ? props.margin : '')};
`;
