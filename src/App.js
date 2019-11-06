import React from 'react';
import './App.css';
import TopNavigation from './components/TopNavigation';
import Routes from './components/Routes';
import BottomNavigation from "./components/BottomNavigation";
const App = () => {
  return (
    <div className="App">
      <TopNavigation />
      <Routes />
      <BottomNavigation />
    </div>
  )
}

export default App;
