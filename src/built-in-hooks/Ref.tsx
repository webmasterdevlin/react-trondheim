import React, { useEffect, useRef, useState } from 'react';
import Button from '../components/Button';
// the useRef hook allows to persist values between renders
// it can be used to store a mutable value that does not cause a re-render when updated
// it can be used to access a DOM element directly
export default function Ref() {
  const [name, setName] = useState('');
  const prevNameRef = useRef('');
  const inputRef = useRef<HTMLInputElement>(null);
  const focus = () => {
    inputRef.current?.focus();
  };
  useEffect(() => {
    prevNameRef.current = name;
  }, [inputRef.current?.value as string]);
  console.log('rendered');

  return (
    <>
      <input
        value={inputRef.current?.value}
        onChange={e => {
          console.log('logs:', {
            event: e.target.value,
            inputRef: inputRef.current?.value,
          });
          setName(e.target.value); // causes re-render
        }}
      />
      <div>
        <h2>My name is {inputRef.current?.value}</h2>
        <h3>Previous value is {prevNameRef.current}</h3>
      </div>
      <Button color="primary" onClick={focus}>
        Focus
      </Button>
    </>
  );
}
