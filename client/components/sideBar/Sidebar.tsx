import * as React from 'react';
import ActionButton from '../actionButton/ActionButton';
import styles from './sidebar.scss';
import { FetchOutput } from '../../../types';

type Props = {
  setRandomColors: (randomColor: FetchOutput[]) => void;
  getSortedColors: (classification: string) => void;
  setView: (view: string) => void;
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
      <ActionButton
        onClick={() => {
          refreshRandomColors(100);
        }}
      >
        Random Color
      </ActionButton>
      <ul>
        <li
          onClick={() => {
            props.getSortedColors('red');
            props.setView('sorted');
          }}
        >
          Red
        </li>
        <li
          onClick={() => {
            props.getSortedColors('orange');
            props.setView('sorted');
          }}
        >
          Orange
        </li>
        <li
          onClick={() => {
            props.getSortedColors('yellow');
            props.setView('sorted');
          }}
        >
          Yellow
        </li>
        <li
          onClick={() => {
            props.getSortedColors('green');
            props.setView('sorted');
          }}
        >
          Green
        </li>
        <li
          onClick={() => {
            props.getSortedColors('blue');
            props.setView('sorted');
          }}
        >
          Blue
        </li>
        <li
          onClick={() => {
            props.getSortedColors('purple');
            props.setView('sorted');
          }}
        >
          Purple
        </li>
        <li
          onClick={() => {
            props.getSortedColors('brown');
            props.setView('sorted');
          }}
        >
          Brown
        </li>
        <li
          onClick={() => {
            props.getSortedColors('gray');
            props.setView('sorted');
          }}
        >
          Gray
        </li>
      </ul>
    </div>
  );
}

export default Sidebar;
