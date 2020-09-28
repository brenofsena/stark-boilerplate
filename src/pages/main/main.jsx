import React from 'react';
import * as S from './styles';
import StarkLogo from '@assets/stark.png';

const Main = () => (
  <S.Wrapper>
    <S.Image data-testid="logo" src={StarkLogo} alt="Stark Boilerplate" title="Stark Boilerplate" />
  </S.Wrapper>
);

export default Main;
