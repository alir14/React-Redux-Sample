import React from "react";
import PropTypes from "prop-types";

const ManageMenu = ({ Load, Add, Update, Delete }) => {
  return (
    <div className="row">
      {Load.IsVisible ? (
        <input
          type="button"
          className="btn btn-primary"
          value="Load"
          onClick={Load.event}
        />
      ) : (
        <></>
      )}

      {Add.IsVisible ? (
        <input
          type="button"
          className="btn btn-success"
          value="Add"
          onClick={Add.event}
        />
      ) : (
        <></>
      )}

      {Update.IsVisible ? (
        <input
          type="button"
          className="btn btn-warning"
          value="Update"
          onClick={Update.event}
        />
      ) : (
        <></>
      )}

      {Delete.IsVisible ? (
        <input
          type="button"
          className="btn btn-danger"
          value="Delete"
          onClick={Delete.event}
        />
      ) : (
        <></>
      )}
    </div>
  );
};

ManageMenu.propTypes = {
  Load: PropTypes.object.isRequired,
  Add: PropTypes.object.isRequired,
  Update: PropTypes.object.isRequired,
  Delete: PropTypes.object.isRequired,
};

export default ManageMenu;
