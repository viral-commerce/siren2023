import { styled } from 'styled-components';

type Props = {
  text: string;
  onClick?: () => void;
};

const Button = ({ text, onClick }: Props) => {
  return <Base onClick={onClick}>{text}</Base>;
};

export default Button;

const Base = styled.button`
  width: 300px;
  min-height: 45px;
  border-radius: 5px;
  border: 1px solid #000;
  background: #fff;
  color: #000;
  text-align: center;
  font-size: 16px;
  padding: 10px;
`;
