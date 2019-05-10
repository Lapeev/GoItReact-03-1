import React from 'react';
import PropTypes from 'prop-types';
import style from './optionsBar.module.css';

const Options = ({ genres, onChange, name, value }) => (
  /* eslint-disable-next-line */
    <select className={style.select} name={name} value={value} onChange={onChange}>
    <option className={style.option} value="" defaultValue disabled>
      Выберете жанр
    </option>
    {genres.map(genreName => (
      <option className={style.option} key={genreName} value={genreName}>
        {genreName}
      </option>
    ))}
  </select>
);

Options.propTypes = {
  genres: PropTypes.arrayOf(PropTypes.string).isRequired,
  onChange: PropTypes.func.isRequired,
  name: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
};

export default Options;
