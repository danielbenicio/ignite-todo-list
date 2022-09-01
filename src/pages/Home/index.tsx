import React from 'react';

import AddToDo from './components/AddToDo';
import Header from './components/Header';

const Home: React.FC = () => (
  <div>
    <Header />
    <AddToDo />
  </div>
);

export default Home;
