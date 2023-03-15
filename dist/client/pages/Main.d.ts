/// <reference types="react" />
import { FetchOutput } from '../../types';
type Props = {
    colors: FetchOutput[];
    setRandomColors: (randomColor: FetchOutput[]) => void;
};
declare function Main(props: Props): JSX.Element;
export default Main;
