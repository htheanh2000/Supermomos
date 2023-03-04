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
    className,
    onChange,
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
          {...props}
          className={`w-full px-4 cursor-pointer pl-1 text-heading-4 text-gray text-heading-6 rounded outline-0`}
        />
    </div>
  );
});

export default Input;
