import axios from 'axios';
import {FC, useState} from 'react';
import Popup from 'reactjs-popup';
import {useSetRecoilState} from 'recoil';
import styled from 'styled-components';

import {option} from '@/constants/Community';
import db, {type ProfileIds} from '@/constants/UserProfile';
import {Bookmark, BookmarkBlack, Close, Heart, HeartBlack} from '@assets/svgs';
import {Image, TextBox} from '@components/atom';
import {actionButtonShow} from '@components/template/BackGround';

const CardContainer = styled.div`
  border-radius: 10px;
  background: white;
  margin-bottom: 1.5rem;
`;

const ImageContainer = styled.div<{height: number; src: string}>`
  display: flex;
  justify-content: center;
  border-top-right-radius: inherit;
  border-top-left-radius: inherit;
  width: 100%;
  height: ${({height}) => height}px;
  background: url('${({src}) => src}') no-repeat center top/cover,
    linear-gradient(
      180deg,
      rgba(255, 255, 255, 1) 20%,
      rgba(255, 255, 255, 0) 50%
    );
  overflow: hidden;
  background-size: cover;
  object-fit: cover;
`;

const ContentContainer = styled.div`
  display: flex;
  border-bottom-right-radius: inherit;
  border-bottom-left-radius: inherit;
  overflow: hidden;
  padding: 0.5rem;
`;

const LeftContentContainer = styled.div`
  padding: 0.5rem;
  display: flex;
  flex: 2;
`;

const RightContentContainer = styled.div`
  padding: 0.5rem;
  display: flex;
  flex: 3;
  justify-content: flex-end;
  align-items: center;
`;

const IconContainer = styled.div`
  white-space: nowrap;
  display: flex;
  align-items: center;
  flex-direction: column;
  margin-right: 0.5rem;
`;

const Iframe = styled.iframe`
  width: 300px;
  height: 400px;
`;

type CommunityCardProps = {
  profileId: ProfileIds;
  category: string;
  like?: number;
  bookMark?: boolean;
  nickName: string;
  shareLink: string;
  setDataList?: any;
};

const CommunityCard: FC<CommunityCardProps> = props => {
  const {
    profileId,
    category,
    like = 0,
    bookMark = false,
    nickName,
    shareLink,
    setDataList,
  } = props;
  const [heart, setHeart] = useState(like > 0);
  const [count, setCount] = useState(like);
  const [bookmark, setBookmark] = useState(bookMark);
  const setShow = useSetRecoilState(actionButtonShow);
  const {profile, profileBg, avatar} = db[profileId] || db[99];

  const lavel = option.find(e => e.value === category)?.label as string;

  return (
    <CardContainer>
      <ImageContainer height={profileBg.height} src={profileBg.src}>
        <Popup
          onOpen={() => setShow(false)}
          trigger={
            <Image
              alt="profile1"
              src={profile.src}
              width={profile.width}
              height={profile.height}
            />
          }
          position="center center"
          lockScroll
          modal>
          {/* @ts-ignore */}
          {(close: any) => (
            <>
              <Close
                className="close"
                onClick={() => {
                  close();
                  setShow(true);
                }}
                style={{padding: 5, width: 30, height: 30}}
              />
              <Iframe src={shareLink} />
            </>
          )}
        </Popup>
      </ImageContainer>
      <ContentContainer>
        <LeftContentContainer>
          <Image
            src={avatar.src}
            width={avatar.width}
            height={avatar.height}
            alt="avatar1"
          />
          <div style={{marginLeft: 10}}>
            <h3 style={{margin: 0, marginBottom: 4, whiteSpace: 'nowrap'}}>
              {nickName}
            </h3>
            <TextBox color="#6E63E0" fontSize={12} borderRadius={20}>
              {lavel}
            </TextBox>
          </div>
        </LeftContentContainer>
        <RightContentContainer>
          <IconContainer
            style={{
              marginRight: 10,
              fontSize: 12,
              fontWeight: 500,
            }}>
            {bookmark ? (
              <Bookmark
                onClick={() => {
                  axios
                    .delete('/api/profile/bookmark', {
                      data: {
                        profileId,
                        userId: 2,
                      },
                    })
                    .then(() => {
                      setBookmark(pre => !pre);
                      if (setDataList) {
                        setDataList((pre: any) =>
                          pre.filter((e: any) => e.profileId !== profileId),
                        );
                      }
                    });
                }}
              />
            ) : (
              <BookmarkBlack
                onClick={() => {
                  axios
                    .post('/api/profile/bookmark', {
                      profileId,
                      userId: 2,
                    })
                    .then(() => {
                      setBookmark(pre => !pre);
                    });
                }}
              />
            )}
            북마크
          </IconContainer>
          <IconContainer>
            {heart ? (
              <Heart
                onClick={() => {
                  axios
                    .delete('/api/profile/like', {
                      data: {
                        profileId,
                        userId: 2,
                      },
                    })
                    .then(() => {
                      setHeart(false);
                      setCount(pre => pre - 1);
                    });
                }}
              />
            ) : (
              <HeartBlack
                onClick={() => {
                  axios
                    .post('/api/profile/like', {
                      profileId,
                      userId: 2,
                    })
                    .then(() => {
                      setHeart(true);
                      setCount(pre => pre + 1);
                    });
                }}
              />
            )}
            {count}
          </IconContainer>
        </RightContentContainer>
      </ContentContainer>
    </CardContainer>
  );
};

export default CommunityCard;
