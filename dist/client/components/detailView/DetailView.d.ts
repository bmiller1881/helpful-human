/// <reference types="react" />
import { FetchOutput } from '../../../types';
type Props = {
    setView: (view: string) => void;
    detailColor: FetchOutput;
};
declare function DetailView(props: Props): JSX.Element;
export default DetailView;
