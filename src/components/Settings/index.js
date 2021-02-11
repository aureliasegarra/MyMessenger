import React from 'react';
import PropTypes from 'prop-types';
import Field from 'src/containers/Field';

// == Import
import './styles.scss';

// == Composant
const Settings = ({ open, onClickButton, onSubmitForm }) => {
  const handleOnClick = () => {
    console.log('je veux mettre un click');
    onClickButton();
  };

  const handleOnSubmit = (event) => {
    event.preventDefault();
    console.log('je veux soumettre les fields');
    onSubmitForm();
  };

  const classnames = open ? 'settings settings--open' : 'settings';

  return (
    <div className={classnames}>
      <button
        type="button"
        className="settings__button"
        onClick={handleOnClick}
      >
        +
      </button>
      <form className="settings__form" onSubmitForm={handleOnSubmit}>
        <Field
          type="email"
          label="Email"
          name="email"
        />
        <Field
          type="password"
          label="Mot de passe"
          name="password"
        />
        <button type="submit" className="settings__submit">Envoyer</button>
      </form>
    </div>
  );
};

Settings.propTypes = {
  onClickButton: PropTypes.func.isRequired,
  open: PropTypes.bool.isRequired,
  onSubmitForm: PropTypes.func.isRequired,
};
// == Export
export default Settings;
