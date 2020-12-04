import PropTypes from 'prop-types';
import React from 'react';
import StyledRange from './StyledRange';

const Range = ({ className, label, max, min, name, onChange, value }) => (
  <StyledRange className={className}>
    <input type="range" name={name} max={max} min={min} onChange={onChange} value={value} />
    <label>{label}</label>
  </StyledRange>
  );

Range.propTypes = {
  className: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  max: PropTypes.string.isRequired,
  min: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default Range;