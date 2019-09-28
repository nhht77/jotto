import React from 'react';
import propTypes from 'prop-types';

const Congrats = props => {
  return (
    <div data-test="congrats-msg">
      {props.success ? 'Your Guess is correct' : ''}
    </div>
  );
};

Congrats.propTypes = {
  success: propTypes.bool.isRequired
};

export default Congrats;
