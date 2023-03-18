import React from 'react';
import { useNavigate } from 'react-router';

export default function NavigationBar() {
  const navigate = useNavigate();

  return (
    <nav>
      <div>
        <div>
          <div>
            <button
              onClick={() => {
                navigate('/');
              }}
            >
              work todos
            </button>
            <button
              onClick={() => {
                navigate('/shopping-list');
              }}
            >
              shopping list
            </button>
            <button
              onClick={() => {
                navigate('/auth');
              }}
            >
              login
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}
