import { connect } from 'react-redux';
import Form from 'src/components/Form';
import { setInputValue } from 'src/actions';

// state read branch
const mapStateToProps = (state) => ({
  inputValue: state.newMessage,
});

// state write branch
const mapDispatchToProps = (dispatch) => ({
  onChangeInputValue: (value) => {
    const action = setInputValue(value);
    dispatch(action);
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Form);
