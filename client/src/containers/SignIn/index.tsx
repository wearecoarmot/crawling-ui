import React from 'react';
import { useTranslation } from 'react-i18next';

import useSignIn from '~/hooks/useSignIn';

import SignForm from '~/components/Sign/SignForm';
import SignTitle from '~/components/Sign/SignTitle';
import SignInput from '~/components/Sign/SignInput';
import SignButton from '~/components/Sign/SignButton';

const SignInContainer = () => {
  const { t } = useTranslation();
  const {
    state: { id, password },
    onSubmit,
    onChange,
  } = useSignIn();
  return (
    <SignForm onSubmit={onSubmit}>
      <SignTitle title={t('signIn.header')} />
      <SignInput type="text" placeholder="ID" name="id" value={id} onChange={onChange} />
      <SignInput type="password" placeholder="PASSWORD" name="password" value={password} onChange={onChange} />
      <SignButton type="submit" title={t('signIn.button')} />
    </SignForm>
  );
};

export default SignInContainer;
