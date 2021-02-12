import { WS_CONNECT, SEND_MESSAGE, addMessage } from 'src/actions';

let socket; // variable for the connection to the websocket

// eslint-disable-next-line no-unused-vars
const websocket = (store) => (next) => (action) => {
  switch (action.type) {
    case WS_CONNECT: {
      console.log('websocket');
      socket = window.io('http://localhost:3001'); // connection to websocket
      // as an eventListener on the server response
      socket.on('server_message', (message) => {
        store.dispatch(addMessage(message));
      });
      break;
    }
    case SEND_MESSAGE: {
      const state = store.getState(); // current state

      socket.emit('client_message', { // event type "client_message" send to everyone connected
        author: state.user.pseudo,
        content: state.newMessage,
      });
      break;
    }
    default:
      next(action);
  }
};

export default websocket;
