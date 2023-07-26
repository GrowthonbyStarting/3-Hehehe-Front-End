import React, {useState, useEffect} from 'react';
import type {ReactNode} from 'react';

type ClientOnlyProps = {
  children: ReactNode;
};

const ClientOnly = ({children}: ClientOnlyProps) => {
  const [hasMounted, setHasMounted] = useState(false);

  useEffect(() => {
    setHasMounted(true);
  }, []);

  // eslint-disable-next-line react/jsx-no-useless-fragment
  return hasMounted ? <>{children}</> : null;
};

export default ClientOnly;
