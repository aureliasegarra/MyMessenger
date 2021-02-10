// == Import npm
import React from 'react';

// import Components
import Form from 'src/components/Form';
import Messages from 'src/components/Messages';
// == Import
import './styles.scss';

const messages = [
  {
    id: 11,
    author: 'Super Chat',
    content: 'lorem ipsum',
  },
  {
    id: 22,
    author: 'Super Chat',
    content: 'lorem ipsum',
  },
  {
    id: 3,
    author: 'Super Chat',
    content: 'lorem ipsum',
  },
];

// == Composant
const App = () => (
  <div className="app">
    <Messages messages={messages} />
    <Form />
  </div>
);

// == Export
export default App;
