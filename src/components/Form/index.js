// == Import npm
import React from 'react';
import PropTypes from 'prop-types';

// == Import
import './styles.scss';

// == Composant
const Form = ({ inputValue, onChangeInputValue }) => {
  const handleOnChange = (event) => {
    console.log('change');
    onChangeInputValue(event.target.value);
  };

  return (
    <form className="form">
      <input
        type="text"
        placeholder="Saisissez votre message..."
        className="form__input"
        value={inputValue}
        onChange={handleOnChange}
      />
      <button
        className="form__button"
        type="submit"
      >
        Send
      </button>
    </form>
  );
};

Form.propTypes = {
  inputValue: PropTypes.string.isRequired,
  onChangeInputValue: PropTypes.func.isRequired,
};

// == Export
export default Form;
