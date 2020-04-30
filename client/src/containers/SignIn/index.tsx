import React from 'react';

import useSignIn from '~/hooks/useSignIn';

import SignForm from '~/components/Sign/SignForm';
import SignTitle from '~/components/Sign/SignTitle';
import SignInput from '~/components/Sign/SignInput';
import SignButton from '~/components/Sign/SignButton';

const SignInContainer = () => {
  const {
    state: { id, password },
    onSubmit,
    onChange,
  } = useSignIn();
  return (
    <SignForm onSubmit={onSubmit}>
      <SignTitle title="Sign In" />
      <SignInput type="text" placeholder="ID" name="id" value={id} onChange={onChange} />
      <SignInput type="password" placeholder="PASSWORD" name="password" value={password} onChange={onChange} />
      <SignButton type="submit" title="Sign In" />
    </SignForm>
  );
};

export default SignInContainer;
