import { Layout } from '@/ui';
import Button from '@/ui/Button';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { styled } from 'styled-components';

const Test = () => {
  const { id } = useParams();
  const [question, setQuestion] = useState('');
  const [optList, setOptList] = useState([]);

  useEffect(() => {
    if (TEST_MAPPINGS.hasOwnProperty(id)) {
      const { question, optionList } = TEST_MAPPINGS[id];
      setQuestion(question);
      setOptList(optionList);
    }
  }, [id]);

  return (
    <Layout>
      <Base className="view">
        <img src={`/testpage/${id}.png`} alt="테스트 이미지" />
        <p className="question">
          문제{id}. {question}
        </p>
        <div className="button-column">
          {optList.map(({ id, opt }) => (
            <Button key={id} text={opt} />
          ))}
        </div>
      </Base>
    </Layout>
  );
};

export default Test;

type Mappings = {
  [key: string]: {
    question: string;
    optionList: { id: number; opt: string }[];
  };
};

const TEST_MAPPINGS: Mappings = {
  1: {
    question:
      '<웰컴 경기: 1km 갯벌 선착순>에서 깃발을 들고 제일 먼저 출발한 팀은?',
    optionList: [
      { id: 1, opt: '군인팀' },
      { id: 2, opt: '스턴트팀' },
      { id: 3, opt: '소방팀' },
      { id: 4, opt: '경호팀' },
      { id: 5, opt: '운동선수팀' },
    ],
  },
  2: {
    question:
      '<웰컴 경기: 1km 갯벌 선착순>에서 군인팀 은미가 크게 외친 한마디는?',
    optionList: [
      { id: 1, opt: '“우리 속도로 해!”' },
      { id: 2, opt: '“깃발 들기 좋은 날씨다!”' },
      { id: 3, opt: '“우리 페이스 지켜!”' },
      { id: 4, opt: '“봉 절대 바닥에 두지 마!”' },
      { id: 5, opt: '“이제 진짜 시작이다!”' },
    ],
  },
  3: {
    question:
      '아래는 <웰컴 경기: 아레나 점령>에서 아레나로 들어온 팀의 순서이다. 알맞은 순서를 고르시오.',
    optionList: [
      { id: 1, opt: '스턴트-군인-소방-운동-경찰-경호' },
      { id: 2, opt: '군인-소방-운동-스턴트-경찰-경호' },
      { id: 3, opt: '군인-스턴트-운동-소방-경찰-경호' },
      { id: 4, opt: '군인-소방-스턴트-운동-경찰-경호' },
      { id: 5, opt: '군인-스턴트-소방-운동-경찰-경호' },
    ],
  },
  4: {
    question:
      '기지 선택 때 소방팀 리더 현아가 제일 마음에 들어했던 기지를 고르시오.',
    optionList: [
      { id: 1, opt: '네모하우스' },
      { id: 2, opt: '트리하우스' },
      { id: 3, opt: '수상가옥' },
      { id: 4, opt: '산장' },
      { id: 5, opt: '쉘터' },
    ],
  },
  5: {
    question:
      '불의 섬은 자급자족의 섬이다. 손바닥만한 파우치에 소지품을 챙기며 손목시계는 챙겼지만 속옷은 챙기지 않은 팀과 "저 노팬티로 살래요"라고 한 사람을 올바르게 연결한 것을 고르시오.',
    optionList: [
      { id: 1, opt: '군인팀-나은' },
      { id: 2, opt: '소방팀-민선' },
      { id: 3, opt: '스턴트팀-서영' },
      { id: 4, opt: '운동선수팀-은별' },
      { id: 5, opt: '경찰팀-해영' },
    ],
  },
};

const Base = styled.div`
  background: #e5e4e0;
  > img {
    width: 100%;
    height: 300px;
    object-fit: cover;
  }
  .question {
    width: 300px;
    margin: 43px auto 0 auto;
    color: #000;
    font-size: 16px;
  }
  .button-column {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 15px;
    margin-top: 35px;
  }
`;
