import styled from 'styled-components';

export const Container = styled.div`
  width: ${({ full }) => (full ? '100%' : '340px')};
  height: ${({ full }) => (full ? '75px' : '60px')};
`;

export const Title = styled.small`
  text-align: left;
  font: 14px 'SFPro';
  letter-spacing: 0.28px;
  color: #aaaaaa;
`;

export const Input = styled.input`
  width: 100%;
  height: 50px;
  margin-top: 7px;
  background-color: #ffffff;
  border: 1px solid #aaaaaa;
  border-radius: 4px;
  padding: 15px 20px;

  color: #666;

  &::placeholder {
    color: #000;
  }
`;
