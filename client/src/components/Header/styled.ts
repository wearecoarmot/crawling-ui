import styled from '~/lib/styled';

export const Header = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  height: 68px;
  padding: 0 1em;
  background-color: #A2A1F9;
  
  h1 {
    color: #FFFFFF;
    font-size: 2em;
    line-height: 1.5em;
  }
`;

export const ThemeBtn = styled.button`
  width: 25px;
  height: 25px;
  margin-left: auto;
  margin-right: 1.2em;
  padding: 0;
  border: none;
  background-color: transparent;
  cursor: pointer;
  
  &:focus {
    outline: -webkit-focus-ring-color auto 5px;
  }
`;

export const Translate = styled.h1`
  width: 40px;
  height: 40px;
  background-color: #000000;
`;
