import React from 'react';
import { Input } from 'antd';
import 'antd/dist/antd.css';
import { SizeType } from 'antd/lib/config-provider/SizeContext';
import { SearchBox } from './styles';

interface SearchProps {
  makeURL: (_name: string) => string;
  width?: string;
  height?: string;
  text?: string;
  size?: SizeType;
  border?: boolean;
}

function Search({ makeURL, width, height, text, size, border }: SearchProps) {
  const onSearch = (name: string) => {
    if (name.length > 0) window.open(makeURL(name), '_self');
  };

  return (
    <SearchBox width={width} height={height} changeFont={text !== undefined} border={border === undefined || border}>
      <Input.Search
        placeholder="소환사 명"
        allowClear
        enterButton={text || false}
        size={size || 'large'}
        onSearch={onSearch}
      />
    </SearchBox>
  );
}

export default Search;
