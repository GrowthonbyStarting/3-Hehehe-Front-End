import {useRouter} from 'next/router';
import {useCallback, useState} from 'react';
import styled, {css} from 'styled-components';

import {Plus, BookmarkPurple, Community, MultiProfile} from '@assets/svgs';

const MultiActionContainer = styled.div`
  position: absolute;
  z-index: 100;
  right: 20px;
  bottom: 80px;
  width: 50px;
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ActionButton = styled.button<{active: boolean}>`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  border: 0;
  outline: 0;
  background: #6e63e0;
  font-size: 24px;
  color: white;
  z-index: 2;
  transition: all 0.3s;

  ${props =>
    props.active &&
    css`
      box-shadow: 0 17px 50px 0 rgba(0, 0, 0, 0.19),
        0 12px 15px 0 rgba(0, 0, 0, 0.24);

      svg {
        transition: all 0.3s;
        transform: scale(1.5) rotate(-45deg);
      }
    `}
`;

const ActionsList = styled.ul`
  position: absolute;
  list-style: none inside none;
  margin: 0;
  padding: 0;
  background-color: transparent;
  top: 8px;
  left: 0;
  z-index: 1;
  width: 50px;
  height: 50px;
  border-radius: 50%;
`;

const ActionItem = styled.li<{active: boolean}>`
  white-space: nowrap;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  position: absolute;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  margin: 0;
  background-color: #fff;
  transition: all 0.3s;
  transform: scale(0.3);
  cursor: pointer;
  ${props =>
    props.active &&
    css`
      transition: all 0.3s;
      transform: scale(1);

      &:nth-child(1) {
        margin-top: -65px;
      }

      &:nth-child(2) {
        margin-top: -124px;
      }

      &:nth-child(3) {
        margin-top: -182px;
      }
    `}
`;

const SvgContainer = styled.div`
  padding-right: 1px;
`;

const PopupContainer = styled.div`
  position: absolute;
  height: 2800px;
  width: 600px;
  background: rgba(0, 0, 0, 0.6);
  z-index: 50;
`;
const FloatingActionButton = () => {
  const [isActive, setIsActive] = useState(false);
  const route = useRouter();

  const link = useCallback(
    (url: string) => {
      route.push(url).then(() => setIsActive(false));
    },
    [route],
  );

  return (
    <>
      {isActive && <PopupContainer />}
      <MultiActionContainer>
        <ActionButton active={isActive} onClick={() => setIsActive(!isActive)}>
          <Plus />
        </ActionButton>
        <ActionsList>
          <ActionItem active={isActive} onClick={() => link('/config/list')}>
            <p style={{marginRight: 10, color: 'white'}}>
              {isActive && '다중 프로필 관리'}
            </p>
            <SvgContainer>
              <MultiProfile />
            </SvgContainer>
          </ActionItem>
          <ActionItem
            active={isActive}
            onClick={() => link('/config/bookmark')}>
            <p style={{marginRight: 10, color: 'white'}}>
              {isActive && '북마크'}
            </p>
            <div style={{paddingRight: 1}}>
              <BookmarkPurple />
            </div>
          </ActionItem>
          <ActionItem active={isActive} onClick={() => link('/community')}>
            <p style={{marginRight: 10, color: 'white'}}>
              {isActive && '커뮤니티'}
            </p>
            <div style={{paddingRight: 1}}>
              <Community />
            </div>
          </ActionItem>
        </ActionsList>
      </MultiActionContainer>
    </>
  );
};
export default FloatingActionButton;
