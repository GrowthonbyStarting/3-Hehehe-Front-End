import React from 'react';
import styled from 'styled-components';

import {Link, TextBox} from '@components/atom';

const TitleContainer = styled.div`
  padding-top: 1rem;
  padding-bottom: 1rem;
`;

const Title = styled.div`
  font-weight: 700;
  font-size: 1.5rem;
  line-height: 2rem;
  margin-bottom: 1rem;
`;

const MenuBox = styled.div`
  padding-top: 0.5rem;
  padding-bottom: 0.5rem;
  border: 0 solid #e9e9e9;
  border-top-width: 1px;
`;

const SubMenu = styled.p`
  color: #c4c4c4;
  font-size: 14px;
  line-height: 1rem;
  align-items: center;
  height: 2.25rem;
  display: flex;
`;

const Li = styled.li`
  align-items: center;
  cursor: pointer;
  height: 44px;
  display: flex;
`;

const Config = () => (
  <div>
    <TitleContainer>
      <Title>
        <p>안녕하세요!</p>
        <div style={{display: 'flex'}}>
          <p
            style={{
              color: '#6E63E0',
              textOverflow: 'ellipsis',
              overflow: 'hidden',
              maxWidth: '80%',
            }}>
            testFile
          </p>
          님
        </div>
      </Title>
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}>
        <p>testId@gmail.com</p>
        <TextBox color="#C4C4C4" fontSize={14} borderRadius={20}>
          계정관리
        </TextBox>
      </div>
    </TitleContainer>
    <MenuBox>
      <SubMenu>계정</SubMenu>
      <ul>
        <Li>
          <Link href="/config/list">다중 프로필 관리</Link>
        </Li>
        <Li>언어</Li>
      </ul>
    </MenuBox>
    <MenuBox>
      <SubMenu>일반</SubMenu>
      <ul>
        <Li>홈화면 추가</Li>
        <Li>
          <Link href="/bookmark">북마크 목록</Link>
        </Li>
        <Li>위티 사용법</Li>
        <Li>사용 문의</Li>
        <Li>제휴 제안</Li>
        <Li>위티 더 알아보기</Li>
      </ul>
    </MenuBox>
    <MenuBox>
      <SubMenu>About for JANDA</SubMenu>
      <ul>
        <Li>회사 소개</Li>
        <Li>개인정보 처리방침</Li>
        <Li>서비스 이용 약관</Li>
      </ul>
    </MenuBox>
  </div>
);

export default Config;
