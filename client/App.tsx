import * as React from 'react';
import { useState, useEffect } from 'react';
import Main from './pages/Main';
import './global.scss';
import { FetchOutput } from '../types';

function App() {
  const [randomColors, setRandomColors] = useState<FetchOutput[]>([]);
  const [sortedColors, setSortedColors] = useState<FetchOutput[]>([]);

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

  function getSortedColors(classification: string) {
    const sorted: FetchOutput[] = [];

    randomColors.forEach((color) => {
      console.log(color.Classification === classification);
      if (color.Classification === classification) sorted.push(color);
    });
    setSortedColors(sorted);
  }

  useEffect(() => {
    getRandomColors(100);
  }, []);

  return (
    <div>
      <Main
        colors={randomColors}
        sortedColors={sortedColors}
        setRandomColors={setRandomColors}
        getSortedColors={getSortedColors}
      />
    </div>
  );
}

export default App;
