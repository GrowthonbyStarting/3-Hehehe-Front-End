import {useState} from 'react';
import Popup from 'reactjs-popup';
import styled from 'styled-components';

import {avatar1, profile1} from '@assets/png';
import {Bookmark, BookmarkBlack, Close, Heart} from '@assets/svgs';
import {Image} from '@components/atom';

const CardContainer = styled.div`
  border-radius: 10px;
  background: white;
  margin-bottom: 1.5rem;
`;

const ImageContainer = styled.div`
  display: flex;
  justify-content: center;
  border-top-right-radius: inherit;
  border-top-left-radius: inherit;
  background: url('${profile1.src}') no-repeat center top/cover,
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

const CategoryContainer = styled.div`
  text-align: center;
  white-space: nowrap;
  display: flex;
  padding: 2px 8px;
  justify-content: center;
  align-items: center;
  gap: 10px;
  border-radius: 20px;
  border: 1px solid #6e63e0;
  color: #6e63e0;
`;

const CommunityCard = () => {
  const [heart, setHeart] = useState(5);
  const [bookmark, setBookmark] = useState(false);

  return (
    <CardContainer>
      <ImageContainer>
        <Popup
          trigger={
            <Image
              alt="profile1"
              src={profile1.src}
              width={profile1.width}
              height={profile1.height}
            />
          }
          contentStyle={{width: 300, height: 500}}
          lockScroll
          modal>
          {/* @ts-ignore */}
          {(close: any) => (
            <>
              <Close className='close' onClick={() => close()}>close</Close>
              {/* eslint-disable-next-line jsx-a11y/iframe-has-title */}
              <iframe
                src="https://wity.im/qwef"
                width="300px"
                height="500px"
                style={{overflow: 'hidden', border: 'none'}}
              />
            </>
          )}
        </Popup>
      </ImageContainer>
      <ContentContainer>
        <LeftContentContainer>
          <Image
            src={avatar1.src}
            width={avatar1.width}
            height={avatar1.height}
            alt="avatar1"
          />
          <div style={{marginLeft: 10}}>
            <h3 style={{margin: 0, marginBottom: 4}}>Lena</h3>
            <CategoryContainer>크리에이터</CategoryContainer>
          </div>
        </LeftContentContainer>
        <RightContentContainer>
          <IconContainer
            style={{
              alignItems: 'flex-start',
              marginRight: 20,
              fontSize: 12,
              fontWeight: 400,
            }}>
            {bookmark ? (
              <Bookmark onClick={() => setBookmark(pre => !pre)} />
            ) : (
              <BookmarkBlack onClick={() => setBookmark(pre => !pre)} />
            )}
            북마크
          </IconContainer>
          <IconContainer>
            <Heart onClick={() => setHeart(pre => pre + 1)} />
            {heart}
          </IconContainer>
        </RightContentContainer>
      </ContentContainer>
    </CardContainer>
  );
};

export default CommunityCard;
