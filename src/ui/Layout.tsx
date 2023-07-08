import { use100vh } from 'react-div-100vh';
import { useLocation } from 'react-router-dom';
import { styled } from 'styled-components';

type Props = {
  children: React.ReactNode;
};

const Layout = ({ children }: Props) => {
  const height = use100vh();
  let { pathname } = useLocation();

  return (
    <>
      <Background />
      <Base height={height}>
        {children}
        <Footer $isWhite={pathname === '/'}>
          이미지 출처 ©넷플릭스 사이렌 / 해솔개발
        </Footer>
      </Base>
    </>
  );
};

export default Layout;

const Background = styled.div`
  z-index: -999;
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #000;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
`;

const Base = styled.div<{ height: number }>`
  width: 100%;
  height: ${({ height }) => `${height}px`};
  position: relative;
  .view {
    width: 390px;
    height: 100%;
    margin: 0 auto;
    @media (max-width: 767px) {
      width: 100%;
      height: 100%;
    }
  }
`;

const Footer = styled.p<{ $isWhite: boolean }>`
  width: 100%;
  height: 10px;
  position: absolute;
  bottom: 20px;
  color: ${({ $isWhite }) => ($isWhite ? '#fff' : '#000')};
  font-size: 10px;
  text-align: center;
`;
