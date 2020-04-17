import styled from '~/lib/styled';

export const SideOption = styled.header`
  position: fixed;
  top: 50%;
  right: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  width: 40px;
  height: 120px;
  padding: 14px 8px;
  border-radius: 50px;
  background-color: rgba(255, 255, 255, 0.3);
  transform: translateY(-50%);
`;

export const ThemeBtn = styled.button`
  padding: 0;
  border: none;
  background-color: transparent;
  cursor: pointer;

  > span {
    color: #a4cbf0;
    font-size: 12px;
    font-weight: 400;
    line-height: 14px;
  }
`;
