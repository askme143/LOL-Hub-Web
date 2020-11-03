import React from 'react';
import { Input } from 'antd';
import 'antd/dist/antd.css';
import { SearchContainer } from './styles';

interface SearchProps {
  makeURL: (_name: string) => string;
  width: string | null;
  height: string | null;
}

function Search({ makeURL, width, height }: SearchProps) {
  const onSearch = (name: string) => {
    if (name.length > 0) window.open(makeURL(name), '_self');
  };

  return (
    <SearchContainer width={width} height={height}>
      <Input.Search placeholder="소환사 명" allowClear enterButton="L-Hub" size="large" onSearch={onSearch} />
    </SearchContainer>
  );
}

export default Search;
