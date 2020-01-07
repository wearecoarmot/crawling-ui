import React from 'react';
import { Link } from 'react-router-dom';

import { Theme, ToggleTheme } from '~/hooks/useDarkMode';
import Logo from '~/components/Logo';
import Translate from '~/components/Translate';

import { Header, ThemeBtn } from './styled';

export type HeaderProps = {
  theme: Theme;
  toggleTheme: ToggleTheme;
};

const HeaderComponent = ({ theme, toggleTheme }: HeaderProps) => {
  return (
    <Header>
      <h1>
        <Link to="/">
          <Logo />
          wearecoarmot
        </Link>
      </h1>

      <ThemeBtn onClick={toggleTheme}>
        {theme === 'light' ? (
          <svg width="25" height="24" viewBox="0 0 25 24" fill="none">
            <path
              d="M21.5 12.79C21.3427 14.4922 20.7039 16.1144 19.6582 17.4668C18.6126 18.8192 17.2035 19.8458 15.5957 20.4265C13.9879 21.0073 12.248 21.1181 10.5795 20.7461C8.91102 20.3741 7.38299 19.5345 6.17423 18.3258C4.96546 17.117 4.12594 15.589 3.75391 13.9205C3.38188 12.252 3.49272 10.5121 4.07346 8.9043C4.6542 7.29651 5.68083 5.88737 7.03321 4.84175C8.3856 3.79614 10.0078 3.15731 11.71 3C10.7134 4.34827 10.2338 6.00945 10.3585 7.68141C10.4832 9.35338 11.2039 10.9251 12.3894 12.1106C13.5749 13.2961 15.1466 14.0168 16.8186 14.1415C18.4906 14.2662 20.1517 13.7866 21.5 12.79V12.79Z"
              stroke="black"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        ) : (
          <svg width="25" height="24" viewBox="0 0 25 24" fill="none">
            <g clipPath="url(#clip0)">
              <path
                d="M12.5 17C15.2614 17 17.5 14.7614 17.5 12C17.5 9.23858 15.2614 7 12.5 7C9.73858 7 7.5 9.23858 7.5 12C7.5 14.7614 9.73858 17 12.5 17Z"
                stroke="black"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path d="M12.5 1V3" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              <path d="M12.5 21V23" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              <path
                d="M4.72 4.22L6.14 5.64"
                stroke="black"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M18.86 18.36L20.28 19.78"
                stroke="black"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path d="M1.5 12H3.5" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              <path d="M21.5 12H23.5" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              <path
                d="M4.72 19.78L6.14 18.36"
                stroke="black"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M18.86 5.64L20.28 4.22"
                stroke="black"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </g>
            <defs>
              <clipPath id="clip0">
                <rect x="0.5" width="24" height="24" fill="white" />
              </clipPath>
            </defs>
          </svg>
        )}
      </ThemeBtn>

      <Translate />
    </Header>
  );
};

export default HeaderComponent;
