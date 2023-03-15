import * as React from 'react';
import stylesMedium from './colorCardMedium.scss';
import stylesSmall from './colorCardSmall.scss';
import stylesLarge from './colorCardLarge.scss';

type Props = {
  color: string;
  size: string;
};

function ColorCard(props: Props) {
  let styles = stylesMedium;
  if (props.size === 'small') {
    styles = stylesSmall;
  } else if (props.size === 'large') {
    styles = stylesLarge;
  }

  return (
    <div className={styles.card}>
      <div
        className={styles.color}
        style={{ backgroundColor: props.color }}
      ></div>
      <div className={styles.name}>
        <p>{props.color}</p>
      </div>
    </div>
  );
}

export default ColorCard;
