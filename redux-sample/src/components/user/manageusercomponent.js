// import React, { useEffect, useState } from "react";
import React, { useEffect } from "react";
import TextInput from "../common/TextInput";

const ManageUserComponent = ({
  onUpdateClick,
  onAddClick,
  mode,
  errors = {},
  selecteduser,
  onUserChange,
}) => {
  // const [testUser, setUser] = useState({ ...selecteduser });

  useEffect(() => {
    console.log("props:", selecteduser);
    // setUser({ ...testUser, id: selecteduser.id, name: selecteduser.name });
  }, [selecteduser]);

  let _formLabel;
  let _visible = true;
  switch (mode) {
    case "add":
      _formLabel = "Add";
      break;
    case "edit":
      _formLabel = "Edit";
      break;
    case "view":
      _formLabel = "View";
      _visible = false;
      break;
    default:
      break;
  }
  return (
    <form onSubmit={mode === "add" ? onAddClick : onUpdateClick}>
      <h2>{_formLabel} User</h2>
      {errors.onsave && (
        <div className="alert alert-danger" role="alert">
          {errors.onsave}
        </div>
      )}
      <TextInput
        placeholder="id"
        name="id"
        title="id"
        value={selecteduser.id}
        onValueChange={onUserChange}
        error={errors.name}
      />
      <TextInput
        placeholder="name"
        name="name"
        title="name"
        value={selecteduser.name}
        onValueChange={onUserChange}
        error={errors.name}
      />
      {_visible ? (
        <button type="submit" className="btn btn-primary">
          Saving
        </button>
      ) : (
        <></>
      )}
    </form>
  );
};

export default ManageUserComponent;
