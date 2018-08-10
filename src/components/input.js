import React, { Fragment } from "react";
import { debounce } from "../utils/misc";

export const Input = ({ type, value, ...rest }) => (
  <Fragment>
    {type === "textarea" ? (
      <textarea {...rest}>{value}</textarea>
    ) : (
      <input type={type || "text"} value={value} {...rest} />
    )}
  </Fragment>
);

const inputContructor = props => {
  const fProps = { ...props };
  if (props.onChange) {
    fProps.onChange = e => {
      if (e.persist) e.persist();
      debounce(
        () => {
          props.onChange(e);
        },
        200,
        this
      )();
    };
  }
  return <Input {...fProps} />;
};

export default inputContructor;
