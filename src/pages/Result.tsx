import { RESULT_MAPPING } from '@/constants';
import { Layout, ShareButtons } from '@/ui';
import { useEffect, useState } from 'react';
import { useLocation, useParams } from 'react-router-dom';
import { styled } from 'styled-components';

const Result = () => {
  const { level } = useParams();
  const location = useLocation();
  const [imgSrc, setImgSrc] = useState('');
  const [result, setResult] = useState('');
  const { score } = location?.state;
  console.log(score);
  useEffect(() => {
    if (level === 'addc') setImgSrc('/resultpage/4th.jpeg');
  }, [level]);

  useEffect(() => {
    if (RESULT_MAPPING.hasOwnProperty(level)) {
      const { img, resultText } = RESULT_MAPPING[level];
      setImgSrc(img);
      setResult(resultText);
    }
  }, [level]);

  return (
    <Layout>
      <Base className="view">
        <img src={imgSrc} alt="테스트 이미지" />
        <p className="result-text">{result}</p>
        <p className="score-text">최종 점수 {score}/15</p>
        <ShareButtons />
        <button className="replay">테스트 다시 하기</button>
      </Base>
    </Layout>
  );
};

export default Result;

const Base = styled.div`
  background: #000;
  overflow: auto;
  padding-bottom: 80px;
  display: flex;
  flex-direction: column;
  align-items: center;
  > img {
    width: 100%;
    height: 300px;
    object-fit: cover;
  }
  p {
    color: #fff;
    text-align: center;
    &.result-text {
      width: 300px;
      margin-top: 20px;
      font-size: 25px;
      font-weight: 700;
    }
    &.score-text {
      font-size: 16px;
      margin-top: 12px;
    }
  }
  .replay {
    margin-top: 30px;
    color: #fff;
  }
`;
