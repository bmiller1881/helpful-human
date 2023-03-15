import * as React from 'react';
import { useState } from 'react';
import Navbar from '../components/navbar/Navbar';
import Sidebar from '../components/sideBar/Sidebar';
import ListView from '../components/listView/ListView';
import DetailView from '../components/detailView/DetailView';
import styles from './main.scss';
import { FetchOutput } from '../../types';

type Props = {
  colors: FetchOutput[];
  setRandomColors: (randomColor: FetchOutput[]) => void;
};

function Main(props: Props) {
  const [view, setView] = useState('list');
  const [detailColor, setDetailColor] = useState<FetchOutput>();
  const [pageNumber, setPageNumber] = useState(0);

  return (
    <div>
      <Navbar />
      <Sidebar setRandomColors={props.setRandomColors} />
      <div className={styles.page}>
        {view === 'list' && (
          <ListView
            setView={setView}
            setDetailColor={setDetailColor}
            colors={props.colors}
            pageNumber={pageNumber}
            setPageNumber={setPageNumber}
          />
        )}
        {view === 'detail' && (
          <DetailView setView={setView} detailColor={detailColor} />
        )}
      </div>
    </div>
  );
}

export default Main;
