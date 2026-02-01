import  { useState } from 'react';
import HeartCursor from './components/HeartCursor';
import WelcomePage from './components/WelcomePage';
import ValentineQuestion from './components/ValentineQuestion';
import './App.css';

function App() {
  const [screen, setScreen] = useState<'welcome' | 'question'>('welcome');

  return (
    <>
      <HeartCursor />
      {screen === 'welcome' && <WelcomePage onStart={() => setScreen('question')} />}
      {screen === 'question' && <ValentineQuestion />}
    </>
  );
}

export default App;
