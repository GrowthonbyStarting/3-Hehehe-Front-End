import type {NextPage} from 'next';
import React from 'react';
import styled from 'styled-components';

import {Avatar, ChevronUp} from '@/assets/svgs';
import {Box, Input} from '@components/atom';

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

const Home: NextPage = () => (
  <div style={{width: 'inherit'}}>
    <Box>
      <IconContainer>
        <ChevronUp />
      </IconContainer>
      <div>
        <Avatar />
      </div>
      <Input placeholder="닉네임을 적어주세요" />
      <Input placeholder="한줄로 나를 표현하기" />
    </Box>
    <ButtonContainer>
      <Button type="button">+ 탭추가</Button>
    </ButtonContainer>
    <Box>
      <IconContainer
        style={{justifyContent: 'space-between', alignItems: 'center'}}>
        ✍🏻&nbsp;&nbsp;텍스트
        <ChevronUp />
      </IconContainer>
      <Input placeholder="위티는 언제나 최고의 웹프로필을 지원합니다." />
      <Input placeholder="한줄로 나를 표현하기" />
    </Box>
  </div>
);

export default Home;
