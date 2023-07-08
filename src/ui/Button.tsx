import { styled } from 'styled-components';

type Props = {
  text: string;
};

const Button = ({ text }: Props) => {
  return <Base>{text}</Base>;
};

export default Button;

const Base = styled.button`
  width: 300px;
  height: 45px;
  border-radius: 5px;
  border: 1px solid #000;
  background: #fff;
  color: #000;
  text-align: center;
  font-size: 16px;
  font-weight: 500;
  &:hover {
    background: #e5e5e5;
  }
  &:active {
    background: #e5e5e5;
  }
`;
