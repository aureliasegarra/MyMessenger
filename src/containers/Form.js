import { connect } from 'react-redux';
import Form from 'src/components/Form';
import { setInputValue, sendMessage } from 'src/actions';

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
    const action = sendMessage();
    dispatch(action);
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Form);
