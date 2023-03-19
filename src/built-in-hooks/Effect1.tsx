import React, { useEffect, useState } from 'react';
import Button from '../components/Button';
// the useEffect hook allows  you to perform side effects in your component
// some examples of side effects are: fetching data, directly updating the DOM, and timers
// useEffect accepts two arguments
// the second argument is optional. useEffect(<function>, <dependency>)
export default function Effect1() {
  const [resourceType, setResourceType] = useState('post');
  const [items, setItems] = useState<any[]>([]);

  console.log('render');

  useEffect(() => {
    console.log('run useEffect');
    fetch(`https://jsonplaceholder.typicode.com/${resourceType}?_limit=10`)
      .then(response => {
        return response.json();
      })
      .then(json => {
        return setItems(json);
      });

    return () => {
      console.log('cleanup'); // more of this in the next useEffect sample
    };
  }, [resourceType]);
  // the 2nd parameter array is the dependency array
  // if it's empty, it's gonna run only once
  // if it's not empty, it's gonna run every time the value in the array changes
  // the dependency array is needed to avoid infinite loops

  return (
    <div>
      <div className="mb-4">
        <Button
          color="secondary"
          onClick={() => {
            setResourceType('posts');
          }}
        >
          Posts
        </Button>
        <Button
          color="secondary"
          onClick={() => {
            setResourceType('users');
          }}
        >
          Users
        </Button>
        <Button
          color="secondary"
          onClick={() => {
            setResourceType('comments');
          }}
        >
          Comments
        </Button>
      </div>
      <h1>{resourceType}</h1>
      {items?.map((item: any) => {
        return <p key={item.id}>{JSON.stringify(item)}</p>;
      })}
    </div>
  );
}
