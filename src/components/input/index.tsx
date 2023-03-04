import {
  forwardRef,
  HTMLInputTypeAttribute,
  useImperativeHandle,
  useRef,
} from "react";

type Props = {
  placeholder?: string;
  label?: string;
  className?: string;
  name?: string;
  onChange?: any;
  type?: HTMLInputTypeAttribute;
  value?: string;
};

export interface InputRef extends HTMLInputElement {
  getValue: () => string;
}

const Input = forwardRef((props: Props, ref) => {
  const {
    placeholder,
    label,
    className,
    onChange,
    name = "",
    type,
    value,
  } = props;
  const inputRef = useRef<HTMLInputElement>(null);
  useImperativeHandle(ref, () => ({
    getValue: () => inputRef?.current?.value,
  }));

  return (
    <div className={`${className}`}>
      {/* Current Desgin system don't include label */}
      {/* <label htmlFor={label}>
        {label}
      </label> */}

        <input
          onChange={onChange}
          type={type}
          id={label}
          name={name}
          ref={inputRef}
          value={value}
          className={`w-full px-4 cursor-pointer pl-1 text-heading-4 text-gray text-heading-6 rounded outline-0`}
          placeholder={placeholder}
        />
    </div>
  );
});

export default Input;
