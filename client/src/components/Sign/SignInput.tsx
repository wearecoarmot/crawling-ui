import React, { memo, ChangeEvent } from 'react';

import styled from 'styled-components';

type TypeSignInputProps = {
  type: string;
  value: any;
  name: string;
  onChange(e: ChangeEvent<HTMLInputElement>): void;
  placeholder?: string;
};

const SignInput = memo(({ type, placeholder, name, value, onChange }: TypeSignInputProps) => {
  return <Input type={type} placeholder={placeholder} name={name} value={value} onChange={onChange} />;
});

export default SignInput;

const Input = styled.input.attrs({
  autoComplete: 'off',
  autoCapitalize: 'off',
  autoCorrect: 'off',
})`
  align-self: center;
  width: 200px;
  height: 24px;
  border: none;
  border-radius: 10px;
  background-color: ${({ theme }) => theme.inputBack};
  box-shadow: inset 1px 1px 2px rgba(0, 0, 0, 0.25);
  font-size: 14px;
  line-height: 24px;
  text-align: center;
  outline: none;

  &::placeholder {
    color: ${({ theme }) => theme.placeholder};
  }

  & + & {
    margin-top: 10px;
  }
`;
