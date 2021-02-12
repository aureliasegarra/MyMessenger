import { connect } from 'react-redux';
import App from 'src/components/App';
import { wsConnect } from 'src/actions';

// eslint-disable-next-line no-unused-vars
const mapStateToProps = (state) => ({});

const mapDispatchToProps = (dispatch) => ({
  websocketConnect: () => {
    console.log('je veux me connecter au webscocket');
    const action = wsConnect();
    dispatch(action);
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
