import React from 'react';
import { Link } from 'react-router-dom';

import Logo from '../Logo';

import { SideContainer, StyledLogo, SideMenu } from './styled';
import FooterComponent from '../Footer';

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
      <Link to="/dashboard">Dashboard</Link>
      <Link to="/crawling/settings">Crawling Setting</Link>
      <Link to="/database/settings">Database Setting</Link>
    </SideMenu>
    <FooterComponent />
  </SideContainer>
);

export default SideArea;
