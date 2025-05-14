import React from "react";

function Input({ type, name, placeholder, label, ...props }) {
  return (
    <div className="input-container">
      <label htmlFor="input">{label}</label>
      <input type={type} id="input" name={name} required {...props} />
    </div>
  );
}

export default Input;
