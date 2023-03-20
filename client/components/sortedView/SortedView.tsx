import * as React from 'react';
import styles from './sortedView.scss';
import ColorCard from '../colorCard/ColorCard';
import ActionButton from '../actionButton/ActionButton';
import { FetchOutput } from '../../../types';

type Props = {
  setView: (view: string) => void;
  setDetailColor: (color: FetchOutput) => void;
  sortedColors: FetchOutput[];
  pageNumber: number;
  setPageNumber: (pageNumber: number) => void;
};

function SortedView(props: Props) {
  console.log(props.sortedColors);
  const totalPerPage = 12;

  function goToDetailView(color: FetchOutput) {
    props.setView('detail');
    props.setDetailColor(color);
  }

  const cardList: JSX.Element[] = [];
  for (let i = 0; i < props.sortedColors.length; i++) {
    cardList.push(
      <div
        key={i}
        onClick={() => {
          goToDetailView(props.sortedColors[i]);
        }}
      >
        <ColorCard color={props.sortedColors[i].ColorHex} size={'medium'} />
      </div>
    );
  }

  const pages = [];
  for (let i = 0; i < props.sortedColors.length / totalPerPage; i++) {
    if (props.pageNumber === i) {
      pages.push(
        <div key={i}>
          <a className={styles.active} onClick={() => props.setPageNumber(i)}>
            {i + 1}
          </a>
        </div>
      );
    } else {
      pages.push(
        <div key={i}>
          <a onClick={() => props.setPageNumber(i)}>{i + 1}</a>
        </div>
      );
    }
  }

  return (
    <div className={styles.pagination}>
      <div className={styles.cards}>
        {cardList.slice(props.pageNumber * 12, props.pageNumber * 12 + 12)}
      </div>
      {props.sortedColors.length === 0 && (
        <div className={styles.pages}>
          <h2>No colors of this type found</h2>
        </div>
      )}
      {props.sortedColors.length > 0 && (
        <div className={styles.pages}>{pages}</div>
      )}
      <div className={styles.clear}>
        <ActionButton onClick={() => props.setView('list')}>Clear</ActionButton>
      </div>
    </div>
  );
}

export default SortedView;
