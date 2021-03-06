import React from 'react';
import PropTypes from 'prop-types';

const ErrorNotification = ({ text }) => <p>{text}</p>;

ErrorNotification.propTypes = {
  text: PropTypes.string.isRequired,
};

export default ErrorNotification;
