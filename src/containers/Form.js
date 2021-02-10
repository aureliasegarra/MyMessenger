import { connect } from 'react-redux';
import Form from 'src/components/Form';
import { setInputValue, addMessage } from 'src/actions';

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
  onSubmitForm: () => {
    console.log('add a new message in the state');
    const action = addMessage();
    dispatch(action);
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Form);
