import type {NextPage} from 'next';
import {useRouter} from 'next/router';
import {useEffect, useRef} from 'react';
import type {CSSProperties, ReactNode} from 'react';
import {Transition, TransitionGroup} from 'react-transition-group';
import styled from 'styled-components';

import {backGround, wityIcon, wityLogo, wityTextLogo} from '@assets/png';
import {Icon, Image as IconImage, Link} from '@components/atom';
import {useMediaQuery} from '@hooks/media';

const TIMEOUT = 300;
const getTransitionStyles = {
  entering: {
    position: `absolute`,
    opacity: 0,
    transform: `translateX(-100%)`,
  },
  entered: {
    transition: `opacity ${TIMEOUT}ms ease-in-out, transform ${TIMEOUT}ms ease-in-out`,
    opacity: 1,
    transform: `translateX(0)`,
  },
  exiting: {
    transition: `opacity ${TIMEOUT}ms ease-in-out, transform ${TIMEOUT}ms ease-in-out`,
    opacity: 0,
    transform: `translateX(100%)`,
  },
};

const Canvas = styled.canvas`
  opacity: 0.3;
  width: 100%;
  height: 100vh;
  position: fixed;
  display: block;
  vertical-align: middle;
`;

const Container = styled.div`
  @media (min-width: 1280px) {
    max-width: 1000px;
  }
  width: 100%;
  min-height: 100vh;
  height: 100%;
  margin-right: 20vw;
  margin-left: auto;
  display: flex;
`;

const Left = styled.div`
  @media (min-width: 1000px) {
    overflow: hidden;
  }
  white-space: pre-line;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  max-width: 400px;
  width: 100%;
  height: 100vh;
  display: flex;
  position: relative;
`;

const TopP = styled.p`
  font-weight: 700;
  margin-top: 0.5rem;
  margin-bottom: 0.5rem;
`;

const BottomP = styled.p`
  line-height: 1.2;
  font-weight: 400;
`;

const Right = styled.div`
  box-sizing: border-box;
  font: inherit;
  vertical-align: baseline;
  position: relative;
  margin: 0 auto;
  display: flex;
  width: 100%;
  max-width: 600px;
  flex-direction: column;
  background-color: white;
  overflow: hidden;
`;

const Header = styled.header`
  padding: 0.75rem 1rem;
  justify-content: space-between;
  align-items: center;
  max-width: inherit;
  display: flex;
  z-index: 10;
  height: 36px;
  top: 0;
  position: sticky;
`;

const LeftHeader = styled.div`
  cursor: pointer;
  flex: 1 1 0;
  max-width: 70%;
  display: flex;
  margin-left: 0.75rem;
`;

const RightHeader = styled.div`
  display: flex;
  align-items: center;
`;

const RightHeaderButton = styled.button`
  border: 0 solid #e5e7eb;
  box-sizing: border-box;
  font-family: inherit;
  font-size: 100%;
  line-height: inherit;
  padding: 0;
  cursor: pointer;
  margin: 0 0.5rem 0 0;
  height: 2.25rem;
  width: 96px;
  border-radius: 18px;
  background-color: rgb(243 242 253/1);
  font-weight: 700;
  color: rgb(113 99 232/1);
`;

const ShareButtonContainer = styled.div`
  transform: none;
`;
const ShareButton = styled.div`
  background-color: rgb(113, 99, 232);
  border-radius: 9999px;
  width: 2.25rem;
  height: 2.25rem;
`;

const Footer = styled.footer`
  color: rgb(38 38 38/1);
  box-sizing: border-box;
  margin: 0;
  font: inherit;
  vertical-align: baseline;
  position: fixed;
  bottom: 0;
  z-index: 101;
  display: flex;
  width: 100%;
  max-width: 600px;
  align-items: center;
  justify-content: center;
  border: 0 solid rgb(229 229 229 / 1);
  border-top-width: 0.6px;
  background-color: rgb(255 255 255 / 1);
  padding: 0.5rem 0;
  height: 60px;
`;

const NavUl = styled.ul`
  justify-content: space-evenly;
  align-items: center;
  width: 100%;
  display: flex;
  z-index: 50;
  position: relative;
`;

const NavLi = styled.li`
  color: rgb(0 0 0/1);
  text-align: center;
  cursor: pointer;
  width: 25%;
`;

const MenuContainer = styled.div`
  width: 1.5rem;
  height: 1.5rem;
  margin-left: auto;
  margin-right: auto;
  position: relative;
`;

const MenuText = styled.p`
  font-weight: 600;
  font-size: 10px;
  margin-top: 0.25rem;
`;

type Props = {
  children: ReactNode;
};
const BackGround: NextPage<Props> = ({children}) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const show = useMediaQuery('(min-width: 1280px)');
  const router = useRouter();
  useEffect(() => {
    if (canvasRef.current !== null) {
      const canvas = canvasRef.current;
      const ctx = canvas.getContext('2d') as CanvasRenderingContext2D;
      const image = new Image();
      image.src = backGround.src;
      const drawImage = () => {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        ctx.drawImage(image, 0, 0);
        requestAnimationFrame(drawImage);
      };
      image.onload = () => drawImage();
    }
  }, [canvasRef]);

  return (
    <>
      <Canvas ref={canvasRef} width={32} height={32} />
      <Container>
        {show && (
          <Left>
            <div style={{position: 'fixed', width: 220}}>
              <div style={{marginBottom: 220}}>
                <IconImage
                  src={wityIcon.src}
                  width={64}
                  height={64}
                  alt="icon"
                />
              </div>
              <div>
                <IconImage
                  src={wityLogo.src}
                  width={120}
                  height={53}
                  alt="icon"
                />
                <TopP>Witty Web Profile, Wity</TopP>
                <BottomP>
                  하나의 링크로 SNS, 이미지, 동영상을 한 번에 표현하세요.
                </BottomP>
              </div>
            </div>
          </Left>
        )}
        <Right>
          <Header>
            <IconImage
              src={wityTextLogo.src}
              alt="text"
              height={36}
              width={36}
            />
            <LeftHeader>
              <p style={{textDecorationLine: 'underline'}}>wity.im/</p>
              <p
                style={{
                  textDecorationLine: 'underline',
                  overflow: 'hidden',
                  textOverflow: 'ellipsis',
                }}>
                han5991
              </p>
            </LeftHeader>
            <RightHeader>
              <RightHeaderButton>미리보기</RightHeaderButton>
              <ShareButtonContainer>
                <ShareButton>
                  <Icon.ShareIcon fill="red" width={36} height={36} />
                </ShareButton>
              </ShareButtonContainer>
            </RightHeader>
          </Header>
          <TransitionGroup style={{position: 'relative'}}>
            <Transition
              key={router.pathname}
              timeout={{
                enter: TIMEOUT,
                exit: TIMEOUT,
              }}>
              {status => (
                <div
                  style={
                    {
                      ...getTransitionStyles[
                        status as keyof typeof getTransitionStyles
                      ],
                    } as CSSProperties
                  }>
                  {children}
                </div>
              )}
            </Transition>
          </TransitionGroup>
          <Footer>
            <NavUl>
              <NavLi>
                <Link href="/">
                  <MenuContainer>
                    <Icon.People
                      fill={router.pathname === '/' ? 'red' : undefined}
                    />
                    <MenuText>페이지</MenuText>
                  </MenuContainer>
                </Link>
              </NavLi>
              <NavLi>
                <Link href="/theme">
                  <MenuContainer>
                    <Icon.Theme
                      fill={router.pathname === '/theme' ? 'red' : undefined}
                    />
                    <MenuText>테마</MenuText>
                  </MenuContainer>
                </Link>
              </NavLi>
              <NavLi>
                <Icon.Center />
                <MenuText>미리보기</MenuText>
              </NavLi>
              <NavLi>
                <MenuContainer>
                  <Icon.Chart />
                  <MenuText>분석</MenuText>
                </MenuContainer>
              </NavLi>
              <NavLi>
                <MenuContainer>
                  <Icon.Config />
                  <MenuText>설정</MenuText>
                </MenuContainer>
              </NavLi>
            </NavUl>
          </Footer>
        </Right>
      </Container>
    </>
  );
};

export default BackGround;
