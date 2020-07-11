import React, { FC } from 'react';
import { useTranslation } from 'react-i18next';

import { StyledDefaultBoardContent } from './styled';

const DefaultBoardContent: FC = () => {
  const { t } = useTranslation();
  return (
    <StyledDefaultBoardContent>
      <p>{t('dashboard.empty')}</p>
    </StyledDefaultBoardContent>
  );
};

export default DefaultBoardContent;
