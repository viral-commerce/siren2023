import kakao from '/kakao.svg';
import share from '/share.svg';
import { styled } from 'styled-components';

const ShareButtons = () => {
  return (
    <Base>
      <button className="share-button">
        카카오 공유하기
        <img src={kakao} alt="카카오 공유하기" />
      </button>
      <button className="share-button">
        링크 공유하기
        <img src={share} alt="링크 공유하기" />
      </button>
    </Base>
  );
};

export default ShareButtons;

const Base = styled.div`
  display: flex;
  gap: 10px;
  margin-top: 35px;
  .share-button {
    border-radius: 20px;
    background: rgba(0, 0, 0, 0.7);
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 10px;
    color: #fff;
    font-size: 12px;
    padding: 5px 8px 5px 10px;
    margin-top: 0;
  }
`;
