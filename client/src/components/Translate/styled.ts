import styled from '~/lib/styled';

export const Translate = styled.div`
  display: flex;
  padding: 0;
  border: none;
  background-color: rgba(255, 255, 255, 0.5);
  font-size: 0;
  
  svg {
    width: 34px;
    height: 34px;
  }
`;

export const TransBtn = styled.button`
  padding: 0;
  border: none;
  background-color: transparent;
  font-size: 0;
  cursor: pointer;
`;

export const LangWrap = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  
  > li {
    &::before {
      display: inline-block;
      color: #9AC3F3;
      font-size: 12px;
      content: '•';
    }
  }
`;

export const Lang = styled.button`
  padding: 0;
  border: none;
  background-color: transparent;
  color: #9AC3F3;
  font-size: 12px;
  font-weight: 500;
  line-height: 14px;
`;
