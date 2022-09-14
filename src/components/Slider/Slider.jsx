import React from 'react';
import PropTypes from 'prop-types';
import styles from './Slider.module.scss';

const Slider = () => (
  <div className={styles.Slider} data-testid="Slider">
    Slider Component
  </div>
);

Slider.propTypes = {};

Slider.defaultProps = {};

export default Slider;
