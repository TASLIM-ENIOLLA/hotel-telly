import { useState, useRef, useEffect } from "react";

type Option = {
  option: string,
  value: string
}

type ComponentProp = {
  value: string,
  options: Option[],
  className?: string,
  onChange: (value: string) => void,
}

export default function Component({value, options, onChange, className}: ComponentProp) {
  const counter = useRef <number> (0);
  const [formValue, setFormValue] = useState <string> ("");
  
  function onSelectChange({target: {value}}: any): void {
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
  }, [formValue])

  useEffect(() => {
    if(counter.current > 1 || value) {
      setFormValue(value);
    }
  }, [value]);

  return (
    <select
      value={formValue}
      onChange={onSelectChange}
      className={`p-3 text-sm md:text-base outline-0 rounded-md border block w-full border-gray-300 ${className}`}
    >
      <option value=""></option>
      {options.map(({ value, option }: Option, index: number) => (
        <option key={index} className="capitalize" value={value}>{option}</option>
      ))}
    </select>
  );
}