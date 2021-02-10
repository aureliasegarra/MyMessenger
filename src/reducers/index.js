import { SET_INPUT_VALUE } from 'src/actions';

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
    default:
      return state;
  }
};

export default reducer;
