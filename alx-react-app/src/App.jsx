import WelcomeMessage from './components/WelcomeMessage';
import Header from './components/Header';
import MainContent from './components/MainContent';
import Footer from './components/footer';
import UserProfile from './components/UserProfile';

import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'


function App() {
  return (
    <div className="App">
      <UserProfile 
        name="LERATO" 
        age="29" 
        bio="MUSIC LOVER" 
      />
    </div>
  );
}

export default App;

