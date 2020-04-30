import React, { memo, FormEvent, ReactElement } from 'react';

import styled from 'styled-components';

type TypeSignFormProps = {
  onSubmit(e: FormEvent): void;
  children?: ReactElement | ReactElement[];
};

const SignForm = memo(({ onSubmit, children }: TypeSignFormProps) => {
  return <Form onSubmit={onSubmit}>{children}</Form>;
});

export default SignForm;

const Form = styled.form`
  position: fixed;
  top: 50%;
  left: 50%;
  display: flex;
  flex-direction: column;
  align-content: center;
  justify-content: center;
  width: 400px;
  height: 230px;
  border-radius: 10px;
  background-color: ${({ theme }) => theme.signBack};
  box-shadow: 3px 5px 10px rgba(0, 0, 0, 0.25);
  transform: translate(-50%, -50%);
`;
