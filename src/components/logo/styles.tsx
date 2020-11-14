import styled from 'styled-components';

interface LogoStyleProps {
  fontSize: string | undefined;
  fontColor: string | undefined;
}

interface LogoBoxProps {
  margin: string | undefined;
}

export const LogoStyle = styled.span`
  font-family: 'Gugi', cursive;
  font-size: ${(props: LogoStyleProps) => (props.fontSize ? props.fontSize : '')};
  color: ${(props: LogoStyleProps) => (props.fontColor ? props.fontColor : '#333333')};
  margin: 0 auto;
`;

export const LogoBox = styled.div`
  display: flex;
  justify-content: center;
  margin: ${(props: LogoBoxProps) => (props.margin ? props.margin : '')};
`;
