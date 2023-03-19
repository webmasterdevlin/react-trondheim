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

  const decrementCount = () => {
    setCount(prevCount => {
      return prevCount - 1;
    });
    setTheme('red');
  };

  const incrementCount = () => {
    setCount(p => {
      return p + 1;
    });
    setTheme('blue');
  };

  return (
    <div>
      <div className="mb-10 flex">
        <Button onClick={decrementCount} color="primary">
          DECREMENT
        </Button>
        <div className="m-5">
          <span>{count} : </span>
          <span>{theme}</span>
        </div>
        <Button onClick={incrementCount} color="primary">
          INCREMENT
        </Button>
      </div>
      <section className="mb-8">
        <p className="text-indigo-800">{JSON.stringify(user, null, 2)}</p>
      </section>
      <section>
        <label htmlFor="firstName">First Name:</label>
        <input
          id="firstName"
          value={user.firstName}
          onChange={e => {
            setUser({ ...user, firstName: e.target.value });
          }}
        />
        <label htmlFor="lastName">Last Name:</label>
        <input
          id="lastName"
          value={user.lastName}
          onChange={e => {
            setUser({ ...user, lastName: e.target.value });
          }}
        />
      </section>
    </div>
  );
}
