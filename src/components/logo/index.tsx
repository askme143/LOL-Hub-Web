import React from 'react';
import { LogoStyle, LogoContainer } from './styles';

interface LogoProps {
  fontSize: string | null;
  fontColor: string | null;
  margin: string | null;
}

function Logo({ fontSize, fontColor, margin }: LogoProps) {
  return (
    <LogoContainer margin={margin}>
      <LogoStyle fontSize={fontSize} fontColor={fontColor}>
        롤-허브
      </LogoStyle>
    </LogoContainer>
  );
}

export default Logo;
