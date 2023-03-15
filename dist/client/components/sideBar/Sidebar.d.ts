/// <reference types="react" />
import { FetchOutput } from '../../../types';
type Props = {
    setRandomColors: (randomColor: FetchOutput[]) => void;
};
declare function Sidebar(props: Props): JSX.Element;
export default Sidebar;
