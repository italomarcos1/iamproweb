import React from 'react';
import PropTypes from 'prop-types';

import { Container, Input, Title } from './styles';
import InputMask from './inputmask';

export default function CustomInput({ title, full, style, name, ...rest }) {
  return (
    <Container full={full} style={style}>
      <Title>{title}</Title>
      <div>
        <input class="areaCode" placeholder="34" disabled />
        <InputMask name={name} {...rest} />
      </div>
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
