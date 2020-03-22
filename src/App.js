import React from 'react';
import Routes from './routes';

import Header from './components/Header/index.js';
import Main from './pages/main';
import Clock from './components/Clock/index.js';

import './styles.css';

const App = () => {
  return (
    <div className="App">
      <Header/>
      <Clock/>
      <Routes/>
    </div>
  );
}

export default App;
