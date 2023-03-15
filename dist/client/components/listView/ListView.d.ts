/// <reference types="react" />
import { FetchOutput } from '../../../types';
type Props = {
    setView: (view: string) => void;
    setDetailColor: (color: FetchOutput) => void;
    colors: FetchOutput[];
    pageNumber: number;
    setPageNumber: (pageNumber: number) => void;
};
declare function ListView(props: Props): JSX.Element;
export default ListView;
