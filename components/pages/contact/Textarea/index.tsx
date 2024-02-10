import { useEffect, useRef, useState } from "react";

type ComponentProp = {
  value: string,
  className?: string,
  placeholder?: string,
  onChange: (value: string) => void,
}

export default function Component({value, className, placeholder, onChange}: ComponentProp) {
  const counter = useRef <number> (0);
  const [formValue, setFormValue] = useState <string> ("");

  function onTextareaChange({target: {value}}: any): void {
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
    <textarea
      rows={4}
      value={formValue}
      placeholder={placeholder}
      onChange={onTextareaChange}
      className={`p-3 text-sm md:text-base resize-none rounded-md outline-0 border block w-full border-gray-300 ${className}`}
    ></textarea>
  );
}