import React, { Component } from "react";
import { connect } from "react-redux";
// import { bindActionCreators } from "redux";
import * as userActions from "../../redux/actions/userActions";
import UserListComponent from "./userlistcomponents";
import ManageUserComponent from "./manageusercomponent";
import Spinner from "../common/Spinner";
import ManageMenu from "../common/ManageMenu";

class UserPageComponent extends Component {
  componentDidMount() {
    const { usersData } = this.props;

    if (usersData && usersData.users.length === 0) {
      //this.props.actions.loadUsers();
      this.props.loadAllUsers();
    }
  }

  handleLoad = () => {
    //this.props.actions.loadUsers();
    this.props.loadAllUsers();
  };

  handleAdd = (event) => {
    event.preventDefault();
    const user = { id: "123456", name: "XxX" };
    // this.props.actions.addNewUser(user);
  };

  handleUpdate = (event) => {
    event.preventDefault();
    console.log("update", this.props.selectedUser);
    // this.props.actions.updateUser(this.props.selectedUser);
  };

  handleDelete = (id) => {
    console.log(id);
    let _user = this.props.usersData.users.filter((user) => user.id === id);
    // this.props.actions.DeleteUserAction(_user[0]);
    this.props.selectUser("");
  };

  handleSelect = (id) => {
    let _user = this.props.usersData.users.filter((user) => user.id === id);
    this.props.selectUser(_user[0].id);
  };

  handleChangeUser = (event) => {
    let filed = event.target.name;
    let value = event.target.value;
    // this.props.selectUser({ ...this.props.selectedUser, [filed]: value });
  };

  render() {
    return (
      <div className="container">
        <div className="row">
          <ManageMenu
            Load={{ IsVisible: true, event: this.handleLoad }}
            Add={{ IsVisible: true, event: this.handleAdd }}
            Update={{ IsVisible: false, event: this.handleUpdate }}
            Delete={{ IsVisible: false, event: this.handleDelete }}
          />
        </div>
        <div className="row">
          <div className="col-md-6">
            {this.props.loading !== "success" ? (
              <Spinner />
            ) : (
              <UserListComponent
                users={this.props.usersData.users}
                onDeleteClick={this.handleDelete}
                onSeletClick={this.handleSelect}
              />
            )}
          </div>
          <div className="col-md-6">
            <ManageUserComponent
              onAddClick={this.handleAdd}
              onUpdateClick={this.handleUpdate}
              mode="edit"
              selecteduser={this.props.selectedUser}
              onUserChange={this.handleChangeUser}
            />
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  usersData: state.usersData,
  loading: state.apiCallsInProgress,
  selectedUser: state.usersData.selectedUser,
});

const mapDispatchToProps = (dispatch) => ({
  loadAllUsers: () => dispatch(userActions.fetchAllUserAction()),
  selectUser: (id) => {
    dispatch(userActions.selectedUserAction(id));
  },
  //actions: bindActionCreators(userActions, dispatch),
  // loadAllUsers: () => dispatch(userActions.loadUsers),
  // createUser: (user) => dispatch(userActions.addNewUser(user)),
});

export default connect(mapStateToProps, mapDispatchToProps)(UserPageComponent);
