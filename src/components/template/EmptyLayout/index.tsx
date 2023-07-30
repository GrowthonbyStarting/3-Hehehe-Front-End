import React, {ComponentPropsWithRef, FC} from 'react';
import styled from 'styled-components';

const Container = styled.div`
  box-sizing: border-box;
  flex: 1 1 0;
  background-color: rgb(250 250 250);
  padding: 1rem 1rem 72px;
  height: inherit;
`;

type EmptyLayoutProps = {} & ComponentPropsWithRef<'div'>;

const EmptyLayout: FC<EmptyLayoutProps> = props => {
  const {children, ...restProps} = props;

  // eslint-disable-next-line react/jsx-props-no-spreading
  return <Container {...restProps}>{children}</Container>;
};

export default EmptyLayout;
