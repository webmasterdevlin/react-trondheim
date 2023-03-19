import React, { useEffect, useState } from 'react';
// modify a variable base on the window size
export default function Effect2() {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  console.log('render');
  const handleResize = () => {
    setWindowWidth(window.innerWidth);
  };
  useEffect(() => {
    window.addEventListener('resize', handleResize);
    // the return statement is the cleanup function.
    // Otherwise, memory leak will happen that will cause the app to slow
    // down or crash. It's gonna run before the useEffect function runs again
    // it's gonna run when the component unmounts
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);
  return <h1>{windowWidth}</h1>;
}
