import React from 'react';
import PropTypes from 'prop-types';
import Select from 'react-select';

const CategoryFilter = ({ options, handleChange }) => (
  <div>
    <p> Select Category </p>
    <Select options={options} onChange={(e) => handleChange(e)} required />
  </div>
);

CategoryFilter.propTypes = {
  options: PropTypes.arrayOf(PropTypes.object).isRequired,
  handleChange: PropTypes.func.isRequired,
};

export default CategoryFilter;
