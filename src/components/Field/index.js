import React from 'react';
import PropTypes from 'prop-types';
import './styles.scss';

const Field = ({
  label,
  name,
  type,
  inputValue,
  onChangeInputValue,
}) => {
  const handleOnChange = (event) => {
    onChangeInputValue(event.target.value);
  };

  return (
    <div className="field">
      <label
        htmlFor={name}
        className="field__label"
      >
        {label}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        placeholder={label}
        className="field__input"
        value={inputValue}
        onChange={handleOnChange}
      />
    </div>
  );
};

Field.propTypes = {
  label: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  inputValue: PropTypes.string.isRequired,
  type: PropTypes.string,
  onChangeInputValue: PropTypes.func.isRequired,
};

Field.defaultProps = {
  type: 'text',
};

export default Field;
