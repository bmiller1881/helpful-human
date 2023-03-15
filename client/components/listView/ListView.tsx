import * as React from 'react';
import { useState, useEffect } from 'react';
import styles from './listView.scss';
import ColorCard from '../colorCard/ColorCard';
import { FetchOutput } from '../../../types';

type Props = {
  setView: (view: string) => void;
  setDetailColor: (color: FetchOutput) => void;
  colors: FetchOutput[];
  pageNumber: number;
  setPageNumber: (pageNumber: number) => void;
};

function ListView(props: Props) {
  const totalPerPage = 12;

  function goToDetailView(color: FetchOutput) {
    props.setView('detail');
    props.setDetailColor(color);
  }

  const cardList: JSX.Element[] = [];
  for (let i = 0; i < props.colors.length; i++) {
    cardList.push(
      <div
        key={i}
        onClick={() => {
          goToDetailView(props.colors[i]);
        }}
      >
        <ColorCard color={props.colors[i].ColorHex} size={'medium'} />
      </div>
    );
  }

  const pages = [];
  for (let i = 0; i < props.colors.length / totalPerPage; i++) {
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
      <div className={styles.pages}>{pages}</div>
    </div>
  );
}

export default ListView;
