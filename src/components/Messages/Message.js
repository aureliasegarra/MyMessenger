// == Import npm
import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

// == Import
import './styles.scss';

// == Composant
const Message = ({ author, content, isMine }) => {
  const classnames = classNames('message', { 'message--is-mine': author === isMine });

  return (
    <div className={classnames}>
      <p className="message__author">{author}</p>
      <p className="message__content">{content}</p>
    </div>
  );
};

Message.propTypes = {
  author: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
  isMine: PropTypes.bool.isRequired,
};

// == Export
export default Message;
