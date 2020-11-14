import React from 'react';
import { Link } from 'react-router-dom';

import Logo from '../logo';
import Search from '../search';
import * as S from './styles';

function Header() {
  const makeURL = (name: string) => {
    return `/summoner/${name}`;
  };

  return (
    <S.HeaderBox>
      <S.LogoBox>
        <Link to="/">
          <Logo fontSize="3rem" fontColor="white" />
        </Link>
      </S.LogoBox>
      <Search makeURL={makeURL} width="380px" size="middle" border={false} />
      <Link to="/">
        <S.NavText color="#e03f54">로그인</S.NavText>
      </Link>
    </S.HeaderBox>
  );
}

export default Header;
