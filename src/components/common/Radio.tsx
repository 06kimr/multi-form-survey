import { forwardRef, InputHTMLAttributes } from "react";
import CheckIcon from "../../assets/icons/radio_button_checked.svg?react";
import UncheckedIcon from "../../assets/icons/radio_button_unchecked.svg?react";

interface Props extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
}

const Radio = forwardRef<HTMLInputElement, Props>(function Radio(
  { label, ...props },
  ref
) {
  return (
    <label className="relative flex items-center h-26">
      <input type="radio" className="opacity-0 peer w-26 h-26" {...props} ref={ref} />
      <CheckIcon className="absolute top-0 left-0 transition-opacity opacity-0 peer-checked:opacity-100" />
      <UncheckedIcon className="absolute top-0 left-0 transition-opacity opacity-100 peer-checked:opacity-0" />
      <span className="pl-14">{label}</span>
    </label>
  );
});

export default Radio;
