// == Import npm
import React from 'react';

// == Import
import './styles.scss';

// == Composant
const Form = () => (
  <form className="form">
    <input
      type="text"
      placeholder="Saisissez votre message..."
      className="form__input"
    />
    <button
      className="form__button"
      type="submit"
    >
      Send
    </button>
  </form>
);

// == Export
export default Form;
