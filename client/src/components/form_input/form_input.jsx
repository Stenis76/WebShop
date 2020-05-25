import React from "react";

import "./form_input.styles.scss";

const FormInput = ({ handleChange, label, value, name, type }) => (
  <div className="group">
    <input
      className="form-input"
      name={name}
      value={value}
      type={type}
      onChange={handleChange}
      required
    />
    {label ? (
      <label className={`${value.length ? "shrink" : ""} form-input-label`}>
        {label}
      </label>
    ) : null}
  </div>
);

export default FormInput;
