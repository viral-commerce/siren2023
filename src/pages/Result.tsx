import { ANSWERS } from '@/constants';
import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

const Result = () => {
  const location = useLocation();
  const { testValue } = location?.state;
  const [score, setScore] = useState(0);
  const [isLoading, setIsLoading] = useState(true);

  const countScore = () => {
    const score =
      testValue.filter((ans: number, idx: number) => ans === ANSWERS[idx])
        .length + 1;
    setScore(score);
    setIsLoading(false);
  };

  useEffect(() => {
    countScore();
  }, [testValue]);

  return <div>{isLoading ? <p>결과 계산 중 ....</p> : <p>{score}/15</p>}</div>;
};

export default Result;
