import { styled } from 'styled-components';

type Props = {
  id: number;
};

const Question = ({ id }: Props) => {
  return (
    <Base>
      {id === 1 && (
        <p>
          문제1. [웰컴 경기: 1km 갯벌 선착순]에서 깃발을 들고{' '}
          <span className="underline">제일 먼저</span> 출발한 팀은?
        </p>
      )}
      {id === 2 && (
        <p>
          문제2. [웰컴 경기: 1km 갯벌 선착순]에서 군인팀 은미가 크게 외친
          한마디는?
        </p>
      )}
      {id === 3 && (
        <p>
          문제3. 아래는 [웰컴 경기: 아레나 점령]에서 아레나로 들어온 팀의
          순서이다. 알맞은 순서를 고르시오.
        </p>
      )}
      {id === 4 && (
        <p>
          문제4. 기지 선택 때 소방팀 리더 현아가{' '}
          <span className="underline">처음 마음에 들어했던</span> 기지를
          고르시오.
        </p>
      )}
      {id === 5 && (
        <p>
          문제5. 불의 섬은 자급자족의 섬이다. 손바닥만한 파우치에 소지품을
          챙기며 손목시계는 챙겼지만 속옷은 챙기지 않은 팀과 "저 노팬티로
          살래요"라고 한 사람을 올바르게 연결한 것은?
        </p>
      )}
      {id === 6 && (
        <p>문제6. 불의 섬에 입성한 첫 날 제일 먼저 연합을 한 팀을 고르시오.</p>
      )}
      {id === 7 && (
        <>
          <p>
            문제7. 기지전을 앞두고 각 팀은 전략을 짜기 위해 모였다. 전략 중 나온
            대사와 팀을 연결한 것으로 알맞은 것은?
          </p>
          <section>
            ㉠ 이 나무 판자 방패처럼 쓰자
            <br />㉡ 바로 깃발 뜯어불랑께
            <br />㉢ 누구세요? 남의 집에?
            <br />㉣ 공격을 가지말고 무조건 수비
          </section>
        </>
      )}
      {id === 8 && (
        <>
          <p>
            문제8. 군인팀이 수상가옥에서 챙겨 온 물품을{' '}
            <span className="underline">모두</span> 고르시오.
          </p>
          <section>
            ㉠ 소화기
            <br />㉡ 막삽
            <br />㉢ 길리슈트
            <br />㉣ 튜브
          </section>
        </>
      )}
      {id === 9 && <p>문제9. 군인팀과 스턴트팀이 맞춘 암구호로 알맞은 것은?</p>}
      {id === 10 && (
        <p>
          문제10. 경호팀 리더 수련은 군인팀과의 연합 계획을 짜기 위해 스케치를
          하였다. 그때 사용한 필기구를 고르시오.
        </p>
      )}
      {id === 11 && (
        <p>
          문제11. [꺼진불도 다시보자 장작패기]에서 장작 30개를 혼자 다 팬
          사람은?
        </p>
      )}
      {id === 12 && (
        <p>
          문제12. 군인팀이 두번째 기지전이 열리는 날 새벽 2시 25분에 소방팀
          기지로 다시 간 이유로 알맞은 것을 고르시오.
        </p>
      )}
      {id === 13 && (
        <p>
          문제13. 소방팀은 [목마른자가 우물을 판다]에서 승리해 사이렌 통제권을
          얻게 된다. 소방팀이 <span className="underline">제일 처음</span>{' '}
          사이렌을 울린 시간은?
        </p>
      )}
      {id === 14 && (
        <>
          <p>
            문제14. 군인팀은 함께 구호를 외치며 전의를 불태웠다. 다음 중 빈칸에
            들어갈 말로 알맞은 것을 고르시오.
          </p>
          <section>
            피 끓는 전우애!
            <br />
            우리는 하나! 존버 솔저 ____!
          </section>
        </>
      )}
      {id === 15 && (
        <p>
          문제15. 세번째 기지전을 시작하기 전 불의 섬엔 뇌우가 내렸다. 이에 대해
          군인팀의 반응으로 알맞은 것을 고르시오.
        </p>
      )}
    </Base>
  );
};

export default Question;

const Base = styled.div`
  width: 300px;
  margin: 30px auto 0 auto;
  color: #000;
  font-size: 16px;
  font-weight: 500;
  .underline {
    text-decoration: underline;
    text-underline-position: under;
  }
  section {
    width: 300px;
    border: 1px solid #000;
    padding: 10px;
    margin-top: 10px;
    line-height: 160%;
  }
`;
