import React, { useEffect, useRef } from 'react';

import girlImageImports from '../assets';

// @ts-ignore
const fibonacci = (num: number) => {
  if (num <= 1) return 1;

  return fibonacci(num - 1) + fibonacci(num - 2);
 };
 
const fib = fibonacci(42);

const value = { current: 0 } 
export const PageOne: React.FC = () => {
  const valueRef = useRef(0);

  console.log('PageOne: valuer = ', value.current);
  console.log('PageOne: valuerRef = ', valueRef.current);

  useEffect(() => {
    console.log('PageOne: Mounted');
    valueRef.current += 1;
    value.current += 1;
    return () => {
      console.log('PageOne: Unmount');
    }
  }, [])
  
  return (
    <div style={styles.container}>
        <img src={girlImageImports[0]} alt="Current img" />
        <p>{fib}</p>
    </div>
  );
}

const styles: { [name: string]: React.CSSProperties }  = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
}

export default PageOne;
