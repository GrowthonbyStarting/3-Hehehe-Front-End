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
`;

const Empty = styled.div`
  padding: 8px;
  background-color: rgb(250 250 250);
`;

const Option = styled.div`
  cursor: pointer;
  padding: 8px;

  &:hover {
    background-color: #eae9fb;
  }
`;

type SelectProps = {
  option: {value: string; label: string}[];
  style?: CSSProperties;
};

const Select: FC<SelectProps> = props => {
  const {option, style} = props;
  const [selectedOption, setSelectedOption] = useState(option[0].value);
  const [isOpen, setIsOpen] = useState(false);
  const handleOptionSelect = (value: string) => {
    setSelectedOption(value);
    setIsOpen(false);
  };

  return (
    <SelectContainer style={style}>
      <SelectHeader isOpen={isOpen} onClick={() => setIsOpen(pre => !pre)}>
        {option.find(options => options.value === selectedOption)?.label}
        <StyledArrow
          style={{transform: isOpen ? 'rotate(180deg)' : 'rotate(0)'}}
        />
      </SelectHeader>
      <Empty />
      <SelectOptions isOpen={isOpen}>
        {option.map(({value, label}) => (
          <Option
            key={value}
            onClick={() => handleOptionSelect(value)}>
            {label}
          </Option>
        ))}
      </SelectOptions>
    </SelectContainer>
  );
};

export default Select;
