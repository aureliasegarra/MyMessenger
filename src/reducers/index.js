import { SET_INPUT_VALUE, ADD_MESSAGE } from 'src/actions';
import { getHighestId } from 'src/selectors';

const initialState = {
  messages: [
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
  ],
  newMessage: '',
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
    default:
      return state;
  }
};

export default reducer;
