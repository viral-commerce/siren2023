import { styled } from 'styled-components';

type Props = {
  id: number;
};

const Progress = ({ id }: Props) => {
  return (
    <Base>
      <Complete id={id} />
    </Base>
  );
};

export default Progress;

const Base = styled.div`
  width: 100%;
  min-height: 5px;
  background: #000;
  margin-top: -5px;
`;

const Complete = styled.div<{ id: number }>`
  width: ${({ id }) => `${(id / 15) * 100}%`};
  min-height: 5px;
  background: #f00;
`;
