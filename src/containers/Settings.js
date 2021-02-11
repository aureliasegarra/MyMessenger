import { connect } from 'react-redux';
import Settings from 'src/components/Settings';
import { toggleSettings, login } from 'src/actions';

const mapStateToProps = (state) => ({
  open: state.open,
});

const mapDispatchToProps = (dispatch) => ({
  onClickButton: () => {
    const action = toggleSettings();
    dispatch(action);
  },
  onSubmitForm: () => {
    dispatch(login());
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Settings);
