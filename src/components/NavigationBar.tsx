import React from 'react';
import { useLocation, useNavigate } from 'react-router';

export default function NavigationBar() {
  const navigate = useNavigate();
  const location = useLocation();

  return (
    <nav className="w-full bg-gray-100 pb-10 font-sans shadow">
      <div className="bg-blue-900">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-start gap-2 py-4">
            <button
              className={`mr-2 mb-2 rounded-lg px-5 py-2.5 text-center text-sm font-medium uppercase
              ${location.pathname === '/' ? 'bg-blue-200' : 'bg-gray-100'}
              `}
              onClick={() => {
                navigate('/');
              }}
            >
              work todos
            </button>
            <button
              className={`mr-2 mb-2 rounded-lg px-5 py-2.5 text-center text-sm font-medium uppercase
            ${location.pathname === '/shopping-list' ? 'bg-blue-200' : 'bg-gray-100'}
            `}
              onClick={() => {
                navigate('/shopping-list');
              }}
            >
              shopping list
            </button>
            <button
              className={`mr-2 mb-2 rounded-lg px-5 py-2.5 text-center text-sm font-medium uppercase
            ${location.pathname === '/auth' ? 'bg-blue-200' : 'bg-gray-100'}
            `}
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
