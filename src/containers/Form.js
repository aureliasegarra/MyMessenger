import { connect } from 'react-redux';
import Form from 'src/components/Form';
import { setInputValue } from 'src/actions';

// state read branch
const mapStateToProps = (state) => ({
  inputValue: state.newMessage,
});

// state write branch
const mapDispatchToProps = (dispatch) => ({
  onChangeInputValue: () => {
    console.log('want to modify the input value');
    const action = setInputValue();
    console.log('action', action);
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Form);
