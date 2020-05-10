import React, { useEffect } from "react";
import Spinner from "../common/Spinner";
import ManageMenu from "../common/ManageMenu";
import UserListComponent from "./userlistcomponents";
import ManageUserComponent from "./manageusercomponent";

const UserPageComponent = ({
  defaultUser,
  usersData,
  loading,
  selectedUser,
  loadAllUsers,
  selectUser,
  manageUser,
  deleteUser,
  modifyUser,
}) => {
  useEffect(() => {
    if (usersData && usersData.users.length === 0) Loadusers();
  }, [usersData]);

  function Loadusers() {
    loadAllUsers();
  }
  function handleAdd(event) {
    console.log("add");
    event.preventDefault();
    if (selectedUser) manageUser(selectedUser);
  }

  function handleUpdate(event) {
    event.preventDefault();
    console.log("update", selectedUser);
    manageUser(selectedUser);
  }

  function handleDelete(id) {
    console.log(id);
    deleteUser(id);
    //selectUser({ id: "", name: "" });
  }

  function handleSelect(id) {
    let _user = usersData.users.filter((user) => user.id === id);
    selectUser(_user[0].id);
  }

  function handleChangeUser(event) {
    console.log("event", event);
    let filed = event.target.name;
    let value = event.target.value;
    modifyUser({ ...selectedUser, [filed]: value });
  }

  return (
    <div className="container">
      <h2>{defaultUser.name}</h2>
      <div className="row">
        <ManageMenu
          Load={{ IsVisible: true, event: Loadusers }}
          Add={{ IsVisible: true, event: handleAdd }}
          Update={{ IsVisible: false, event: handleUpdate }}
          Delete={{ IsVisible: false, event: handleDelete }}
        />
      </div>
      <div className="row">
        <div className="col-md-6">
          {loading !== "success" ? (
            <Spinner />
          ) : (
            <UserListComponent
              users={usersData.users}
              onDeleteClick={handleDelete}
              onSeletClick={handleSelect}
            />
          )}
        </div>
        <div className="col-md-6">
          <ManageUserComponent
            onAddClick={handleAdd}
            onUpdateClick={handleUpdate}
            mode="edit"
            selecteduser={selectedUser}
            onUserChange={handleChangeUser}
          />
        </div>
      </div>
    </div>
  );
};

export default UserPageComponent;
