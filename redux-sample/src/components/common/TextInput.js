import React from "react";
//import PropTypes from "prop-types";

const TextInput = ({
  name,
  label,
  placeholder,
  value,
  error,
  onValueChange,
}) => {
  let wrapperClass = "form-group";
  if (error && error.length > 0) {
    wrapperClass += "  has-error";
  }

  return (
    <div className={wrapperClass}>
      <label htmlFor={name}>{label}</label>
      <div className="field">
        <input
          type="text"
          name={name}
          className="form-control"
          placeholder={placeholder}
          value={value}
          //defaultValue={value}
          onChange={onValueChange}
        />
        {error && <div className="alert alert-danger">{error}</div>}
      </div>
    </div>
  );
};

export default TextInput;
