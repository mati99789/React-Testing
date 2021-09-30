import React from 'react';
import { Logo, StyledLink, Wrapper } from './Navigation.styles';

const Navigation = () => {
  return (
    <Wrapper>
      <Logo>
        <h1>Navigation</h1>
      </Logo>
      <StyledLink exact to="/">
        Table
      </StyledLink>
      <StyledLink to="/add-user">Add user</StyledLink>
    </Wrapper>
  );
};

export default Navigation;
