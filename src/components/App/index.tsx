import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import { globalStyles } from '../../styles/global';
import { Container } from './styles';

import Routes from '../../routes';

const App: React.FC = () => {
  globalStyles();

  return (
    <BrowserRouter>
      <Container>
        <Routes />
      </Container>
    </BrowserRouter>
  );
};

export default App;
