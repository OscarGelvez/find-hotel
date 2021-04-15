import styled from 'styled-components';

export const Button = styled.button`
  background: #ffea00;
  border-radius: 5px;
  color: #000;
  height: auto;
  font-weight: 700;
  text-align: center;
  &[disabled] {
    opacity: 0.3;
  }
`;
