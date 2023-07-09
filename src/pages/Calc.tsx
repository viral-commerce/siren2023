import { ANSWERS } from '@/constants';
import { Layout } from '@/ui';
import { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { ClipLoader } from 'react-spinners';
import { styled } from 'styled-components';

const Calc = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const testValue = location?.state.testValue;

  const countScore = () => {
    const sum =
      testValue.filter((ans: number, idx: number) => ans === ANSWERS[idx])
        .length + 1;
    if (sum >= 14) navigate('/result/duiu', { state: { score: sum } });
    else if (sum >= 11) navigate('/result/fhbd', { state: { score: sum } });
    else if (sum >= 8) navigate('/result/bdhc', { state: { score: sum } });
    else navigate('/result/addc', { state: { score: sum } });
  };

  useEffect(() => {
    if (testValue) countScore();
    else if (testValue === null) navigate('/');
  }, [testValue]);

  return (
    <Layout>
      <Base className="view">
        <ClipLoader color={'red'} size="50px" />
      </Base>
    </Layout>
  );
};

export default Calc;

const Base = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;
