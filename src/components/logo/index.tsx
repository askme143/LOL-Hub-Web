import React from 'react';
import { LogoStyle, LogoBox } from './styles';

interface LogoProps {
  fontSize?: string;
  fontColor?: string;
  margin?: string;
}

function Logo({ fontSize, fontColor, margin }: LogoProps) {
  return (
    <LogoBox margin={margin}>
      <LogoStyle fontSize={fontSize} fontColor={fontColor}>
        롤-허브
      </LogoStyle>
    </LogoBox>
  );
}

export default Logo;
