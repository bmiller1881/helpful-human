import * as React from 'react';
import { useState } from 'react';
import Navbar from '../components/navbar/Navbar';
import Sidebar from '../components/sideBar/Sidebar';
import ListView from '../components/listView/ListView';
import DetailView from '../components/detailView/DetailView';
import SortedView from '../components/sortedView/SortedView';
import styles from './main.scss';
import { FetchOutput } from '../../types';

type Props = {
  colors: FetchOutput[];
  sortedColors: FetchOutput[];
  setRandomColors: (randomColor: FetchOutput[]) => void;
  getSortedColors: (classification: string) => void;
};

function Main(props: Props) {
  const [view, setView] = useState('list');
  const [detailColor, setDetailColor] = useState<FetchOutput>();
  const [pageNumber, setPageNumber] = useState(0);

  return (
    <div>
      <Navbar />
      <Sidebar
        setRandomColors={props.setRandomColors}
        getSortedColors={props.getSortedColors}
        setView={setView}
      />
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
        {view === 'sorted' && (
          <SortedView
            setView={setView}
            setDetailColor={setDetailColor}
            sortedColors={props.sortedColors}
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
