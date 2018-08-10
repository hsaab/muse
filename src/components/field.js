import React from "react";
import Input from "./input";

export const Field = ({ label, alt, className, ...rest }) => (
  <div className={`field ${className || ""} ${alt ? "field-alt" : ""}`}>
    <label>{label}</label>
    <Input {...rest} />
  </div>
);

export default Field;
