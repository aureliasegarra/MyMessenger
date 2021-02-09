// == Import npm
import React from 'react';

// == Import
import Message from './Message';
import './styles.scss';

// == Composant
const Messages = () => (
  <div className="messages">
    <Message />
    <Message />
    <Message />
  </div>
);

// == Export
export default Messages;
