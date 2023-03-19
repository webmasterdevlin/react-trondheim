import React, { useEffect, useMemo, useState } from 'react';
import Button from '../components/Button';
// the react memo hook returns a memoized value
// think of memoization as caching a value so that it does not need
// to be recalculated.
// the useMemo hook only run when one of its dependencies update.
// this can improve performance. the useMemo and useCallback hooks are similar.
// the main difference is that useMemo returns a memoized value and
// useCallback return a memoized function
export default function Memo() {
  const [number, setNumber] = useState(0);
  const [dark, setDark] = useState(false);

  const doubleNumber = useMemo(() => {
    // useEffect will not run when setNumber is called
    return slowFunction(number);
  }, [number]);

  const themeStyles = useMemo(() => {
    // useEffect will not run when setDark is called
    return {
      backgroundColor: dark ? 'black' : 'white',
      color: dark ? 'white' : 'black',
    };
  }, [dark]);

  useEffect(() => {
    console.log('Theme changed');
  }, [themeStyles]);

  return (
    <>
      <input
        type="number"
        value={number}
        onChange={e => {
          setNumber(parseInt(e.target.value));
        }}
      />
      <Button
        color="primary"
        onClick={() => {
          setDark(prevState => {
            return !prevState;
          });
        }}
      >
        Change Theme
      </Button>
      <h1 style={themeStyles}>{doubleNumber}</h1>
    </>
  );
}
function slowFunction(num: number) {
  console.log('Calling slow function');
  for (let i = 0; i <= 1000000000; i++) {
    // console.log('i',i);
  }
  return num * 2;
}
