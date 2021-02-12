import {
  SET_INPUT_VALUE,
  ADD_MESSAGE,
  TOGGLE_SETTINGS,
  CHANGE_INPUT_VALUE,
  SAVE_PSEUDO,
} from 'src/actions';

const initialState = {
  messages: [],
  newMessage: '',
  open: true,
  user: {
    email: 'acidman@herocorp.io',
    password: 'fructis',
    pseudo: 'Anonyme',
  },
  isLogged: false,
};

const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case SET_INPUT_VALUE:
      return {
        ...state,
        newMessage: action.value,
      };
    case ADD_MESSAGE: {
      // creation of a new reference of the array
      const messages = [
        ...state.messages,
        action.message,
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
    case SAVE_PSEUDO:
      return {
        ...state,
        user: {
          ...state.user,
          pseudo: action.pseudo,
        },
        isLogged: true,
        open: false,
      };
    default:
      return state;
  }
};

export default reducer;
