import React, { memo } from 'react';
import styled from 'styled-components';

type TypeSignTitleProps = {
  title: string;
};

const SignTitle = memo(({ title }: TypeSignTitleProps) => {
  return <Title>{title}</Title>;
});

export default SignTitle;

const Title = styled.h2`
  margin-bottom: 10px;
  color: ${({ theme }) => theme.titleColor};
  font-size: 24px;
  font-weight: 700;
  text-align: center;
  line-height: 1.5;
`;
