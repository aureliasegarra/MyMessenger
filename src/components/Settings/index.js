import React from 'react';
import PropTypes from 'prop-types';

// == Import
import './styles.scss';

// == Composant
const Settings = ({ open, onClickButton }) => {
  const handleOnClick = () => {
    console.log('je veux mettre un click');
    onClickButton();
  };

  const classnames = open ? 'settings settings--open' : 'settings';

  return (
    <div className={classnames}>
      <button
        onClick={handleOnClick}
        type="button"
        className="settings__button"
      >
        +
      </button>
      <form className="settings__form">
        <input type="email" placeholder="votre email" className="settings__input" />
        <input type="password" placeholder="votre mot de passe" className="settings__input" />
        <button type="submit" className="settings__submit">Envoyer</button>
      </form>
    </div>
  );
};

Settings.propTypes = {
  onClickButton: PropTypes.func.isRequired,
  open: PropTypes.bool.isRequired,
};
// == Export
export default Settings;
