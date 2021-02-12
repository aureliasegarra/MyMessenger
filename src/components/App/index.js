// == Import npm
import React, { useEffect } from 'react';
import PropTypes from 'prop-types';

// import Components
import Form from 'src/containers/Form';
import Messages from 'src/containers/Messages';
import Settings from 'src/containers/Settings';
// == Import
import './styles.scss';

// == Composant
const App = ({ websocketConnect }) => {
  useEffect(() => {
    // via a middleware to connect, launch at first render
    websocketConnect();
  }, []);

  return (
    <div className="app">
      <Settings />
      <Messages />
      <Form />
    </div>
  );
};

App.propTypes = {
  websocketConnect: PropTypes.func.isRequired,
};

// == Export
export default App;
