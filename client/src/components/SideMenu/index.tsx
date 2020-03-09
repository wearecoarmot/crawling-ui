import React from 'react';
import { NavLink, Link } from 'react-router-dom';

import Logo from '../Logo';
import FooterComponent from '../Footer';

import { SideContainer, StyledLogo, SideMenu, SideItem } from './styled';

const HomeLogo = () => (
  <StyledLogo>
    <Link to="/">
      <Logo />
      wearecoarmot
    </Link>
  </StyledLogo>
);

const SideArea = () => (
  <SideContainer>
    <HomeLogo />
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
    <FooterComponent />
  </SideContainer>
);

export default SideArea;
