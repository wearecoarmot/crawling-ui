import styled from 'styled-components';

export const Translate = styled.article`
  display: inline-flex;
  flex-direction: column;
`;

export const TransBtn = styled.button`
  padding: 0;
  border: none;
  background-color: transparent;
  font-size: 0;
  cursor: pointer;
  outline: none;
`;

export const LangWrap = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 3px;
`;

export const Lang = styled.button`
  padding: 0;
  border: none;
  background-color: transparent;
  color: #a4cbf0;
  font-size: 12px;
  font-weight: 500;
  line-height: 14px;
  outline: none;
`;
