import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';

import { tLang } from '~/lang/i18n';

import Earth from './icon/Earth';

import { Translate, TransBtn, LangWrap, Lang } from './styled';

type Translate = {
  onClick(): () => void;
}

const TranslateComponent = () => {
  const { i18n } = useTranslation();
  const [isMove, setMove] = useState(false);

  function onClick() {
    setMove(prevState => !prevState);
  }

  function changeLanguage(lang: tLang) {
    i18n.changeLanguage(lang);
  }

  return (
    <Translate>
      <TransBtn onClick={onClick} onFocus={onClick}>
        <Earth />
        Choose Language
      </TransBtn>

      {isMove && (
        <LangWrap>
          <li>
            <Lang onClick={() => changeLanguage('ko')}>KOR</Lang>
          </li>
          <li>
            <Lang onClick={() => changeLanguage('en')}>ENG</Lang>
          </li>
        </LangWrap>
      )}
    </Translate>
  );
};

export default TranslateComponent;
