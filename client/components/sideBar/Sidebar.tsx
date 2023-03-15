import * as React from 'react';
import ActionButton from '../actionButton/ActionButton';
import styles from './sidebar.scss';
import { FetchOutput } from '../../../types';

type Props = {
  setRandomColors: (randomColor: FetchOutput[]) => void;
};

function Sidebar(props: Props) {
  async function refreshRandomColors(amount: number) {
    try {
      const res = await fetch(`/api/colors/amount/${amount}`);
      const data = await res.json();
      props.setRandomColors(data.data);
    } catch (error) {
      console.log('Error: get randomColors');
    }
  }

  return (
    <div className={styles.sidebar}>
      <ActionButton onClick={() => refreshRandomColors(100)}>
        Random Color
      </ActionButton>
      <ul>
        <li>Red</li>
        <li>Orange</li>
        <li>Yellow</li>
        <li>Green</li>
        <li>Blue</li>
        <li>Purple</li>
        <li>Brown</li>
        <li>Gray</li>
      </ul>
    </div>
  );
}

export default Sidebar;
