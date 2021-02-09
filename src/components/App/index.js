// == Import npm
import React from 'react';

// import Components
import Form from 'src/components/Form';
import Messages from 'src/components/Messages';
// == Import
import './style.scss';

// == Composant
const App = () => (
  <div className="app">
    <Messages />
    <Form />
  </div>
);

// == Export
export default App;
