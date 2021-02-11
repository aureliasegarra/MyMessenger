import { connect } from 'react-redux';
import Settings from 'src/components/Settings';
import { toggleSettings } from 'src/actions';

const mapStateToProps = (state) => ({
  open: state.open,
});

const mapDispatchToProps = (dispatch) => ({
  onClickButton: () => {
    console.log('je clique sur le bouton');
    const action = toggleSettings();
    dispatch(action);
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Settings);
