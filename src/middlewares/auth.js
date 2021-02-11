import axios from 'axios';
import { LOGIN, savePseudo } from 'src/actions';

const auth = (store) => (next) => (action) => {
  switch (action.type) {
    case LOGIN: {
      const state = store.getState(); // current state via the store

      axios.post('http://localhost:3001/login', {
        email: state.user.email,
        password: state.user.password,
      })
        .then((response) => {
          const { pseudo } = response.data;
          // we use the Dispatch function as we have access to the store
          store.dispatch(savePseudo(pseudo));
        })
        .catch((error) => console.log('error', error));
      break;
    }
    default:
      break;
  }
  next(action);
};

export default auth;
