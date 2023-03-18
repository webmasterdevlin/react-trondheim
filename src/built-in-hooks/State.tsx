/* eslint-disable autofix/no-unused-vars */
import React, { useState } from 'react';
import Button from '../components/Button';
import type { User } from './models/user';

// React hooks are simple JavaScript functions that we can use to
// isolate the reusable part from a functional component

// The React useState Hook allows us to track state in a function component
// State generally refers to data or properties that need to be tracking
// in application

export default function State() {
  // hooks, prefixed with use, can only be used in a function component,
  // not in a class component.
  // you can't put hooks in a loop, condition, or nested function

  const [count, setCount] = useState(0);
  const [theme, setTheme] = useState('blue');

  const [user, setUser] = useState<User>({
    firstName: '',
    lastName: '',
  });

  return (
    <div>
      <div className="mb-10 flex">
        <Button color="primary">DECREMENT</Button>
        <div className="m-5">
          <span>{count} : </span>
          <span>{theme}</span>
        </div>
        <Button color="primary">INCREMENT</Button>
      </div>
    </div>
  );
}
