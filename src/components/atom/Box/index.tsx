import type {ComponentPropsWithRef, FC} from 'react';
import styled from 'styled-components';

const Container = styled.div<{width?: number}>`
  display: flex;
  width: inherit;
  margin: 20px auto;
  flex-shrink: 0;
  background-color: #ffffff;
  border-radius: 12px;
  padding: 20px;
  flex-direction: column;
  align-items: center;
  position: relative;
`;

type BoxProps = {
  width?: number;
} & ComponentPropsWithRef<'div'>;

const Box: FC<BoxProps> = props => {
  const {children, ...restProps} = props;

  return (
    // eslint-disable-next-line react/jsx-props-no-spreading
    <Container {...restProps}>{children}</Container>
  );
};

export default Box;
