import styled from 'styled-components';

interface SearchBoxProps {
  width: string | undefined;
  height: string | undefined;
  changeFont: boolean;
  border: boolean;
}

export const SearchBox = styled.div`
  width: ${(props: SearchBoxProps) => (props.width ? props.width : '')};
  height: ${(props: SearchBoxProps) => (props.height ? props.height : '')};
  margin: 0 auto;
  font-family: 'sans-serif';
  color: #ffffff;
  .ant-btn {
    font-family: ${(props: SearchBoxProps) => (props.changeFont ? 'Wemakeprice-Bold' : '')};
  }
  button {
    border-left: ${(props: SearchBoxProps) => (!props.border ? 'none' : '')};
  }
`;
