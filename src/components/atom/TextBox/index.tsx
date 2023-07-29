import {FC} from 'react';
import styled from 'styled-components';

type TextBoxProps = {
  children: string;
  color: string;
  fontSize: number;
  borderRadius: number;
};

const StyleTextBox = styled.div<TextBoxProps>`
  font-size: ${({fontSize}) => fontSize}px;
  text-align: center;
  white-space: nowrap;
  display: flex;
  padding: 2px 8px;
  justify-content: center;
  align-items: center;
  gap: 10px;
  border-radius: ${({borderRadius}) => borderRadius}px;
  border: 1px solid ${({color}) => color};
  color: ${({color}) => color};
`;

const TextBox: FC<TextBoxProps> = props => {
  const {children, color, fontSize, borderRadius} = props;
  return (
    <StyleTextBox color={color} fontSize={fontSize} borderRadius={borderRadius}>
      {children}
    </StyleTextBox>
  );
};

export default TextBox;
