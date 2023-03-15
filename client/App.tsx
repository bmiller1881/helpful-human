import * as React from 'react';
import { useState, useEffect } from 'react';
import Main from './pages/Main';
import './global.scss';
import { FetchOutput } from '../types';

function App() {
  const [randomColors, setRandomColors] = useState<FetchOutput[]>([]);

  async function getRandomColors(amount: number) {
    try {
      const res = await fetch(`/api/colors/amount/${amount}`);
      const data = await res.json();
      console.log(data.data);
      setRandomColors(data.data);
    } catch (error) {
      console.log('Error: get randomColors');
    }
  }

  useEffect(() => {
    getRandomColors(100);
  }, []);

  return (
    <div>
      <Main colors={randomColors} setRandomColors={setRandomColors} />
    </div>
  );
}

export default App;
