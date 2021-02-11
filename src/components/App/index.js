// == Import npm
import React from 'react';

// import Components
import Form from 'src/containers/Form';
import Messages from 'src/containers/Messages';
import Settings from 'src/containers/Settings';
// == Import
import './styles.scss';

// == Composant
const App = () => (
  <div className="app">
    <Settings />
    <Messages />
    <Form />
  </div>
);

// == Export
export default App;
