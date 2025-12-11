import "./form-input.styles.scss";

export const FormInput = ({ label, ...otherProps }) => {
  return (
    <div className="form-input-wrapper">
      <input className="form-input" {...otherProps} />
      <label
        className={`form-input-label ${otherProps.value ? "shrink" : ""}`}
        htmlFor={otherProps.name}
      >
        {label}
      </label>
    </div>
  );
};
