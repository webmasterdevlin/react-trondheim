import React, { lazy, Suspense } from 'react';
import { useRoutes } from 'react-router';
import type { ElementType } from 'react';
import type { RouteObject } from 'react-router';

const Loadable = (Component: ElementType) => {
  const LazyComponents = (props: any) => {
    return (
      <Suspense fallback={<h1>Loading</h1>}>
        <Component {...props} />
      </Suspense>
    );
  };
  return LazyComponents;
};
const WorkTodosPage = Loadable(
  lazy(() => {
    return import('./pages/WorkTodosPage');
  }),
);
const ShoppingListPage = Loadable(
  lazy(() => {
    return import('./pages/ShoppingListPage');
  }),
);
const LoginPage = Loadable(
  lazy(() => {
    return import('./pages/LoginPage');
  }),
);

type Paths = { work: string; shoppingList: string; auth: string };

export const pathNames: Paths = {
  work: '/',
  shoppingList: '/shopping-list',
  auth: '/auth',
};
const lazyRoutes: RouteObject[] = [
  {
    path: pathNames.work,
    element: <WorkTodosPage />,
  },
  {
    path: pathNames.shoppingList,
    element: <ShoppingListPage />,
  },
  {
    path: pathNames.auth,
    element: <LoginPage />,
  },
];

const LazyRoutes = () => {
  const contents = useRoutes(lazyRoutes);
  return <>{contents}</>;
};

export default LazyRoutes;
