import { use100vh } from 'react-div-100vh';
import { styled } from 'styled-components';

type Props = {
  children: React.ReactNode;
};

const Layout = ({ children }: Props) => {
  const height = use100vh();

  return (
    <>
      <Background />
      <Base height={height}>{children}</Base>
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
  overflow: hidden;
  .view {
    width: 390px;
    height: ${({ height }) => `${height}px`};
    max-height: 800px;
    margin: 0 auto;
    overflow-y: auto;
    @media (max-width: 767px) {
      width: 100%;
    }
  }
`;
