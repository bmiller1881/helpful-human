import * as React from 'react';
import logoSymbol from '../../assets/logo-symbol.svg';
import Search from '../search/Search';
import styles from './navbar.scss';

function Navbar() {
  return (
    <div className={styles.navbar}>
      <img src={logoSymbol} alt="Helpful Human Logo" />
      <Search />
    </div>
  );
}

export default Navbar;
