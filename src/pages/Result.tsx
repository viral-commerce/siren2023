import { RESULT_MAPPING } from '@/constants';
import { Button, Footer, Layout, ShareButtons } from '@/ui';
import { useEffect, useState } from 'react';
import {
  ScrollRestoration,
  useLocation,
  useNavigate,
  useParams,
} from 'react-router-dom';
import { styled } from 'styled-components';
import { db } from '@/firebase';
import { update, ref, increment } from 'firebase/database';

const updateCount = () => {
  update(ref(db, '/visitors'), {
    count: increment(1),
  });
};

const Result = () => {
  const navigate = useNavigate();
  const { level } = useParams();
  const location = useLocation();
  const [imgSrc, setImgSrc] = useState('');
  const [result, setResult] = useState('');
  const { score } = location?.state;

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

  useEffect(() => {
    updateCount();
  }, []);

  return (
    <Layout>
      <Base className="view">
        <ScrollRestoration />
        <img src={imgSrc} alt="테스트 이미지" />
        <p className="result-text">{result}</p>
        <p className="score-text">최종 점수 {score}/15</p>
        <Button text="❤️‍🔥 테스트 다시하기 ❤️‍🔥" onClick={() => navigate('/')} />
        <ShareButtons score={score} />
        <Footer />
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
      padding-bottom: 20px;
    }
  }
  .replay {
    margin-top: 30px;
    color: #fff;
  }
`;
