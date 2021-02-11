import {
  SET_INPUT_VALUE,
  ADD_MESSAGE,
  TOGGLE_SETTINGS,
  CHANGE_INPUT_VALUE,
} from 'src/actions';

import { getHighestId } from 'src/selectors';

const initialState = {
  messages: [
    {
      id: 11,
      author: 'Super Chat',
      content: 'Hey salut',
    },
    {
      id: 22,
      author: 'Super Miaou',
      content: 'Comment tu vas ?',
    },
    {
      id: 3,
      author: 'Super Chat',
      content: 'Super !',
    },
  ],
  newMessage: '',
  open: true,
  user: {
    email: 'toto@tata.com',
    password: 'qsdfghjkk',
    pseudo: 'Anonyme',
  },
};

const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case SET_INPUT_VALUE:
      return {
        ...state,
        newMessage: action.value,
      };
    case ADD_MESSAGE: {
      // new object to put in the array of messages
      const message = {
        id: getHighestId(state) + 1,
        author: 'Vincent',
        content: state.newMessage,
      };
      // creation of a new reference of the array
      const messages = [
        ...state.messages,
        message,
      ];
      return {
        ...state,
        messages,
        newMessage: '',
      };
    }
    case TOGGLE_SETTINGS:
      return {
        ...state,
        open: !state.open,
      };
    case CHANGE_INPUT_VALUE:
      return {
        ...state,
        user: {
          ...state.user,
          [action.name]: action.value, // brakets to dynamize props
        },
      };
    default:
      return state;
  }
};

export default reducer;
