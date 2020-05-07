import React from "react";
import PropTypes from "prop-types";

const UserListComponent = ({ users, onDeleteClick, onSeletClick }) => (
  <table>
    <thead>
      <tr>
        <th />
        <th>Id</th>
        <th>Name</th>
        <th />
      </tr>
    </thead>
    <tbody>
      {users.map((user) => {
        return (
          <tr key={user.id}>
            <td>
              {/* <a className="btn btn-light" href="#"> detail </a> */}
              <button
                className="btn btn-dark"
                onClick={() => onSeletClick(user.id)}
              >
                Select
              </button>
            </td>
            <td>{user.id}</td>
            <td>{user.name}</td>
            <td>
              <button
                className="btn btn-outline-danger"
                onClick={() => onDeleteClick(user.id)}
              >
                Delete
              </button>
            </td>
          </tr>
        );
      })}
    </tbody>
  </table>
);

UserListComponent.propTypes = {
  users: PropTypes.array.isRequired,
  onDeleteClick: PropTypes.func.isRequired,
  onSeletClick: PropTypes.func.isRequired,
};

export default UserListComponent;
