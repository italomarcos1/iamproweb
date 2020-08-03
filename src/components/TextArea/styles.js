import styled from 'styled-components';

export const Container = styled.div`
  width: 340px;
  height: 177px;
  margin-top: 20px;
`;

export const Title = styled.small`
  text-align: left;
  font: 14px 'SFPro';
  letter-spacing: 0.28px;
  color: #aaaaaa;

  &::placeholder {
    color: #666;
  }
`;

export const Input = styled.textarea`
  width: 100%;
  height: 150px;
  resize: none;
  margin-top: 7px;
  color: #666;
  background-color: #ffffff;
  border: 1px solid #aaaaaa;
  border-radius: 4px;
  padding: 15px 20px;
`;
