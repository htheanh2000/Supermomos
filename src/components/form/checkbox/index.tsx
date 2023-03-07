import { useField } from "formik";
import Error from "../error";

interface IProps {
    children: React.ReactNode;
    name: string;
    value?: string;
    checked?: boolean;
    onChange?: React.ChangeEventHandler<HTMLInputElement>;
    onBlur?: React.FocusEventHandler<HTMLInputElement>;
  }

const Checkbox = ({ children, ...props }:IProps) => {
    // React treats radios and checkbox inputs differently other input types, select, and textarea.
    // Formik does this too! When you specify `type` to useField(), it will
    // return the correct bag of props for you -- a `checked` prop will be included
    // in `field` alongside `name`, `value`, `onChange`, and `onBlur`
    const [field, meta] = useField({ ...props, type: 'checkbox' });
    return (
      <div>
        <label >
          <input className="mr-2" type="checkbox" {...field} {...props} />
          {children}
        </label>
      {(meta.touched && meta.error) ? <Error>{meta.error}</Error> : null}
      </div>
    );
  };

  export default Checkbox