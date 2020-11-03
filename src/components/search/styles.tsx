import styled from 'styled-components';

interface SearchContainerProps {
  width: string | null;
  height: string | null;
}

export const SearchContainer = styled.div`
  width: ${(props: SearchContainerProps) => (props.width ? props.width : '')};
  height: ${(props: SearchContainerProps) => (props.height ? props.height : '')};
  margin: 0 auto;
  font-family: 'sans-serif';
  color: #ffffff;
  .ant-btn {
    font-family: 'Wemakeprice-Bold';
  }
`;
