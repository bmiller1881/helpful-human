import * as React from 'react';
import styles from './actionButton.scss';

type Props = {
  children: string;
  onClick?: () => void;
};

function ActionButton(props: Props) {
  return (
    <button onClick={() => props.onClick()} className={styles.actionButton}>
      {props.children}
    </button>
  );
}

export default ActionButton;
