import {type CSSProperties, type FC, useState} from 'react';
import styled, {keyframes} from 'styled-components';

import {ChevronDown} from '@assets/svgs';

const fadeIn = keyframes`
  0% {
    opacity: 0;
    transform: translateY(-10px);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
`;

const StyledArrow = styled(ChevronDown)`
  transition: transform 0.3s ease;
  cursor: pointer;
`;

const SelectContainer = styled.div`
  width: 134px;
  background-color: #fff;
  position: relative;
`;

const SelectHeader = styled.div<{isOpen: boolean}>`
  display: flex;
  align-items: center;
  justify-content: space-between;
  cursor: pointer;
  padding: 8px;
  border: 1px solid ${props => (props.isOpen ? '#6E63E0' : '#E9E9E9')};
  border-radius: 6px;
`;

const SelectOptions = styled.div<{isOpen: boolean}>`
  position: absolute;
  border-radius: 6px;
  box-shadow: 0 1px 4px 0 rgba(0, 0, 0, 0.1);
  top: 100%;
  left: 0;
  right: 0;
  border: 0;
  background-color: #fff;
  display: ${props => (props.isOpen ? 'block' : 'none')};
  display: ${props => (props.isOpen ? 'block' : 'none')};
  opacity: ${props => (props.isOpen ? 1 : 0)};
  overflow: hidden;
  animation: ${fadeIn} 0.2s ease-in-out;
  z-index: 10;
`;

const Empty = styled.div<{emptyColor?: string}>`
  padding: 8px;
  background-color: ${({emptyColor}) => emptyColor || 'rgb(250 250 250)'}};
`;

const Option = styled.div`
  cursor: pointer;
  padding: 8px;

  &:hover {
    background-color: #eae9fb;
  }
`;

type SelectProps = {
  options: {value: string; label: string}[];
  style?: CSSProperties;
  emptyColor?: string;
  value: string;
  onChangeValue: (value: string) => void;
};

const Select: FC<SelectProps> = props => {
  const {options, style, emptyColor, value, onChangeValue} = props;
  const [isOpen, setIsOpen] = useState(false);
  const handleOptionSelect = (optionValue: string) => {
    onChangeValue(optionValue);
    setIsOpen(false);
  };
  return (
    <SelectContainer style={style}>
      <SelectHeader isOpen={isOpen} onClick={() => setIsOpen(pre => !pre)}>
        {options.find(option => option.value === value)?.label}
        <StyledArrow
          style={{transform: isOpen ? 'rotate(180deg)' : 'rotate(0)'}}
        />
      </SelectHeader>
      <Empty emptyColor={emptyColor} />
      <SelectOptions isOpen={isOpen}>
        {options.map(option => (
          <Option
            key={option.value}
            onClick={() => handleOptionSelect(option.value)}>
            {option.label}
          </Option>
        ))}
      </SelectOptions>
    </SelectContainer>
  );
};

export default Select;
