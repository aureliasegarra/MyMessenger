import { connect } from 'react-redux';
import Form from 'src/components/Form';

// state read branch
const mapStateToProps = (state) => ({
  inputValue: state.newMessage,
});

// state write branch
const mapDispatchToProps = (dispatch) => ({
  onChangeInputValue: () => {
    console.log('want to modify the input value');
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Form);
