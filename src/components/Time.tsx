import React from 'react';

interface TimeProps {
  time: string;
  color: string;
}

const Time: React.FC<TimeProps> = ({ time, color }) => {

  console.log('Render Time');
  

  return (
    <h1 style={{...styles.container, color}}>{time}</h1>
  );
};

const styles: { [name: string]: React.CSSProperties }  = {
  container: {
    fontSize: 48,
  },
  time: {
    
  }
}

export default Time;