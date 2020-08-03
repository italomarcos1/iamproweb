import React from 'react';
import PropTypes from 'prop-types';

import { Container, Input, Title } from './styles';

export default function CustomInput({ title, full, style, ...rest }) {
  return (
    <Container full={full} style={style}>
      <Title>{title}</Title>
      <Input {...rest} />
    </Container>
  );
}

CustomInput.propTypes = {
  title: PropTypes.string.isRequired,
  full: PropTypes.bool,
  style: PropTypes.oneOfType([PropTypes.object]),
};

CustomInput.defaultProps = {
  full: false,
  style: {},
};
