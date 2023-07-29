import React, {FC, useState} from 'react';
import Switch from 'react-switch';
import styled from 'styled-components';

import {option} from '@/constants/Community';
import {Avatar, X} from '@assets/svgs';
import {Box, Input, TextBox} from '@components/atom';
import Select from '@components/molecule/Select';

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

const NickName = styled.div`
  color: #000;
  font-size: 18px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  letter-spacing: -0.333px;
  padding: 8px;
`;
type ProfileCardProps = {
  currentProfile?: boolean;
};

const ProfileCard: FC<ProfileCardProps> = props => {
  const {currentProfile} = props;
  const [checked, setChecked] = useState(false);
  return (
    <Box>
      <div
        style={{
          width: '100%',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          marginBottom: 16,
        }}>
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
          }}>
          <NickName>Lena</NickName>
          {currentProfile && (
            <TextBox color="#6E63E0" fontSize={14} borderRadius={4}>
              현재 프로필
            </TextBox>
          )}
        </div>
        <X />
      </div>
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          width: '100%',
        }}>
        <Avatar />
        <div>
          <Input placeholder="한줄로 나를 표현하기" />
          <Select style={{width: '100%'}} option={option} emptyColor="none" />
        </div>
      </div>
      <div style={{width: '100%', display: 'flex', justifyContent: 'flex-end'}}>
        <Switch
          height={20}
          width={35}
          onColor="#6E63E0"
          checkedIcon={false}
          uncheckedIcon={false}
          checked={checked}
          onChange={() => setChecked(pre => !pre)}
        />
      </div>
      <ButtonContainer style={{width: '100%'}}>
        <Button type="button">공유하기</Button>
      </ButtonContainer>
    </Box>
  );
};

export default ProfileCard;
