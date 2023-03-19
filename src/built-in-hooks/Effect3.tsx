import React, { useEffect } from 'react';

type Props = {
  cost: number;
  discount: number;
};
export default function Effect3({ cost, discount }: Props) {
  const { total } = useItemDiscounts(cost, discount);

  return <div>Effect3 with custom hooks : {total}</div>;
}
// reusable business logic in other components
export function useItemDiscounts(cost: number, discount: number) {
  // run multiple useEffects
  useEffect(() => {
    console.log('useEffect 1: ', cost);
  }, []);
  useEffect(() => {
    console.log('useEffect 2: ', discount);
  }, []);
  useEffect(() => {
    console.log('useEffect 3: ', cost - discount);
  }, []);

  return { total: cost - discount };
}
