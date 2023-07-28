import {ComponentPropsWithRef, FC} from 'react';
import styled from 'styled-components';

const HInput = styled.input`
  border: 0;
  box-sizing: border-box;
  margin: 0;
  height: 44px;
  width: 100%;
  border-radius: 0.5rem;
  background-color: rgb(245 245 245);
  padding: 0.5rem 1rem;
  font-size: 0.875rem;
  line-height: 1.25rem;
  outline: 2px solid transparent;
  outline-offset: 2px;
`;

const Container = styled.div`
  display: flex;
  overflow: hidden;
  align-items: center;
  width: 100%;
  margin-bottom: 0.75rem;
  position: relative;
`;
type InputProps = {} & ComponentPropsWithRef<'input'>;
const Input: FC<InputProps> = props => (
  <Container>
    {/* eslint-disable-next-line react/jsx-props-no-spreading */}
    <HInput {...props} />
  </Container>
);

export default Input;
