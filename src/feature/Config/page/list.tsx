import axios from 'axios';
import React, {useEffect, useState} from 'react';
import {Tooltip} from 'react-tooltip';
import styled from 'styled-components';

import {ProfileCard} from '@components/molecule';

const SubTitle = styled.h2`
  padding-top: 0;
  margin-top: 0;
  align-items: center;
  display: flex;
  font-size: 1.5rem;
  font-weight: 700;
  line-height: 2rem;
`;

const TooltipContainer = styled.div`
  width: 30px;
  height: 30px;
  border: 1px solid #000000;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 20px;
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

const List = () => {
  const [profileList, setProfileList] = useState<any[]>([]);
  useEffect(() => {
    axios
      .get('/api/profile/multi', {
        params: {
          user: 2,
        },
      })
      .then(res => setProfileList(res.data));
  }, []);
  return (
    <div>
      <Tooltip id="profile-tooltip" style={{zIndex: 10}}>
        <p style={{marginBottom: 5}}>각 프로필 우측 토글 버튼 활성화 시 해당</p>
        <p style={{marginBottom: 5}}>프로필은 커뮤니티에</p>
        <p style={{marginBottom: 5}}>자동 업로드됩니다. 변경 사항 발생 시</p>
        <p>자동으로 변경 업로드 됩니다.</p>
      </Tooltip>
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}>
        <SubTitle>다중 프로필 목록</SubTitle>
        <TooltipContainer data-tooltip-id="profile-tooltip">
          <span>?</span>
        </TooltipContainer>
      </div>
      <ButtonContainer>
        <Button type="button">새 프로필 만들기</Button>
      </ButtonContainer>
      {profileList.map(profile => (
        <ProfileCard
          share={profile.share}
          key={profile.profileId}
          profileId={profile.profileId}
          currentProfile={profile.profileStatus}
          category={profile.category}
          nickname={profile.nickName}
        />
      ))}
    </div>
  );
};

export default List;
