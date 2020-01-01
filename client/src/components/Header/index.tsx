import React from 'react';
import { Link } from 'react-router-dom';

import { Theme, ToggleTheme } from '~/hooks/useDarkMode';
import { Header, ThemeBtn, Translate } from './styled';

export type HeaderProps = {
  theme: Theme;
  toggleTheme: ToggleTheme;
}

const HeaderComponent = ({ theme, toggleTheme, }: HeaderProps) => {
  return (
    <Header>
      <h1>
        <Link to='/'>Crawling UI</Link>
      </h1>

      <ThemeBtn onClick={toggleTheme}>
        {theme === 'light' ? (
          <svg width="25" height="24" viewBox="0 0 25 24" fill="none">
            <path d="M21.5 12.79C21.3427 14.4922 20.7039 16.1144 19.6582 17.4668C18.6126 18.8192 17.2035 19.8458 15.5957 20.4265C13.9879 21.0073 12.248 21.1181 10.5795 20.7461C8.91102 20.3741 7.38299 19.5345 6.17423 18.3258C4.96546 17.117 4.12594 15.589 3.75391 13.9205C3.38188 12.252 3.49272 10.5121 4.07346 8.9043C4.6542 7.29651 5.68083 5.88737 7.03321 4.84175C8.3856 3.79614 10.0078 3.15731 11.71 3C10.7134 4.34827 10.2338 6.00945 10.3585 7.68141C10.4832 9.35338 11.2039 10.9251 12.3894 12.1106C13.5749 13.2961 15.1466 14.0168 16.8186 14.1415C18.4906 14.2662 20.1517 13.7866 21.5 12.79V12.79Z" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        ) : (
          <svg width="25" height="24" viewBox="0 0 25 24" fill="none">
            <g clipPath="url(#clip0)">
              <path d="M12.5 17C15.2614 17 17.5 14.7614 17.5 12C17.5 9.23858 15.2614 7 12.5 7C9.73858 7 7.5 9.23858 7.5 12C7.5 14.7614 9.73858 17 12.5 17Z" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M12.5 1V3" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M12.5 21V23" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M4.72 4.22L6.14 5.64" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M18.86 18.36L20.28 19.78" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M1.5 12H3.5" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M21.5 12H23.5" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M4.72 19.78L6.14 18.36" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M18.86 5.64L20.28 4.22" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </g>
            <defs>
              <clipPath id="clip0">
                <rect x="0.5" width="24" height="24" fill="white"/>
              </clipPath>
            </defs>
          </svg>
        )}
      </ThemeBtn>

      <Translate >
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
          <path d="M11.99 2C6.47 2 2 6.48 2 12C2 17.52 6.47 22 11.99 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 11.99 2ZM18.92 8H15.97C15.65 6.75 15.19 5.55 14.59 4.44C16.43 5.07 17.96 6.35 18.92 8ZM12 4.04C12.83 5.24 13.48 6.57 13.91 8H10.09C10.52 6.57 11.17 5.24 12 4.04ZM4.26 14C4.1 13.36 4 12.69 4 12C4 11.31 4.1 10.64 4.26 10H7.64C7.56 10.66 7.5 11.32 7.5 12C7.5 12.68 7.56 13.34 7.64 14H4.26ZM5.08 16H8.03C8.35 17.25 8.81 18.45 9.41 19.56C7.57 18.93 6.04 17.66 5.08 16V16ZM8.03 8H5.08C6.04 6.34 7.57 5.07 9.41 4.44C8.81 5.55 8.35 6.75 8.03 8V8ZM12 19.96C11.17 18.76 10.52 17.43 10.09 16H13.91C13.48 17.43 12.83 18.76 12 19.96ZM14.34 14H9.66C9.57 13.34 9.5 12.68 9.5 12C9.5 11.32 9.57 10.65 9.66 10H14.34C14.43 10.65 14.5 11.32 14.5 12C14.5 12.68 14.43 13.34 14.34 14ZM14.59 19.56C15.19 18.45 15.65 17.25 15.97 16H18.92C17.96 17.65 16.43 18.93 14.59 19.56V19.56ZM16.36 14C16.44 13.34 16.5 12.68 16.5 12C16.5 11.32 16.44 10.66 16.36 10H19.74C19.9 10.64 20 11.31 20 12C20 12.69 19.9 13.36 19.74 14H16.36Z" fill="black"/>
        </svg>
      </Translate>
    </Header>
  );
};

export default HeaderComponent;
