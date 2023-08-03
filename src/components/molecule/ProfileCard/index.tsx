import axios from 'axios';
import React, {FC, useCallback, useState} from 'react';
import Switch from 'react-switch';
import {ToastContainer, toast} from 'react-toastify';
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

const SwitchContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;
`;

type ProfileCardProps = {
  profileId: number;
  currentProfile?: boolean;
  category: string;
  nickname?: string;
  share: boolean;
};

const ProfileCard: FC<ProfileCardProps> = props => {
  const {currentProfile, category, nickname, profileId, share} = props;
  const [checked, setChecked] = useState(share);
  const [selectedOption, setSelectedOption] = useState(category);

  const setShare = useCallback(
    async (value: boolean) => {
      const {data} = await axios.put('/api/profile/share', {
        profileId,
        share: value,
        userId: 2,
      });
      return data;
    },
    [profileId],
  );

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
          <NickName>{nickname}</NickName>
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
        <div style={{width: '60%'}}>
          <Input placeholder="한줄로 나를 표현하기" />
          <Select
            value={selectedOption}
            onChangeValue={(value) => {
              axios
                .put('/api/profile/category', {
                  userId: 2,
                  profileId,
                  category: value,
                })
                .then(res => setSelectedOption(res.data.category));
              return value;
            }}
            style={{width: '100%'}}
            options={option}
            emptyColor="none"
          />
        </div>
      </div>
      <SwitchContainer>
        <Switch
          height={20}
          width={35}
          onColor="#6E63E0"
          checkedIcon={false}
          uncheckedIcon={false}
          checked={checked}
          onChange={() => {
            setShare(!checked).then(() => {
              setChecked(pre => {
                toast(
                  pre ? '비공개로 전환되었습니다.' : '공개로 전환되었습니다.',
                  {
                    position: 'top-center',
                    autoClose: 700,
                    hideProgressBar: true,
                    pauseOnHover: false,
                    draggable: false,
                    progress: undefined,
                    theme: 'dark',
                  },
                );
                return !pre;
              });
            });
          }}
        />
      </SwitchContainer>
      <ButtonContainer style={{width: '100%'}}>
        <Button type="button">공유하기</Button>
      </ButtonContainer>
      <ToastContainer />
    </Box>
  );
};

export default ProfileCard;
