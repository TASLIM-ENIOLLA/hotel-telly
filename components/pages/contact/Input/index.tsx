import { useEffect, useRef, useState } from "react";

type ComponentProp = {
  type: string,
  value: string,
  className?: string,
  min?: string | number,
  placeholder?: string,
  onChange: (value: string) => void,
}

export default function Component({type, min, value, className, placeholder, onChange}: ComponentProp) {
  const counter = useRef <number> (0);
  const [formValue, setFormValue] = useState <string> ("");

  function onInputChange({target: {value}}: any): void {
    counter.current += 1;

    setFormValue(value);
  }

  useEffect(() => {
    return () => {
      counter.current = 0;
    }
  }, []);

  useEffect(() => {
    if(typeof onChange === "function") {
      onChange(formValue);
    }
  }, [formValue]);

  useEffect(() => {
    if(counter.current > 1 || value) {
      setFormValue(value);
    }
  }, [value]);

  return (
    <input
      min={min}
      type={type}
      value={formValue}
      onChange={onInputChange}
      placeholder={placeholder}
      className={`p-3 text-sm md:text-base outline-0 rounded-md border block w-full border-gray-300 ${className}`}
    />
  );
}