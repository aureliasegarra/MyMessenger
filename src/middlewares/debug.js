// middleware is a triple arrow & gives access to :
// - the store,
// - next for the next middleware and
// - action, for the action to dispatch
const debug = (store) => (next) => (action) => {
  console.log('state', store.getState());
  console.log('action', action);
  next(action);
};

export default debug;
