import React from 'react';

import { Container } from './styles';

import logo from '../../../../assets/logo.svg';

const Header: React.FC = () => (
  <Container>
    <img src={logo} alt="logo" />
  </Container>
);

export default Header;
