import { connect } from "react-redux";
import * as userActions from "../redux/actions/userActions";
import userPageComponent from "../components/user/userPageComponent";
import { defaultSelectedUser } from "../redux/selector/defaultSelectedUser";
const mapStateToProps = (state) => ({
  defaultUser: defaultSelectedUser(state),
  usersData: state.usersData,
  loading: state.apiCallsInProgress,
  selectedUser: state.usersData.selectedUser,
});

const mapDispatchToProps = (dispatch) => ({
  loadAllUsers: () => dispatch(userActions.fetchAllUserAction()),
  selectUser: (id) => {
    dispatch(userActions.selectedUserAction(id));
  },
  manageUser: (user) => dispatch(userActions.addNewUserAction(user)),
  deleteUser: (id) => dispatch(userActions.deleteUserAction(id)),
  modifyUser: (user) => dispatch(userActions.modifyUserAction(user)),
});

export default connect(mapStateToProps, mapDispatchToProps)(userPageComponent);
