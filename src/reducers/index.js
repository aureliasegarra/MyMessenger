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
};

const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default reducer;
