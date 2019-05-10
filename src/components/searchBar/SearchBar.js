import React from 'react';
import PropTypes from 'prop-types';
import style from './searchBar.module.css';

const SearchBar = ({ value, onChange, name }) => (
  <label className={style.label} htmlFor="bookName">
    <span className={style.span}>Введите интересующую тему</span>
    <input
      className={style.input}
      id="bookName"
      name={name}
      value={value}
      onChange={onChange}
      type="text"
    />
  </label>
);

SearchBar.propTypes = {
  onChange: PropTypes.func.isRequired,
  name: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
};

export default SearchBar;
