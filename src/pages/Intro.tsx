import { Button, Layout, ShareButtons } from '@/ui';
import background from '/siren-bg.svg';
import logo from '/siren-logo.svg';
import { styled } from 'styled-components';
import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { db } from '@/firebase';
import { ref, child, get, update, increment } from 'firebase/database';

const Intro = () => {
  const navigate = useNavigate();
  const onTestPage = () => {
    updateCount();
    navigate('/test');
  };
  const [count, setCount] = useState(0);

  const readOne = () => {
    const dbRef = ref(db);
    get(child(dbRef, '/visitors/count'))
      .then(snapshot => {
        if (snapshot.exists()) {
          setCount(snapshot.val());
        } else {
          console.log('No data available');
        }
      })
      .catch(error => {
        console.error(error);
      });
  };

  const updateCount = () => {
    update(ref(db, '/visitors'), {
      count: increment(1),
    });
  };

  useEffect(() => {
    readOne();
  }, []);

  return (
    <Layout>
      <Base className="view">
        <p className="title">본격 사이렌 뇌절 레벨 테스트</p>
        <img src={logo} alt="사이렌 로고" className="logo" />
        <p>
          ※ 주의 ※<br />
          이 테스트는 넷플릭스 공식 컨텐츠가 아니며
          <br />
          사이렌 스포일러를 포함하고 있습니다.
          <br /> <br />
          당신은 사이렌에 얼마나 진심이었나요?
        </p>
        <Button text="❤️‍🔥 테스트 한번 가십니까? ❤️‍🔥" onClick={onTestPage} />
        <p className="count-text">총 {count}명이 사이렌에 진심이었습니다.</p>
        <img src={background} alt="사이렌 배경" className="bg" />
        <ShareButtons />
        <p className="footer">
          이미지 출처 ©넷플릭스 사이렌 🔥 2023 해솔 개발
        </p>
      </Base>
    </Layout>
  );
};

export default Intro;

const Base = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  overflow-x: hidden;
  > p {
    color: #fff;
    text-align: center;
    font-size: 14px;
    margin-top: 65px;
    &.title {
      font-weight: 500;
      margin-top: 92px;
    }
    &.count-text {
      margin-top: 12px;
    }
  }
  .logo {
    width: 257.875px;
    height: 90.37px;
    margin-top: 28px;
  }
  > button {
    margin-top: 28px;
  }
  .bg {
    position: absolute;
    top: 0;
    z-index: -99;
  }
  .button-row {
    display: flex;
    gap: 10px;
    margin-top: 35px;
  }
  .footer {
    width: 100%;
    height: 11px;
    color: #fff;
    text-align: center;
    font-size: 9px;
    font-weight: 500;
    padding-top: 130px;
  }
`;
