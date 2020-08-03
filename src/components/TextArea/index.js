import React from 'react';
import PropTypes from 'prop-types';

import { Container, Input, Title } from './styles';

export default function CustomInput({ title, full, ...rest }) {
  return (
    <Container full={full}>
      <Title>{title}</Title>
      <Input {...rest} />
    </Container>
  );
}

CustomInput.propTypes = {
  title: PropTypes.string.isRequired,
  full: PropTypes.bool,
};

CustomInput.defaultProps = {
  full: false,
};
