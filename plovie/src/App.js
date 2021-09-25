import React from 'react';
import './App.css';
import Routing from './components/Routing';
import { PlayerContextProvider } from './components/contexts/bannerPlayerContext';

function App() {
  return (
    <PlayerContextProvider>
    <div className="App">
      <div className="content">
        <Routing />
      </div>
    </div>
    </PlayerContextProvider>
  );
}

export default App;
