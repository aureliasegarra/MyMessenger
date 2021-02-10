// == Import npm
import React from 'react';

// == Import
import './styles.scss';
import PropTypes from 'prop-types';

// == Composant
const Form = ({ inputValue }) => (
  <form className="form">
    <input
      type="text"
      placeholder="Saisissez votre message..."
      className="form__input"
      value={inputValue}
    />
    <button
      className="form__button"
      type="submit"
    >
      Send
    </button>
  </form>
);

Form.propTypes = {
  inputValue: PropTypes.string.isRequired,
};

// == Export
export default Form;
