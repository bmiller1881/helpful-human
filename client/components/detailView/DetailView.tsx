import * as React from 'react';
import styles from './detailView.scss';
import ColorCard from '../colorCard/ColorCard';
import ActionButton from '../actionButton/ActionButton';
import { FetchOutput } from '../../../types';

type Props = {
  setView: (view: string) => void;
  detailColor: FetchOutput;
};

function DetailView(props: Props) {
  const detailColorsSorted = [
    ...props.detailColor.ShadesHex.reverse(),
    props.detailColor.ColorHex,
    ...props.detailColor.TintsHex,
  ];

  console.log(detailColorsSorted);
  const detailCards = detailColorsSorted.map((color) => {
    return <ColorCard color={color} size={'small'} />;
  });

  return (
    <div className={styles.detailView}>
      <div>
        <ColorCard color={props.detailColor.ColorHex} size={'large'} />
        <div className={styles.detail}>{detailCards}</div>
        <div className={styles.clear}>
          <ActionButton onClick={() => props.setView('list')}>
            Clear
          </ActionButton>
        </div>
      </div>
    </div>
  );
}

export default DetailView;
