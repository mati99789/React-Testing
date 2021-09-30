import React from 'react';
import PropTypes from 'prop-types';

import Navigation from '../../organism/Navigation/Navigation';
import Wrapper from './MainTemplate.styles';

const MainTemplate = ({ children }) => {
  return (
    <Wrapper>
      <Navigation />
      {children}
    </Wrapper>
  );
};

MainTemplate.propTypes = {
  children: PropTypes.func.isRequired,
};

export default MainTemplate;
