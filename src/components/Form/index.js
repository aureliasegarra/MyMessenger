// == Import npm
import React, { useRef, useEffect } from 'react';
import PropTypes from 'prop-types';

// == Import
import './styles.scss';

// == Composant
const Form = ({ inputValue, onChangeInputValue, onSubmitForm }) => {
  // target : reach the react component
  const inputRef = useRef(null);
  // target : focus on input component at first render
  useEffect(() => {
    inputRef.current.focus();
  }, []);

  const handleOnChange = (event) => {
    onChangeInputValue(event.target.value);
  };

  const handleOnSubmit = (event) => {
    event.preventDefault();
    if (inputValue) {
      onSubmitForm();
    }
  };

  return (
    <form className="form" onSubmit={handleOnSubmit}>
      <input
        ref={inputRef}
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
  onSubmitForm: PropTypes.func.isRequired,
};

// == Export
export default Form;
