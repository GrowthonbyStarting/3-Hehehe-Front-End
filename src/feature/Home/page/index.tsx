import type {NextPage} from 'next';
import React, {useState} from 'react';
import Switch from 'react-switch';
import styled from 'styled-components';

import {Avatar, ChevronUp, Trash} from '@/assets/svgs';
import {Box, Image, Input} from '@components/atom';

const IconContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  width: 100%;
`;

const ButtonContainer = styled.div`
  display: flex;
  width: auto;
  margin: 16px auto;
  flex-shrink: 0;
  background-color: #ffffff;
  border-radius: 12px;
  flex-direction: column;
  align-items: center;
  position: relative;
`;

const Button = styled.button`
  border-width: 0;
  height: 3rem;
  width: 100%;
  border-radius: 0.5rem;
  background-color: #6e63e0;
  font-weight: 700;
  color: #ffffff;
`;

const SwitchContainer = styled.div`
  width: 100%;
  margin: 0;
  border: 0;
  font: inherit;
  vertical-align: baseline;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0.75rem 0 0.5rem;
`;

const Home: NextPage = () => {
  const [checked, setChecked] = useState(false);
  const [checked2, setChecked2] = useState(false);
  return (
    <div style={{width: 'inherit'}}>
      <Box>
        <IconContainer>
          <ChevronUp />
        </IconContainer>
        <div style={{margin: 40}}>
          <Avatar />
        </div>
        <Input placeholder="한줄로 나를 표현하기" />
      </Box>
      <ButtonContainer>
        <Button type="button">+ 탭추가</Button>
      </ButtonContainer>
      <Box>
        <IconContainer
          style={{
            justifyContent: 'space-between',
            alignItems: 'center',
            marginBottom: 10,
          }}>
          ✍🏻&nbsp;&nbsp;텍스트
          <ChevronUp />
        </IconContainer>
        <Input placeholder="위티는 언제나 최고의 웹프로필을 지원합니다." />
        <Input placeholder="한줄로 나를 표현하기" />
        <SwitchContainer>
          <Switch
            height={20}
            width={35}
            onColor="#6E63E0"
            checkedIcon={false}
            uncheckedIcon={false}
            onChange={() => setChecked(pre => !pre)}
            checked={checked}
          />
          <Trash />
        </SwitchContainer>
      </Box>
      <Box>
        <IconContainer
          style={{
            justifyContent: 'space-between',
            alignItems: 'center',
            marginBottom: 10,
          }}>
          🔗&nbsp;&nbsp;링크
          <ChevronUp />
        </IconContainer>
        <div
          style={{
            width: '100%',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            marginBottom: 13,
          }}>
          <Image
            src="https://www.google.com/s2/favicons?domain=wity.im%26size%3D48&w=96&q=75"
            alt="image"
            width={44}
            height={44}
            style={{marginRight: 12}}
          />
          <Input placeholder="위티 사용법" value='위티 홈페이지' spellCheck={false} style={{marginBottom: 0}} />
        </div>
        <Input placeholder="한줄로 나를 표현하기" value='https://www.wity.im/' />
        <SwitchContainer>
          <Switch
            height={20}
            width={35}
            onColor="#6E63E0"
            checkedIcon={false}
            uncheckedIcon={false}
            onChange={() => setChecked2(pre => !pre)}
            checked={checked2}
          />
          <Trash />
        </SwitchContainer>
      </Box>
    </div>
  );
};

export default Home;
