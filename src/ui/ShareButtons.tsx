import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { styled } from 'styled-components';

type Props = {
  score?: string;
};

const ShareButtons = ({ score }: Props) => {
  let { pathname } = useLocation();

  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://developers.kakao.com/sdk/js/kakao.js';
    script.async = true;
    document.body.appendChild(script);
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  const copyClipBoard = async () => {
    try {
      await navigator.clipboard.writeText(
        'https://siren2023.netlify.app' + pathname
      );
      alert('링크가 복사되었습니다.');
    } catch (error) {
      console.log(error);
    }
  };

  const shareByKakao = () => {
    if (window.Kakao) {
      const kakao = window.Kakao;
      if (!kakao.isInitialized())
        kakao.init(import.meta.env.VITE_REACT_APP_SHARE_KAKAO_LINK_KEY);

      kakao.Link.sendDefault({
        objectType: 'feed',
        content: {
          title: '사이렌 테스트',
          description:
            pathname === '/'
              ? '당신은 사이렌에 얼마나 진심이었나요?'
              : `사이렌에 진심이었던 당신의 점수는 ${score}점입니다.`,
          imageUrl:
            'https://t1.daumcdn.net/news/202306/07/newsen/20230607111634147ntkc.jpg',
          link: {
            mobileWebUrl: 'https://siren2023.netlify.app' + pathname,
            webUrl: 'https://siren2023.netlify.app' + pathname,
          },
        },
        buttons: [
          {
            title: '웹으로 보기',
            link: {
              mobileWebUrl: 'https://siren2023.netlify.app' + pathname,
              webUrl: 'https://siren2023.netlify.app' + pathname,
            },
          },
        ],
      });
    }
  };

  return (
    <Base>
      <button className="share-button" onClick={shareByKakao}>
        카카오 공유하기
      </button>
      <button className="share-button" onClick={copyClipBoard}>
        링크 공유하기
      </button>
    </Base>
  );
};

export default ShareButtons;

const Base = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin-top: 35px;
  .share-button {
    color: #fff;
    font-size: 12px;
    font-weight: 500;
    background: rgba(0, 0, 0, 0.6);
    padding: 5px 10px;
  }
`;
