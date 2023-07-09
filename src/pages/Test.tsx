import { TEST_MAPPINGS } from '@/constants';
import { Layout, Button, Question, Progress } from '@/ui';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { styled } from 'styled-components';

const Test = () => {
  const navigate = useNavigate();
  const [qId, setQId] = useState(1);
  const [imgSrc, setImgSrc] = useState('');
  const [optList, setOptList] = useState<{ id: number; opt: string }[]>([]);
  const [testValue, setTestValue] = useState([]);

  useEffect(() => {
    if (TEST_MAPPINGS.hasOwnProperty(qId)) {
      const { img, optionList } = TEST_MAPPINGS[qId];
      setImgSrc(img);
      setOptList(optionList);
    }
  }, [qId]);

  const setAnswer = (optId: number) => {
    if (qId < 15) {
      setTestValue([...testValue, optId]);
      setQId(prev => prev + 1);
    } else {
      setTestValue([...testValue, optId]);
      navigate('/result', { state: { testValue: testValue } });
    }
  };

  return (
    <Layout>
      <Base className="view">
        <img src={imgSrc} alt="테스트 이미지" />
        <Progress id={qId} />
        <Question id={qId} />
        <div className="button-column">
          {optList.map(({ id, opt }) => (
            <Button key={id} text={opt} onClick={() => setAnswer(id)} />
          ))}
        </div>
      </Base>
    </Layout>
  );
};

export default Test;

const Base = styled.div`
  background: #e5e4e0;
  overflow: auto;
  padding-bottom: 80px;
  > img {
    width: 100%;
    height: 300px;
    object-fit: cover;
  }
  .button-column {
    width: 100%;
    min-height: 285px;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 15px;
    margin-top: 35px;
  }
`;
