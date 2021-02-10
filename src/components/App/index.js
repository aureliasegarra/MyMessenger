// == Import npm
import React from 'react';

// import Components
import Form from 'src/components/Form';
import Messages from 'src/containers/Messages';
// == Import
import './styles.scss';

// == Composant
const App = () => (
  <div className="app">
    <Messages />
    <Form />
  </div>
);

// == Export
export default App;
