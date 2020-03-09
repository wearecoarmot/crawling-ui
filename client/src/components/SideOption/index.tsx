import React from 'react';

import { Theme, ToggleTheme } from '~/hooks/useDarkMode';

import Translate from '~/components/Translate';

import Day from './icon/Day';
import Night from './icon/Night';

import { SideOption, ThemeBtn } from './styled';

export type HeaderProps = {
  theme: Theme;
  toggleTheme: ToggleTheme;
};

const SideOptionComponent = ({ theme, toggleTheme }: HeaderProps) => {
  return (
    <SideOption>
      <Translate />
      <ThemeBtn onClick={toggleTheme}>
        {theme === 'dark' ? (
          <>
            <Night />
            <span>NGT</span>
          </>
        ) : (
          <>
            <Day />
            <span>DAY</span>
          </>
        )}
      </ThemeBtn>
    </SideOption>
  );
};

export default SideOptionComponent;
