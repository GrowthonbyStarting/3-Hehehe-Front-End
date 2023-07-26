import type {ReactNode} from 'react';
import ReactDOM from 'react-dom';

type PortalProps = {
  children: ReactNode;
  selector: string;
};

const Portal = ({children, selector}: PortalProps) => {
  const element =
    typeof window !== 'undefined' && document.querySelector(selector);
  return element && children ? ReactDOM.createPortal(children, element) : null;
};

export default Portal;
