import { styled } from 'styled-components';

const Footer = () => {
  return <Base>이미지 출처 ©넷플릭스 사이렌 🔥 2023 해솔 개발</Base>;
};

export default Footer;

const Base = styled.div`
  width: 100%;
  height: 11px;
  color: #fff;
  text-align: center;
  font-size: 9px;
  font-weight: 500;
  bottom: 11px;
  position: absolute;
`;
