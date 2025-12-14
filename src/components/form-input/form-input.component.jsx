import {
  FormInputLabel,
  FormInputWrapper,
  Input,
} from "./form-input.styles.jsx";

export const FormInput = ({ label, ...otherProps }) => {
  return (
    <FormInputWrapper>
      <Input {...otherProps} />
      <FormInputLabel
        shrink={otherProps.value.length}
        htmlFor={otherProps.name}
      >
        {label}
      </FormInputLabel>
    </FormInputWrapper>
  );
};
