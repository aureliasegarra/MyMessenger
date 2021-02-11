// Action types
export const SET_INPUT_VALUE = 'SET_INPUT_VALUE';
export const ADD_MESSAGE = 'ADD_MESSAGE';
export const TOGGLE_SETTINGS = 'TOGGLE_SETTINGS';

// Action creator
export const setInputValue = (value) => ({
  type: SET_INPUT_VALUE,
  value,
});

export const addMessage = () => ({
  type: ADD_MESSAGE,
});

export const toggleSettings = () => ({
  type: TOGGLE_SETTINGS,
});
