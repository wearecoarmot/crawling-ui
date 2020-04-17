import React, { FC } from 'react';
import { NavLink, Link } from 'react-router-dom';

import Logo from '../Logo';
import FooterComponent from '../Footer';

import { SideContainer, StyledLogo, SideMenu, SideItem } from './styled';

type TypeSideArea = {
  isAuth: boolean;
};

const HomeLogo = () => (
  <StyledLogo>
    <Link to="/">
      <Logo />
      <h1>wearecoarmot</h1>
    </Link>
  </StyledLogo>
);

const SideArea: FC<TypeSideArea> = ({ isAuth }) => (
  <SideContainer>
    <HomeLogo />
    {isAuth && (
      <SideMenu>
        <SideItem>
          <NavLink to="/dashboard">Dashboard</NavLink>
        </SideItem>
        <SideItem>
          <NavLink to="/crawling/settings">Crawling Setting</NavLink>
        </SideItem>
        <SideItem>
          <NavLink to="/database/settings">Database Setting</NavLink>
        </SideItem>
      </SideMenu>
    )}
    <FooterComponent />
  </SideContainer>
);

export default SideArea;
