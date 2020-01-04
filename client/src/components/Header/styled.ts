import styled from '~/lib/styled';

export const Header = styled.header`
  display: flex;
  align-items: flex-start;
  width: 100%;
  height: 192px;
  padding: 10px;
  background-color: var(--background-color);
  
  h1 {
    color: #FFFFFF;
    font-size: 19px;
    font-weight: 700;
    a {
      display: inline-flex;
      svg {
        margin-right: 5px;
      }
    }
  }
`;

export const ThemeBtn = styled.button`
  width: 25px;
  height: 24px;
  margin-left: auto;
  margin-right: 1.2em;
  padding: 0;
  border: none;
  background-color: transparent;
  cursor: pointer;
`;

export const Translate = styled.button`
  width: 24px;
  height: 24px;
  padding: 0;
  border: none;
  background-color: transparent;
  cursor: pointer;
`;
