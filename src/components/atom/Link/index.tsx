import NLink, {LinkProps as NLinkProps} from 'next/link';
import React, {CSSProperties, FC, ReactNode} from 'react';

import styled from '@lib/styled-components';

type LinkProps = {children?: ReactNode; style?: CSSProperties} & NLinkProps;

const SLink = styled(NLink)`
  text-decoration: none;
` as typeof NLink;

const Link: FC<LinkProps> = props => {
  const {children, ...restProps} = props;
  return (
    <SLink
      // eslint-disable-next-line react/jsx-props-no-spreading
      {...restProps}>
      {children}
    </SLink>
  );
};

export default Link;
