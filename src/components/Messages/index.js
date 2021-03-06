// == Import npm
import React from 'react';
import PropTypes from 'prop-types';
import Message from 'src/containers/Message';

// == Import
import './styles.scss';

// == Composant
const Messages = ({ messages }) => (
  <div className="messages">
    {messages.map((message) => (
      <Message
        key={message.id}
        {...message}
      />
    ))}
  </div>
);

Messages.propTypes = {
  messages: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
    }),
  ).isRequired,
};

// == Export
export default Messages;
