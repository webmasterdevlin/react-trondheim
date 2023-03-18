import React from 'react';
import type { ReactNode } from 'react';

type Props = {
  children?: ReactNode; // children props
};
/*
MainLayout for template
*/
export default function MainLayout({ children }: Props) {
  return (
    <div className="bg-gray-100">
      <div className="container prose mx-auto">{children}</div>
    </div>
  );
}
