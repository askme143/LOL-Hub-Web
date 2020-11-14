import styled from 'styled-components';

interface NavTextProps {
  color?: string;
}

export const HeaderBox = styled.div`
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;
  align-items: center;

  width: 100%;
  height: 52px;

  background-color: #23262d;

  a {
    color: #a09f9e;
    font-size: 1.5rem;
  }
`;

export const LogoBox = styled.div`
  margin: 0 10px;
`;

export const NavText = styled.div`
  margin: 0 5px;
  padding: 6px 18px;

  color: ${(props: NavTextProps) => (props.color ? props.color : '')};
  background: transparent;

  &:hover {
    box-shadow: inset 0 0 0 10em rgba(255, 255, 255, 0.1);
  }
`;
