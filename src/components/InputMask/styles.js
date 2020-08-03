import styled from 'styled-components';

export const Container = styled.div`
  width: ${({ full }) => (full ? '100%' : '340px')};
  height: ${({ full }) => (full ? '75px' : '60px')};

  div {
    display: flex;
    justify-content: center;
    width: 340px;

    input {
      &.areaCode {
        text-align: center;
        width: 62px;
        color: #666;
        font-size: 14px;
        background-color: #fff;
        border: 1px solid #aaa;
        border-radius: 4px;
        border-bottom-right-radius: 0px;
        border-top-right-radius: 0px;
        border-right-width: 0px;
      }

      width: 278px;
      height: 50px;
      margin-top: 7px;
      background-color: #fff;
      border: 1px solid #aaa;
      border-radius: 4px;
      padding: 15px 20px;
      margin-left: 0px;
      border-bottom-left-radius: 0px;
      border-top-left-radius: 0px;

      color: #666;

      &::placeholder {
        color: #000;
      }
    }
  }
`;

export const Title = styled.small`
  text-align: left;
  font: 14px 'SFPro';
  letter-spacing: 0.28px;
  color: #aaaaaa;
`;
